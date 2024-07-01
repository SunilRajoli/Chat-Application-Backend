// routes/userRoutes.js
const express = require('express');
const { getAllUsers, getUserStatus } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getAllUsers);
router.get('/:id/status', authMiddleware, getUserStatus);

module.exports = router;
