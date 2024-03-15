const express = require("express");
const { protect } = require("../middlerware/authMiddleware")

const router = express.Router();

 router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats);
//  router.route("/group").post(protect, createGroupChats);
//  router.route("/rename").put(protect, renameGroup);
//  router.route("/groupremove").post(protect, removeFromGroup);
//  router.route("/groupadd").post(protect, addToGroup);

module.exports = router;