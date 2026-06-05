const Contact = require("../Models/ContactModel");

// SUBMIT CONTACT
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message.", error: error.message });
  }
};

// GET ALL MESSAGES
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages.", error: error.message });
  }
};

// REPLY / UPDATE STATUS
const replyMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      id,
      { reply, status: "Responded" },
      { new: true }
    );
    res.status(200).json({ message: "Reply sent.", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Reply failed.", error: error.message });
  }
};

// DELETE MESSAGE
const deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted." });
  } catch (error) {
    res.status(500).json({ message: "Delete failed.", error: error.message });
  }
};

module.exports = { submitContact, getMessages, replyMessage, deleteMessage };
