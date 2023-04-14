const db = require("../config/db");
const { User, Post, Comment } = require("../models");

const userData = require("../seeds/userData.json");
const postData = require("../seeds/postData.json");
const commentData = require("../seeds/commentData.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});

  //bulk create each model
  const users = await User.insertMany(userData);
  const posts = await Post.insertMany(postData);
  const comments = await Comment.insertMany(commentData);

  // assign a random post to the posts array in each user
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    user.posts.push(randomPost);
    await user.save();
  }

  // assign a random user to the user field in each post
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    post.user = randomUser._id;
    console.log(post);
    await post.save();
  }

  // assign a random user and post to the user and post fields in each comment
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    comment.user = randomUser;
    comment.post = randomPost;
    await comment.save();
  }

  // assign a random comment to the comments array in each post
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
    post.comments.push(randomComment);
    await post.save();
  }

  console.log("Data seeded!🌱");

  // Disconnect from the database
  process.exit(0);
});
