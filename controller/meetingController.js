// controller/MeetingController.js

const Meeting = require("../model/Meeting.js");

// Create a new meeting (POST)
const createMeeting = async (req, res) => {
  const { title, date, time, attendees, description, location } = req.body;

  if (!title || !date || !time || !attendees) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  try {
    const newMeeting = new Meeting({
      title,
      date,
      time,
      attendees,
      description,
      location,
    });
    await newMeeting.save();
    res
      .status(201)
      .json({ message: "Meeting created successfully", data: newMeeting });
  } catch (error) {
    res.status(500).json({ message: "Error creating meeting", error });
  }
};

// Get all meetings (GET)
const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meetings", error });
  }
};

// Update a meeting (PUT)
const updateMeeting = async (req, res) => {
  const { id } = req.params;
  const { title, date, time, attendees, description, location } = req.body;

  try {
    const updatedMeeting = await Meeting.findByIdAndUpdate(
      id,
      { title, date, time, attendees, description, location },
      { new: true },
    );
    if (!updatedMeeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    res
      .status(200)
      .json({ message: "Meeting updated successfully", data: updatedMeeting });
  } catch (error) {
    res.status(500).json({ message: "Error updating meeting", error });
  }
};

// Patch a meeting (PATCH)
const patchMeeting = async (req, res) => {
  const { id } = req.params;
  const { title, date, time, attendees, description, location } = req.body;

  try {
    const patchedMeeting = await Meeting.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!patchedMeeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    res
      .status(200)
      .json({ message: "Meeting patched successfully", data: patchedMeeting });
  } catch (error) {
    res.status(500).json({ message: "Error patching meeting", error });
  }
};

// Delete a meeting (DELETE)
const deleteMeeting = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMeeting = await Meeting.findByIdAndDelete(id);
    if (!deletedMeeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }
    res.status(200).json({ message: "Meeting deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting meeting", error });
  }
};

module.exports = {
  createMeeting,
  getAllMeetings,
  updateMeeting,
  patchMeeting,
  deleteMeeting,
};
