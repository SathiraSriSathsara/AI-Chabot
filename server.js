require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Groq = require("groq-sdk");

const app = express();
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

// Configure middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add JSON body parser

// Store chat history
let chatHistory = [];

// Render index page
app.get('/', (req, res) => {
    res.render('index', { chatHistory });
});

// Handle chat message submission
app.post('/send-chat', async (req, res) => {
    const userMessage = req.body.message;
    chatHistory.push({ role: 'user', content: userMessage });

    try {
        const chatCompletion = await getGroqChatCompletion(userMessage);
        const aiMessage = chatCompletion.choices[0].message.content;

        // Check if the AI response contains code
        const containsCode = /```/.test(aiMessage);
        chatHistory.push({ role: 'ai', content: aiMessage, containsCode });

        // Send the AI response and code indicator back to the client
        res.status(200).json({ role: 'ai', content: aiMessage, containsCode });
    } catch (error) {
        chatHistory.push({ role: 'ai', content: 'Error communicating with AI. Please try again.' });
        res.status(500).json({ error: 'Error communicating with AI' });
    }
});

// Function to get AI response
async function getGroqChatCompletion(userMessage) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: userMessage
            }
        ],
        model: "mixtral-8x7b-32768"
    });
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
