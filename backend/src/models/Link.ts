import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const link = mongoose.model("link", linkSchema);

export default link;
