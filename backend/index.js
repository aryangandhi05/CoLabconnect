const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/userRoute.js");
const chatRoute = require("./routes/chatRoute.js");
const messageRoute = require("./routes/messageRoute.js");
const { Server } = require("socket.io");
const { errorHandler, notFound } = require("./middleware/error.js");
const db = require("./db/db");

dotenv.config();
const app = express();
let port = process.env.PORT1 || 8000;

app.use(cors());
app.use(express.json());
db();

app.use("/user", userRoute);
app.use("/chat", chatRoute);
app.use("/message", messageRoute);

const httpServer = app.listen(port, () => {
  console.log(`App is running on the Port ${port}`);
});

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
    credentials: true,
  },
});

const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  // socket.on("group created", (room) => socket.in(room).emit("group created"));
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });

  // ... rest of the socket.io code

  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log(emailId, roomId);

    emailToSocketMapping.set(emailId, socket.id);
    socketToEmailMapping.set(socket.id, emailId);
    socket.join(roomId);
    socket.emit("joined-room", {
      roomId,
    });
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });

  // ... rest of the socket.io code

  socket.on("call-user", (data) => {
    const { emailId, offer } = data;
    const socketId = emailToSocketMapping.get(emailId);
    const fromEmail = socketToEmailMapping.get(socket.id);
    socket.to(socketId).emit("incoming-call", {
      from: fromEmail,
      offer,
    });
  });

  socket.on("call-accepted", (data) => {
    const { emailId, ans } = data;
    const socketId = emailToSocketMapping.get(emailId);

    socket.to(socketId).emit("call-accepted", { ans });
  });
});
