const mongoose = require('mongoose');

// Create a schema for the User model
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    picturePath: {
      type: String,
      default:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    friends: {
      type: Array,
      default: [],
    },
    age: Number,
    location: String,
    occupation: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
