import User from '../models/User.js';

// GET all users (for leaderboard)
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// POST new user
export const addUser = async (req, res) => {
  const { name } = req.body;
  try {
    const existing = await User.findOne({ name });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, totalPoints: 0 });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add user' });
  }
};
