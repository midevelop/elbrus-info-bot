const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TG_TOKEN;
console.log(token);

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/m, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", msg => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Recieved your message");
});
