# AI Chat Bot With Groq API

---

Chat Bot is a simple web application that demonstrates a basic chat interface with a bot. Users can input messages, and the bot will respond accordingly.

## Features

- Users can input messages in the chat interface.
- The bot responds to user messages.
- The chat interface displays both user messages and bot responses.

## Technologies Used

- HTML
- CSS (Tailwind CSS)
- JavaScript (Vanilla JS)
- Express.js (for the backend server)
- Body-parser (middleware for parsing request bodies)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SathiraSriSathsara/AI-Chabot.git
```

2. Navigate to the project directory:

```bash
cd AI-Chabot
```

3. Install the dependencies:

```bash
npm install
```

4. Get API lkey from [Groq](https://console.groq.com/keys).

<br>

5. Then rename `.env-example` to `.env`, and fill in your own values for the variables:
   - `GROQ_API_KEY ` : Your Groq API Key

<br>

6. Start the server:

```bash
npm run dev
```

7. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Enter your message in the input field at the bottom of the chat interface.
- Press the "Send" button or hit Enter to submit your message.
- The bot will respond with a message, which will be displayed in the chat interface.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
