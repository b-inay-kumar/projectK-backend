// routes/index.js

const express = require("express");
const {
  requestForContact,
  viewContact,
} = require("../controller/ContactController");
const {
  createMeeting,
  getAllMeetings,
  updateMeeting,
  patchMeeting,
  deleteMeeting,
} = require("../controller/meetingController");

const router = express.Router();

// Contact routes
router.post("/contact", requestForContact);
router.get("/contact", viewContact);

// Meeting routes
router.post("/meetings", createMeeting);
router.get("/meetings", getAllMeetings);
router.put("/meetings/:id", updateMeeting);
router.patch("/meetings/:id", patchMeeting);
router.delete("/meetings/:id", deleteMeeting);

module.exports = router;
