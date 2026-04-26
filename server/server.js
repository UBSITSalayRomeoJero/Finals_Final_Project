const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* CONNECT MONGODB */
mongoose.connect("mongodb://127.0.0.1:27017/contact")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* SCHEMA */
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

/* MODEL */
const Contact = mongoose.model("Contact", contactSchema);

/* ROUTE */
app.post("/contact", async (req, res) => {
  try {
    console.log("RECEIVED:", req.body);

    const saved = await Contact.create(req.body);

    res.json({
      message: "Message sent successfully",
      data: saved
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

/* START SERVER */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});