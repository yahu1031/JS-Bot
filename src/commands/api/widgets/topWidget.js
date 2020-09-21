const PREFIX = '!'
const fetch = require('node-fetch');
const apiUrl = 'https://api.flutter.dev/flutter/index.json'
const Discord = require('discord.js');
module.exports = async (message) => {
    if (message.author.bot) return;
    // Checking if the commandstarts with PREFIX(!).
    if (message.content.startsWith(PREFIX)) {
        const [cmd_name] = message.content
            // Removes all the leading and trailing white spaces.
            .trim()
            // Gets the String after !
            .substring(PREFIX.length)
            // Command doesn't count more than one sapces in arguments.
            .split(/\s+/);
        // Getting Data from API.
        const get_data = async apiUrl => {
            try {
                const response = await fetch(apiUrl).then(response => response.json())
                const jsonData = JSON.stringify(response);
                const data = JSON.parse(jsonData);
                let cmd_href = ''
                //  Checking the data till it matches with input
                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase() === cmd_name.toLowerCase()) {
                        console.log(i)
                        console.log(data[i].href);
                        cmd_href = data[i].href
                        // Embed Message
                        const embededLinks = new Discord.MessageEmbed()
                            .setColor('#2ECC71')
                            .setTitle(`Top result of ${cmd_name}`)
                            .addFields(
                                { name: `${data[i].type} ${data[i].enclosedBy.name}`, value: `https://api.flutter.dev/flutter/${cmd_href}` }
                            )
                        message.channel.send(embededLinks)
                        return
                    }
                }
                if (cmd_href == '') {
                    message.channel.send(Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setTitle('Not Found')
                        .setDescription(`Sorry, we couldn't able to fetch detailes about ${cmd_name}.`))
                    console.log('command taken');
                }
            } catch (error) {
                console.log(error);
            }
        }
        get_data(apiUrl)
    }
}
