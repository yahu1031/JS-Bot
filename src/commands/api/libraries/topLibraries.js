const PREFIX = 'js!'
const fetch = require('node-fetch')
const Discord = require('discord.js')
const libAPI = 'https://api.cdnjs.com/libraries'

function getRandomIntInclusive(min, max) {
    min = 100000;
    max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)
        const get_libData = async libAPI => {
            try {
                const response = await fetch(libAPI).then(response => response.json())
                const libJsonData = JSON.stringify(response);
                const libdata = JSON.parse(libJsonData);
                let libLatest = ''
                //  Checking the data till it matches with input
                for (let i = 0; i < libdata.total; i++) {
                    if (libdata.results[i].name.toLowerCase() === args[1].toLowerCase()) {
                        console.log(i)
                        console.log(libdata.results[i].latest);
                        libLatest = libdata.results[i].latest
                        //Embed Message
                        const embededLinks = new Discord.MessageEmbed()
                            .setColor('#' + getRandomIntInclusive())
                            .setTitle(`Top result for ${args[1]}`)
                            .addFields({
                                name: libdata.results[i].name,
                                value: libLatest
                            })
                        message.channel.send(embededLinks)
                        return
                    }

                }
                if (libLatest == '') {
                    message.channel.send(new Discord.MessageEmbed()
                        .setColor('#ff0000')
                        .setTitle('Not Found')
                        .setDescription(`Sorry, we couldn't able to fetch detailes about **${args[1]}**.`))
                    console.log('command taken');
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        get_libData(libAPI)
    }
}