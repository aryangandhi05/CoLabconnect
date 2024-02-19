const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const protect = async (req, res, next) => {
  let token;

  //console.log(process.env.JWT_SECRET);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //console.log(token);

      // decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);

      req.user = await User.findById(decoded.id).select("-password");
      //console.log(req.user);

      next();
    } catch (error) {
      res.status(401).json({ error: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ error: "Not authorized, no token" });
  }
};

module.exports = { protect };
