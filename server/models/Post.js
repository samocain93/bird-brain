const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = model('Post', postSchema);
module.exports = Post;
