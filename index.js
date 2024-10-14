const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios')

dotenv.config()

// TOKEN fetched using @godFather to create a new bot
const TOKEN = process.env.BOT_TOKEN;


// create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', (msg)=>{
    const text = msg.text;
    console.log("message received: ", text);

    // every chat has it's unique id
    bot.sendMessage(msg.chat.id, 'you said: '+ text)
})

bot.onText(/\/start/, (msg)=>{
    bot.sendMessage(msg.chat.id, `hello i'm vinay's bot how can i help you`)
})

bot.onText(/\/help/, (msg)=>{
    bot.sendMessage(msg.chat.id, `You can type anything and i'll reply you back`)
})

bot.onText(/\joke/, async (msg)=>{
    const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');

    const setup = joke.data.setup;   //every axios return a data object
    const punchline = joke.data.punchline;

    bot.sendMessage(msg.chat.id, setup + " " + punchline);
})