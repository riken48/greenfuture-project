const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const schemas = require('../models/schemas')

const app = express();

router.post('/registerloginform', async(req, res) => {
    const {firstName, lastName, email, password, userType} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {first_name: firstName, last_name: lastName, email: email, password: hashedPassword, user_type: userType}

    const newUsers = new schemas.Users(userData)
    const saveUsers = await newUsers.save()

    if (saveUsers) {
        res.send('Account registered.')
    } else {
        res.send('Failed to register.')
    }
    res.end()
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });
    
        res.status(200).json({ message: "Login successful.", userType: user.userType });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error." });
      }
  });

// Idea Submission Route
app.post("/ideasubmissionform", async (req, res) => {
    const { ideaTitle, ideaDescription, ideaTag } = req.body;
  
    try {
      const newIdea = new Idea({ ideaTitle, ideaDescription, ideaTag });
      await newIdea.save();
      res.status(201).json({ message: "Idea submitted successfully!" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: "Error submitting idea." });
    }
  });

  // Voting
  app.post("/viewideas", async (req, res) => {
    const { id } = req.body;
  
    try {
      const updatedIdea = await Idea.findByIdAndUpdate(
        id,
        { $inc: { votes: 1 } },
        { new: true }
      );
  
      if (!updatedIdea) {
        return res.status(404).json({ error: "Idea not found." });
      }
  
      res.status(200).json({ message: "Voted.", idea: updatedIdea });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error." });
    }
  });

  app.get("/ideas", async (req, res) => {
    try {
      const ideas = await Idea.find();
      res.status(200).json(ideas);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });

  app.put("/ideas/:id/evaluate", async (req, res) => {
    const { id } = req.params;
    const { evaluationStatus } = req.body;
  
    try {
      const idea = await Idea.findByIdAndUpdate(
        id,
        { evaluationStatus },
        { new: true }
      );
  
      if (!idea) {
        return res.status(404).json({ error: "Idea not found." });
      }
      res.json(idea);
    } catch (error) {
      res.status(400).json({ error: "Failed to evaluate idea." });
    }
  });

  app.delete("/ideas/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const idea = await Idea.findByIdAndDelete(id);
  
      if (!idea) {
        return res.status(404).json({ error: "Idea not found." });
      }
      res.json({ message: "Idea deleted successfully." });
    } catch (error) {
      res.status(400).json({ error: "Failed to delete idea." });
    }
  });

  // Add reward to an idea
app.put("/ideas/:id/reward", async (req, res) => {
    const { id } = req.params;
    const { reward } = req.body;
  
    try {
      const idea = await Idea.findByIdAndUpdate(
        id,
        { reward },
        { new: true }
      );
  
      if (!idea) {
        return res.status(404).json({ error: "Idea not found" });
      }
      res.json(idea);
    } catch (error) {
      res.status(400).json({ error: "Failed to assign reward" });
    }
  });
  

router.get("/registerloginform", (req, res) => {});
router.get("/login", (req, res) => {});
router.get("/ideasubmissionform", (req, res) => {});
router.get("/viewideas", (req, res) => {});
router.get("/ideas", (req, res) => {});

module.exports = router;
