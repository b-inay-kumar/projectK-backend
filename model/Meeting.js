const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    attendees: { type: [String], required: true },
    description: { type: String },
    location: { type: String },
  },
  { timestamps: true },
);

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
