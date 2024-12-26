const express = require("express");
const {
  addEntry,
  deleteEntry,
  editEntry,
  getAllEntries,
  getEntry,
} = require("../controllers/entryController");
const authenticate = require("../middleware/auth");
const router = express.Router();

router.post("/", authenticate, addEntry);
router.delete("/:id", authenticate, deleteEntry);
router.put("/:id", authenticate, editEntry);
router.get("/", authenticate, getAllEntries);
router.get("/:id", authenticate, getEntry);

module.exports = router;