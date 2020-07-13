const Discord = require('discord.js')
const client = new Discord.Client()
const SQL = require("sqlite3").verbose()

let PREFIX = process.env.PREFIX

client.on('ready', () => {
    client.user.setActivity('Anti-Grasa BOT', {type: 'PLAYING'})
    console.log('Iniciado!')

});

client.on('message', message => {
    const MESSAGE_ARGS = message.content.slice(PREFIX.length).trim().split(" ") // Get message args (message content separated by spaces less prefix)
    const COMMAND = MESSAGE_ARGS.shift().toLowerCase() // Make it not cap-sensible
});
client.on("messageUpdate", (oldMessage, newMessage) => {
    let embed = new Discord.MessageEmbed({
        setTitle: "Message edited"
    })
    client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed)
})

client.login(process.env.TOKEN);  