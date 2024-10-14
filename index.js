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

    if(text==="vinay"){
        bot.sendMessage(msg.chat.id, `Hello Master, How can i help you :),
            I'm glad that you remember me,
            Is there anything that you need...
        `)
    }
    else if(text==="mangesh"){
        bot.sendMessage(msg.chat.id, `Hello Mangesh, I know you,
            Your're the son of Prabhuji,
            Your age is 22,
            You're a male,
            You have a shortage of height,
            & you need to go to gym for your health, cause you look very skinny    
        `)
    }
    else if(text==="kunal"){
        bot.sendMessage(msg.chat.id, `Hello Kunal, I know you pervert,
            always looking for a hot girl,
            & drooling on them,
            you still have time be kind towards them.
            Greet from your friend Vinay :)    
        `)
    }
    else{
        // every chat has it's unique id
        bot.sendMessage(msg.chat.id, 'you said: '+ text)
    }

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