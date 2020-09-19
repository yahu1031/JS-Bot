require('dotenv').config();

const { Client, Message } = require('discord.js');
const bot = new Client();
const PREFIX = '%';

bot.on('ready', () => {
    console.log(`${bot.user.tag} has logged in.`);
});

// when Bot is mentioned
bot.on('message', (message) => {
    if (message.author.bot) return;
    // Watching the user message content whether bot is tagged or not.
    if (message.content === '<@!756898917643190462>') {
        message.reply('Hello there');
        return
    }

})
bot.on('message', async (message) => {
    // Watching the user message content whether it contains '%' or not.
    if (message.content.startsWith(PREFIX)) {
        const [cmd_name, ...args] = message.content
            // Removes all the leading and trailing white spaces.
            .trim()
            // Gets the String after %
            .substring(PREFIX.length)
            // Command doesn't count more than one sapces in arguments.
            .split(/\s+/);
        // Checking for the arguments.
        if (args.length != 0) {
            // Checking the first aurgument is not a Not-A-Number.
            if (!isNaN(args[0])) {
                // Checking the length of first argument is 18.
                if (args[0].length === 18) {
                    // Checking if that is a kick command.
                    if (cmd_name === 'kick') {
                        // <------------------Kicking out the user------------------>
                        //defining the member
                        const member = message.guild.members.cache.get(args[0]);
                        // Check the user have permission to kick someone.
                        if (message.member.hasPermission('KICK_MEMBERS')) {
                            // Checking for the member in the server.
                            if (member) {
                                // Kick the user and reply.
                                member.kick()
                                    .then((member) =>
                                        message.channel.send('Yooo! we kicked the user\'s ass out of the server.'))
                                    // Show the bot can't kick the user because of the higher role in server.
                                    .catch((err) => message.channel.send('sorry eeror'));
                                return
                            }
                            else
                                return message.channel.send('Stupid, check whether the user is in this server.');
                        }
                        else
                            return message.channel.send(`LOL, are you thinking you are one of the admins to kick <@!${args[0]}>?`);
                    }
                    // Checking if that is a ban command.
                    else if (cmd_name === 'ban') {
                        // <------------------banning out the user------------------>
                        // Check the user have permission to kick someone.
                        if (message.member.hasPermission('BAN_MEMBERS')) {
                            // Checking for the member in the server.
                            if (member) {
                                // Try banning the user.
                                try {
                                    const user = await message.guild.members.ban(args[0]);
                                    message.channel.send(`Yooo, We banned <@!${args[0]}>. Hurray!!!`)
                                }
                                // Catch the error you got while trying to ban user.
                                catch (err) {
                                    console.log(err)
                                    message.channel.send('An error occured. Either I can\'t do it for you or user wasn\'t found here.')
                                }
                            }
                            else
                                return message.channel.send('Stupid, check whether the user is in this server.');
                        }
                        else
                            return message.channel.send(`LOL, are you thinking you are one of the admins to ban <@!${args[0]}>?`);
                        return
                    }
                    else
                        return message.channel.send('please provide the member ID, you idiot..');
                } else
                    return message.channel.send('Hey, What\'s wrong with you man, Check the length of the ID you have given.');
            }
            else
                return message.channel.send('C\'mon you dumb ass, The ID is wrong. check it again.');
        }
        return
    }
})
bot.login(process.env.BOT_TOKEN);

