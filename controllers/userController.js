// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

exports.getUserStatus = async (req, res) => {
  const user = await User.findById(req.params.id).select('online');
  if (user) {
    res.json({ online: user.online });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
