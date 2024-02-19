const express = require("express");
const { protect } = require("../middleware/authen.js");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController.js");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
