// routes/chatRoutes.js
const express = require('express');
const { createChat, getChatMessages, sendMessage } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createChat);
router.get('/:chatId/messages', authMiddleware, getChatMessages);
router.post('/messages', authMiddleware, sendMessage);

module.exports = router;
