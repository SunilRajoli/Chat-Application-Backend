// models/Chat.js
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  name: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isGroupChat: { type: Boolean, default: false },
});

module.exports = mongoose.model('Chat', ChatSchema);
