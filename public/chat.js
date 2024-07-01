// public/chat.js
const socket = io();

document.getElementById('send').addEventListener('click', () => {
  const message = document.getElementById('message').value;
  socket.emit('message', { chatId: 'some-chat-id', userId: 'some-user-id', content: message });
});

socket.on('newMessage', (message) => {
  const chat = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.textContent = message.content;
  chat.appendChild(messageElement);
});
