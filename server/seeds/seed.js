const db = require('../config/db');
const { User, Post, Comment } = require('../models');

const userData = require('../seeds/userData.json');
const postData = require('../seeds/postData.json');
const commentData = require('../seeds/commentData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});

  //bulk create each model
  const users = await User.insertMany(userData);
  const posts = await Post.insertMany(postData);
  const comments = await Comment.insertMany(commentData);

  console.log('data seeded!');
  process.exit(0);
});
