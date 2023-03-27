import mongoose from "mongoose";

const RankingSchema = new mongoose.Schema({
  ranking: {
    type: Number,
  },
  review: {
    type: String,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ranking",
  },
});

const Ranking =
  mongoose.models?.Ranking || mongoose.model("Ranking", RankingSchema);

export default Ranking;
