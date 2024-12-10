const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // age: {
    //   type: Number,
    //   required: true,
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { strict: false }
);

module.exports = mongoose.model("Booking", BookingSchema);
