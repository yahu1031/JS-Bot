require('dotenv').config();


const { Client } = require('discord.js');
const bot = new Client();
const kickUser = require('./commands/kick');
const banUser = require('./commands/ban');
const mentionBot = require('./commands/mention');
const objects = require('./commands/api/topWidget');
const deleteData = require('./commands/delete');
const allObjects = require('./commands/api/allWidgets');
// On bot logs in
bot.once('ready', () => {
    console.log(`${bot.user.tag} has logged in.`);
});

// Getting details about packages
bot.on('message', objects)
// Getting all Objects
bot.on('message', allObjects)
// when Bot is mentioned.
bot.on('message', mentionBot)
// Kick user function
bot.on('message', kickUser)
// Ban user function
bot.on('message', banUser)
// Deleting data in channel
bot.on('message', deleteData)


bot.login(process.env.BOT_TOKEN);

