const express = require("express");
const {
  loginController,
  registerController,
  allUsers,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authen.js");
const router = express.Router();

router.get("/", protect, allUsers);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
