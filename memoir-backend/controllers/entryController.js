const Entry = require("../models/entry");

const addEntry = async (req, res) => {
  try {
    const { text, audioPath, imagePath } = req.body;
    const { userId } = req.user;

    const today = new Date().toISOString().split("T")[0];

    let entry = await Entry.findOne({
      userId,
      date: {
        $gte: new Date(`${today}T00:00:00.000Z`),
        $lt: new Date(`${today}T23:59:59.999Z`),
      },
    });

    if (entry) {
      entry.text += `\n\n${text}`;
      if (audioPath) entry.audioPath = audioPath;
      if (imagePath) entry.imagePath.push(...imagePath);
      await entry.save();

      return res.status(200).json({ message: "Entry updated successfully", entry });
    }

    entry = new Entry({
      userId,
      date: new Date(),
      text,
      audioPath,
      imagePath,
    });
    await entry.save();

    res.status(201).json({ message: "Entry added successfully", entry });
  } catch (error) {
    res.status(500).json({ message: "Error adding entry", error });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user; 

    const entry = await Entry.findById(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    if (entry.userId.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to delete this entry" });
    }

    await Entry.findByIdAndDelete(id);
    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting entry", error });
  }
};

const editEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, audioPath, imagePath } = req.body;
    const { userId } = req.user;

    const entry = await Entry.findById(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    if (entry.userId.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to edit this entry" });
    }

    const today = new Date().toISOString().split('T')[0];
    const entryDate = new Date(entry.date).toISOString().split('T')[0];
    if (today !== entryDate) {
      return res.status(403).json({ message: "You can only edit today’s entry" });
    }

    entry.text = text || entry.text;
    entry.audioPath = audioPath || entry.audioPath;
    entry.imagePath = imagePath || entry.imagePath;
    await entry.save();

    res.status(200).json({ message: "Entry updated successfully", entry });
  } catch (error) {
    res.status(500).json({ message: "Error editing entry", error });
  }
};

const getAllEntries = async (req, res) => {
  try {
    const { userId } = req.user;

    const entries = await Entry.find({ userId }).sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entries", error });
  }
};

const getEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const entry = await Entry.findById(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    if (entry.userId.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to view this entry" });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entry", error });
  }
};

module.exports = { addEntry, deleteEntry, editEntry, getAllEntries, getEntry };