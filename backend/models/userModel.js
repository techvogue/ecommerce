import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {
      type: Object,
      default: {}
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    timestamps: true,
    minimize: false, // ✅ ensure nested objects aren't stripped
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
