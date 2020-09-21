const PREFIX = '?'
const Discord = require('discord.js')
const fetch = require('node-fetch');
const apiUrl = 'https://api.flutter.dev/flutter/index.json'

module.exports = async (message) => {
    if (message.author.bot) return;
    // Checking if that is a kick command.
    if (message.content.startsWith(PREFIX)) {
        const [all_cmd, ...args] = message.content
            // Removes all the leading and trailing white spaces.
            .trim()
            // Gets the String after %
            .substring(PREFIX.length)
            // Command doesn't count more than one sapces in arguments.
            .split(/\s+/);
        const get_data = async apiUrl => {
try {
    const response = await fetch(apiUrl).then(response => response.json())
    const jsonData = JSON.stringify(response);
    const data = JSON.parse(jsonData);
    let cmd_href = ''
    let result = []
    // console.log(data[0].name);
    if (all_cmd === 'all') {
        if (args.length != 0) {
            if (isNaN(args[0])) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase() === args[0].toLowerCase()) {
                        cmd_href = data[i].href
                        const embededLinks = { name: `${data[i].enclosedBy.name}'s ${data[i].type} - ${data[i].name}`, value: `https://api.flutter.dev/flutter/${cmd_href}` }
                        result.push(embededLinks)
                    }
                }
                const response = new Discord.MessageEmbed()
                    .setColor('#2ECC71')
                    .setTitle(`All results of ${args[0]}`)
                    .addFields(result)

                message.channel.send(response)
                if (cmd_href == '') {
                    message.channel.send(`**${args[0]}** Not Found.`)
                    console.log('command taken');
                }
            }
            else
                return message.channel.send('Do we really have Package/Object with number in it?')
        }
        else
            return message.channel.send('C\'mon you dumb ass, Give some arguments')
    }
} catch (error) {
    console.log(error);
}
        }
        get_data(apiUrl)
    }
}
