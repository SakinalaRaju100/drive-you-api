const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/find-drive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a sample route
app.get("/", (req, res) => {
  res.send("Express server is up and running!");
});
app.post("/new-booking", async (req, res) => {
  const body = req.body;
  try {
    const newBooking = new Booking({ ...body });
    await newBooking.save();
    res.status(200).send("Booking saved");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Booking failed");
  }
});

app.post("/get-bookings", async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.status(200).send({
      seccess: true,
      data: allBookings,
    });
  } catch (err) {
    console.log("err", err);
    alert(err);
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
