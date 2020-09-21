const Discord = require('discord.js')

const taggedBotReply = new Discord.MessageEmbed()
    .setColor('#2ECC71')
    .setTitle('ℹ️ Help')
    // .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')

    .setDescription('⚠️ These commands can\'t be within a message, and there can\'t be multiple per messages')
    // .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name: 'Mention me for this help.', value: 'Tagging me will show up you this message.' },
        { name: '\u200B', value: '\u200B' },
        { name: '%kick UserID', value: 'This command will kick the user out.' },
        { name: '\u200B', value: '\u200B' },
        { name: '%ban UserID', value: 'This command will ban the user in server.' },
    )
    // .addField('Inline field title', 'Some value here', true)
    // .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Note: These commands will be usde by admins only');


module.exports = (message) => {
    if (message.author.bot) return;
    // Watching the user message content whether bot is tagged or not.
    if (message.content === `<@!${process.env.BOT_ID}>`) {
        message.channel.send(taggedBotReply);
        return
    }
}