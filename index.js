const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
  client.user.setActivity(`a la grasa.`, { type: "WATCHING" })
});

client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
    case "decir":
      switch (args) {
        case undefined:
          message.reply("tienes que introducir un valor.")
          break;
      
        default:
          message.channel.send(args)
          break;
      }      
      break;
  
    default:
      break;
  }
})

client.login(process.env.TOKEN);
