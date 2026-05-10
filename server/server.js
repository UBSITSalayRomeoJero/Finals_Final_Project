const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://20198552_db_user:Twiceteen123@ac-oznphcl-shard-00-00.c7ukzev.mongodb.net:27017,ac-oznphcl-shard-00-01.c7ukzev.mongodb.net:27017,ac-oznphcl-shard-00-02.c7ukzev.mongodb.net:27017/portfolio?ssl=true&replicaSet=atlas-7ybbp3-shard-0&authSource=admin&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const contactSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema,);

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

app.post("/contact", async (req, res) => {
  try {
    console.log("Incoming message:", req.body);

    const saved = await Contact.create(req.body);

    res.json({
      success: true,
      message: "Message saved successfully",
      data: saved,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/contact", async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
});

app.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Message deleted",
    });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

app.post("/admin/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const exists = await Admin.findOne({ username });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const admin = await Admin.create({ username, password });

    res.json({
      success: true,
      message: "Admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.json({
      success: true,
      message: "Login successful",
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});