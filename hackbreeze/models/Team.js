import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  technologiesDesc: {
    type: String,
  },
  imageUrls: {
    type: [String],
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Team = mongoose.models?.Team || mongoose.model("Team", TeamSchema);

export default Team;
