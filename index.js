const Discord = require('discord.js')
const client = new Discord.Client()
const sql = require("sqlite3").verbose()

let prefix = process.env.PREFIX

client.on('ready', () => {
    client.user.setActivity('Anti-Grasa BOT', {type: 'PLAYING'})
    console.log('Iniciado!')

});

client.on('message', message => {
    
});

client.login(process.env.TOKEN);  