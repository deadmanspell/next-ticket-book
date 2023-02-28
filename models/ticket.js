import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Fill Out The Ticket Name"],
    trim: true,
    maxLength: [125, "Room Name Cannot Exceed 125 Characters"],
  },
  // category: {
  //   type: String,
  //   required: [true, "Please Fill Out The Ticket Category"],
  //   enum: {
  //     values: ["VVIP", "VIP", "Regular"],
  //     message: "Please Pick Ticket Category",
  //   },
  //   maxLength: [125, "Room Name Cannot Exceed 125 Characters"],
  // },
  price: {
    type: Number,
    required: [true, "Please Fill Out The Price"],
    maxLength: [8, "Ticket Name Cannot Exceed 125 Characters"],
    default: 0.0,
  },
  quantity: {
    type: Number,
    required: [true, "Please Fill Out The Ticket Quantity"],
  },
  description: {
    type: String,
    required: [true, "Please Fill Out The Ticket Description"],
  },
  address: {
    type: String,
    required: [true, "Please enter Ticket Address"],
  },
  //   date: {
  //     type: Date,
  //     required: [true, "Please Fill Out the Ticket Date"],
  //   },
  // images: [
  //   {
  //     public_id: {
  //       type: String,
  //       required: true,
  //     },
  //     url: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // reviews: [
  //   {
  //     user: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "User",
  //       required: false,
  //     },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: false,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

export default mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
