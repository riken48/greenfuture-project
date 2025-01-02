const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const db_passworduri = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.pendr.mongodb.net/greenfuture_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB is connected.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// app.get('/items', async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
// });

// app.post('/items', async (req, res) => {
//   const newItem = new Item(req.body);
//   await newItem.save();
//   res.json(newItem);
// });

// // Start the server
// app.listen(5000, () => console.log('Server running on http://localhost:5000'));
