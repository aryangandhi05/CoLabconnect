const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 5001 });

wss.on("connection", (ws) => {
  //console.log("Client connected");
  ws.on("message", (message) => {
    //console.log(`Received message: ${message}`);

    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle WebSocket closure
  ws.on("close", () => {
    //console.log("Client disconnected");
  });
});
