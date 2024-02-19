const express = require("express");
const { protect } = require("../middleware/authen.js");
const {
  accessChat,
  addToGroup,
  createGroupChat,
  fetchChats,
  removeFromGroup,
  renameGroup,
} = require("../controllers/chatController.js");
const { fetchJobDetailsById } = require("./Jobservice.js");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupDetails/:id").get(fetchJobDetailsById);

module.exports = router;
