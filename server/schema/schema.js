// const users = require('../seeds/userData.js');
// const posts = require('../seeds/postData.js');
// const comments = require('../seeds/commentData.js');

// Mongoose models
const User = require('../models/User.js');
const Post = require('../models/Post.js');
const Comment = require('../models/Comment.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    friends: { type: GraphQLList(GraphQLID) },
    age: { type: GraphQLInt },
    location: { type: GraphQLString },
    occupation: { type: GraphQLString },
    bio: { type: GraphQLString },
    posts: {
      type: PostType,
      resolve(parent, args) {
        return Post.find(parent.posts)
      },
    },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    likes: { type: GraphQLInt },
    comments: { type: GraphQLList(GraphQLID) },
  }),
});

// Comment Type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    postId: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
    picturePath: { type: GraphQLString },
    userPicturePath: { type: GraphQLString },
    likes: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },

    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },

    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.findById(args.id);
      },
    },

    comments: {
      type: GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      },
    },
  },
});

// Mutations

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a user
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        picturePath: { type: GraphQLString },
        friends: { type: GraphQLList(GraphQLID) },
        age: { type: GraphQLInt },
        location: { type: GraphQLString },
        occupation: { type: GraphQLString },
        bio: { type: GraphQLString },
        posts: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        let user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
          picturePath: args.picturePath,
          friends: args.friends,
          age: args.age,
          location: args.location,
          occupation: args.occupation,
          bio: args.bio,
          posts: args.posts,
        });
        return user.save();
      },
    },

    // Delete a user
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },

    // Update a user
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        picturePath: { type: GraphQLString },
        friends: { type: GraphQLList(GraphQLID) },
        age: { type: GraphQLInt },
        location: { type: GraphQLString },
        occupation: { type: GraphQLString },
        bio: { type: GraphQLString },
        posts: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              firstName: args.firstName,
              lastName: args.lastName,
              email: args.email,
              password: args.password,
              picturePath: args.picturePath,
              friends: args.friends,
              age: args.age,
              location: args.location,
              occupation: args.occupation,
              bio: args.bio,
              posts: args.posts,
            },
          },
          { new: true }
        );
      },
    },

    // Add a post
    addPost: {
      type: PostType,
      args: {
        userId: { type: GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        description: { type: GraphQLNonNull(GraphQLString) },
        picturePath: { type: GraphQLString },
        likes: { type: GraphQLInt },
        comments: { type: GraphQLList(GraphQLID) },
      },
      resolve(parent, args) {
        let post = new Post({
          userId: args.userId,
          firstName: args.firstName,
          lastName: args.lastName,
          location: args.location,
          description: args.description,
          picturePath: args.picturePath,
          likes: args.likes,
          comments: args.comments,
        });
        return post.save();
      },
    },

    // Delete a post
    deletePost: {
      type: PostType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Post.findByIdAndRemove(args.id);
      },
    },

    // Update a post
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
        picturePath: { type: GraphQLString },
        likes: { type: GraphQLInt },
        comments: { type: GraphQLList(GraphQLID) },
      },
    },

    // Add a comment
    addComment: {
      type: CommentType,
      args: {
        userId: { type: GraphQLNonNull(GraphQLID) },
        postId: { type: GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        description: { type: GraphQLNonNull(GraphQLString) },
        picturePath: { type: GraphQLString },
        userPicturePath: { type: GraphQLString },
        likes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let comment = new Comment({
          userId: args.userId,
          postId: args.postId,
          firstName: args.firstName,
          lastName: args.lastName,
          location: args.location,
          description: args.description,
          picturePath: args.picturePath,
          userPicturePath: args.userPicturePath,
          likes: args.likes,
        });
        return comment.save();
      },
    },

    // Delete a comment
    deleteComment: {
      type: CommentType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Comment.findByIdAndRemove(args.id);
      },
    },

    // Update a comment
    updateComment: {
      type: CommentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLID },
        postId: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
        picturePath: { type: GraphQLString },
        userPicturePath: { type: GraphQLString },
        likes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.findByIdAndUpdate(
          args.id,
          {
            $set: {
              userId: args.userId,
              postId: args.postId,
              firstName: args.firstName,
              lastName: args.lastName,
              location: args.location,
              description: args.description,
              picturePath: args.picturePath,
              userPicturePath: args.userPicturePath,
              likes: args.likes,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
