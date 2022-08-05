import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // shopaccount: {
    //   accountnumber: { type: Number },
    //   // accountname: { type: String },
    //   // bankname: { type: String },
    //   accountpin: { type: Number },
    //   accountbalance: { type: Number, required: true, default: 0.0 },
    // },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
