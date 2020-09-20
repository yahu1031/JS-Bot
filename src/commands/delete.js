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
        // Checking if that is a delete command.
        if (cmd_name === 'delete') {
            // Check the user have permission to manages messages.
            if (message.member.hasPermission('MANAGE_MESSAGES')) {
                // Checking for the arguments.
                if (args.length != 0) {
                    // Checking the first argument is not a Not-A-Number.
                    if (!isNaN(args[0])) {
                        // <------------------Deleting the message in bulk amount------------------>
                        message.channel.bulkDelete(args[0])
                            .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
                            .catch(console.error);    
                    }
                    else
                        return message.channel.send('C\'mon you dumb ass, Give the argument in a number.');
                }
                else
                    return message.channel.send('please provide no.of messages to delete, you idiot..');
            }
            else
                return message.channel.send('You are not one of the admins to delete messages.');
        }
        return
    }
    return
}