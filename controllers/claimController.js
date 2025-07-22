import User from '../models/User.js';
import Claim from '../models/Claim.js';

// POST /api/claims/:userId
export const claimPoints = async (req, res) => {
  const userId = req.params.userId;
  const points = Math.floor(Math.random() * 10) + 1; // 1 to 10

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.totalPoints += points;
    await user.save();

    const claim = new Claim({ userId, points });
    await claim.save();

    res.status(200).json({ message: 'Points claimed', claim });
  } catch (err) {
    res.status(500).json({ message: 'Failed to claim points' });
  }
};
