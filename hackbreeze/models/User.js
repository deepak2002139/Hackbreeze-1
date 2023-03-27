import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
  },
  imageUrls: {
    type: [String],
  },
  techused: String,
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
