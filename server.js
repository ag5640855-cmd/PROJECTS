const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/calculatorDB')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// History Schema
const historySchema = new mongoose.Schema({
    expression: String,
    result: String,
    timestamp: { type: Date, default: Date.now }
});

const History = mongoose.model('History', historySchema);

// Calculation save karne ke liye API route
app.post('/api/history', async (req, res) => {
    try {
        const newHistory = new History(req.body);
        await newHistory.save(); // Data save karein
        res.status(201).json({ message: "Saved!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));