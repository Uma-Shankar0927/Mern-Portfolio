import express from 'express';
import User from '../mongodb/models/user.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { name, email, message} = req.body;

    const newPost = await User.create({
      name:name,
      email:email,
      message:message
    });
    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create contact user' });
  }
});

export default router;