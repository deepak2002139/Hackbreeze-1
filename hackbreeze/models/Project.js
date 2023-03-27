import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  tasks: [String],
  duration: Number,
  techused: {
    type: String,
  },
  madeBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  madeFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Project =
  mongoose.models?.Project || mongoose.model("Project", ProjectSchema);

export default Project;
