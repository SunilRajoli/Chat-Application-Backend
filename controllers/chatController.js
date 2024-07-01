// controllers/chatController.js
const Chat = require('../models/Chat');
const Message = require('../models/Message');

exports.createChat = async (req, res) => {
  const { name, members, isGroupChat } = req.body;
  const chat = new Chat({ name, members, isGroupChat });
  await chat.save();
  res.status(201).json(chat);
};

exports.getChatMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId });
  res.json(messages);
};

exports.sendMessage = async (req, res) => {
  const { chatId, content } = req.body;
  const message = new Message({ chatId, sender: req.user._id, content });
  await message.save();
  res.status(201).json(message);
};
