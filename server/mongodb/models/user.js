import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const PostSchema = mongoose.model('User', User);

export default PostSchema;