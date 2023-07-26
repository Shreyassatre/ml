const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

// Create a new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required fields." });
    }

    // Save the contact message to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the contact message." });
  }
});

router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find({}, '-__v').sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

module.exports = router;
