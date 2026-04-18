const express = require("express");
const cors = require("cors");
const { timelineEvents, kings } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

const submissions = [];

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend 🚀" });
});

app.get("/api/status", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: Date.now() });
});

app.get("/api/timeline", (req, res) => {
  res.json({ timeline: timelineEvents });
});

app.get("/api/kings", (req, res) => {
  res.json({ kings });
});

app.get("/api/kings/:id", (req, res) => {
  const king = kings.find((item) => item.id === req.params.id);
  if (!king) {
    return res.status(404).json({ error: "King not found" });
  }
  res.json({ king });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  const submission = {
    id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name,
    email: email || "",
    message,
    receivedAt: new Date().toISOString(),
  };

  submissions.push(submission);
  res.status(201).json({ success: true, submission });
});

app.get("/api/submissions", (req, res) => {
  res.json({ submissions });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error", details: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
