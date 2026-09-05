const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validate request
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    // Since database connection is omitted per user request:
    // Log the request to the console to simulate processing
    console.log(`📩 New message received from ${name} (${email}):`);
    console.log(`Subject: ${subject || 'No subject'}`);
    console.log(`Message: ${message}`);
    console.log('--------------------------------------------------');

    // Automatically respond with success
    return res.status(200).json({
        success: true,
        message: 'Message sent successfully.'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
