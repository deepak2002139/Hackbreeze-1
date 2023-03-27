import mongoose from "mongoose";

const SupporterSchema = new mongoose.Schema({
  funds: {
    type: Number,
  },
  goodies: [String],
  tier: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Supporter =
  mongoose.models?.Supporter || mongoose.model("Supporter", SupporterSchema);

export default Supporter;
