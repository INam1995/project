const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  pdfUrl: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
