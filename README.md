# Chat Application with Node.js and Socket.io

This project is a real-time chat application built using Node.js, Express, MongoDB, and Socket.io. It provides user authentication, user management, and supports both group chats and private messaging functionalities.

## Features

- **User Authentication:**
  - Register and login functionality with JSON Web Tokens (JWT).
  - Secure password hashing using bcrypt.

- **Real-Time Messaging:**
  - WebSocket-based messaging using Socket.io.
  - Support for group chats and private messaging.
  - Chat history retrieval and message persistence in MongoDB.

- **User Management:**
  - CRUD operations for managing user profiles.
  - Online/offline status tracking.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - Socket.io for real-time communication

- **Frontend (if applicable):**
  - HTML, CSS, JavaScript (for client-side implementation)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (local or remote instance)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app

2. Install dependencies:

    ```bash
    npm install

3. Set up environment variables:

    Create a .env file in the root directory and add the following:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

    Replace your_mongodb_uri and your_jwt_secret with your MongoDB connection URI and a secure JWT secret.

4. Start the server:

    ```bash
    npm start

## Usages

-Use Postman or a similar tool to test API endpoints (`/api/auth`, `/api/users`, `/api/chats`) for user authentication, user management, and chat functionalities.
-Integrate with a frontend application to enable a complete chat experience.