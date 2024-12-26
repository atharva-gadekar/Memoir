const mongoose = require("mongoose");
const { Schema } = mongoose;

const EntrySchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  audioPath: {
    type: String,
    default: null,
  },
  imagePath: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Entry", EntrySchema);
