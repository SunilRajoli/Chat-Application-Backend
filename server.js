const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const User = require('./models/User');

require('dotenv').config();

connectDB();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);

io.on('connection', (socket) => {
  socket.on('join', async ({ userId }) => {
    const user = await User.findById(userId);
    if (user) {
      user.online = true;
      await user.save();
      io.emit('userStatus', { userId: user._id, online: true });
    }
  });

  socket.on('leave', async ({ userId }) => {
    const user = await User.findById(userId);
    if (user) {
      user.online = false;
      await user.save();
      io.emit('userStatus', { userId: user._id, online: false });
    }
  });

  socket.on('message', async ({ chatId, userId, content }) => {
    const message = new Message({ chatId, sender: userId, content });
    await message.save();
    io.to(chatId).emit('newMessage', message);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
