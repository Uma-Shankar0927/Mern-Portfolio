import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  file: { type: String, required: true },
  name: { type: String, required: true },
  livelink: { type: String, required: true },
  codelink: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;