const Contact = require("../model/Contact");

const requestForContact = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, whatsapp, message, consent } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !whatsapp ||
      !message ||
      consent === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      mobile,
      whatsapp,
      message,
      consent,
    });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const viewContact = async (req, res) => {
  try {
    // Show all contacts
    const contacts = await Contact.find().sort({ _id: -1 });

    if (!contacts) {
      return res.status(404).json({ message: "No contacts found" });
    }

    return res
      .status(200)
      .json({ message: "Contact saved successfully", data: contacts });
  } catch (error) {}
};

module.exports = {
  requestForContact,
  viewContact,
};
