const PREFIX = '!'
const fetch = require('node-fetch');
const apiUrl = 'https://api.flutter.dev/flutter/index.json'

module.exports = async (message) => {
    if (message.author.bot) return;
    // Checking if that is a kick command.
    if (message.content.startsWith(PREFIX)) {
        const [cmd_name] = message.content
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
                var cmd_href = ''
                // console.log(data[0].name);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase() === cmd_name.toLowerCase()) {
                        console.log(i)
                        console.log(data[i].href);
                        cmd_href = data[i].href
                        message.channel.send('https://api.flutter.dev/flutter/' + cmd_href)
                        break
                    }
                }
                if (cmd_href == '') {
                    message.channel.send(`**${cmd_name}** Not Found.`)
                    console.log('command taken');
                }
            } catch (error) {
                console.log(error);
            }
        }
        get_data(apiUrl)
    }
}
