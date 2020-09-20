const PREFIX = '%';
module.exports = async (message) => {
    if (message.author.bot) return;
    // Watching the user message content whether it contains '%' or not.
    if (message.content.startsWith(PREFIX)) {
        const [cmd_name, ...args] = message.content
            // Removes all the leading and trailing white spaces.
            .trim()
            // Gets the String after %
            .substring(PREFIX.length)
            // Command doesn't count more than one sapces in arguments.
            .split(/\s+/);

        // Checking if that is a ban command.
        if (cmd_name === 'ban') {
            // Check the user have permission to ban someone.
            if (message.member.hasPermission('BAN_MEMBERS')) {
                // Checking for the arguments.
                if (args.length != 0) {
                    // Checking the first argument is not a Not-A-Number.
                    if (!isNaN(args[0])) {
                        // Checking the length of first argument is 18.
                        if (args[0].length === 18) {
                            // <------------------Banning the user------------------>
                            //defining the member
                            const member = message.guild.members.cache.get(args[0]);
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
                                return
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
                return message.channel.send('LOL, are you thinking you are one of the admins to ban?');
        }
        return
    }
    return
}