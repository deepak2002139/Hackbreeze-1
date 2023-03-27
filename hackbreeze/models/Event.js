import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  email: [
    {
      type: String,
    },
  ],
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  imageUrls: {
    type: [String],
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  organisers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  rankings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ranking",
    },
  ],
  supporters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supporter",
    },
  ],
  domains: [{ type: String }],
});

const Event = mongoose.models?.Event || mongoose.model("Event", EventSchema);

export default Event;
