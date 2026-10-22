
require("dotenv").config();

const express = require("express");
const { ObjectId } = require("mongodb");
const { connectDB } = require("./db");

const app = express();
app.use(express.json());

async function startServer() {
  const db = await connectDB();
  const students = db.collection("students");

  // CREATE
  app.post("/students", async (req, res) => {
    try {
      const result = await students.insertOne(req.body);

      res.status(201).json({
        message: "Student created",
        insertedId: result.insertedId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // READ ALL
  app.get("/students", async (req, res) => {
    try {
      const data = await students.find({}).toArray();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // READ ONE
  app.get("/students/:id", async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Invalid student ID" });
      }

      const student = await students.findOne({
        _id: new ObjectId(req.params.id)
      });

      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // UPDATE
  app.patch("/students/:id", async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Invalid student ID" });
      }

      const result = await students.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json({
        message: "Student updated",
        modifiedCount: result.modifiedCount
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // DELETE
  app.delete("/students/:id", async (req, res) => {
    try {
      if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: "Invalid student ID" });
      }

      const result = await students.deleteOne({
        _id: new ObjectId(req.params.id)
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Student not found" });
      }

      res.json({ message: "Student deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
  });
}

startServer().catch(console.error);
