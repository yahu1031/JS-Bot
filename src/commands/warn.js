const Discord = require("discord.js");

const PREFIX = '%';
module.exports = (message) => {
    if (message.author.bot) return;
    // Checking if that is a kick command.
    if (message.content.startsWith(PREFIX)) {
        const [cmd_name, ...args] = message.content
            // Removes all the leading and trailing white spaces.
            .trim()
            // Gets the String after %
            .substring(PREFIX.length)
            // Command doesn't count more than one sapces in arguments.
            .split(/\s+/);

        // Checking if that is a kick command.
        if (cmd_name === 'warn') {
            // Check the user have permission to kick someone.
            if (message.member.hasPermission('KICK_MEMBERS' && 'BAN_MEMBERS')) {
                // Checking for the arguments.
                if (args.length != 0) {
                    // Checking the first argument is not a Not-A-Number.
                    if (!isNaN(args[0])) {
                        // Checking the length of first argument is 18.
                        if (args[0].length === 18) {
                            // <------------------Kicking out the user------------------>
                            //defining the member
                            const member = message.guild.members.cache.get(args[0]);
                            // Checking for the member in the server.
                            if (member) {
                                // Kick the user and reply.
                                if (args[1] == null) {
                                    args[1] = `<@!${args[0]}> You have been warned by Admins.`
                                }
                                let embed = new Discord.MessageEmbed()
                                    .setColor('#E67E22')
                                    .setTitle('Warning')
                                    .setDescription(`<@!${args[0]}> ${args[1]}`)
                                message.channel.send(embed)
                            }
                            else
                                return message.channel.send('Stupid, check whether the user is in this server.');
                        } else
                            return message.channel.send('Hey, What\'s wrong with you man, Check the length of the ID you have given.');
                    }
                    else
                        return message.channel.send('C\'mon you dumb ass, The ID is wrong. check it again.');
                }
                else
                    return message.channel.send('please provide the member ID, you idiot..');
            }
            else
                return message.channel.send('LOL, are you thinking you are one of the admins to kick?');
        }
        return
    }
    return
}