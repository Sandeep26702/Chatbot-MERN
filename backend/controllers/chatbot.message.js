import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    // Save user message
    const user = await User.create({
      sender: "user",
      text
    });

    // Predefined bot responses
    const botResponses = {
      "hello": "Hi, How I can help you!!",
      "can we become friend": "Yes",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "I’m ChatBot, your virtual assistant.",
      "who made you": "I was created by developers to help answer your questions.",
      "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
      "what is the time": "I can’t see a clock, but your device should know.",
      "bye": "Goodbye! Have a great day.",
      "thank you": "You’re welcome!",
      "i love you": "That’s sweet! I’m here to help you anytime.",
      "where are you from": "I live in the cloud — no rent, no bills!",
      "what can you do": "I can chat with you, answer questions, and keep you company.",
      "what is python": "Python is a high-level programming language used for web, AI, and more.",
      "what is java?": "Java is a platform-independent, object-oriented programming language.",
      "what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.",
      "who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.",
      "what is g20": "The G20 is an intergovernmental forum of 19 countries + the EU.",
      "tell me about yourself": "I am a virtual assistant chatbot.",
      "why should we hire you": "I can answer questions and provide information instantly.",
      "what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.",
      "who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.",
      "what is ipl": "The IPL is a professional T20 cricket league started in 2008."
    };

    const normalizedText = text.toLowerCase().trim();
    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

    // Save bot response
    const bot = await Bot.create({
      text: botResponse
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text
    });

  } catch (error) {
    console.error("Error in Message Controller:", error);
    return res.status(500).json({ error: error.message });
}
};
