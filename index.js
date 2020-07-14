const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
  client.user.setActivity(`a la chicha.`, { type: "WATCHING" })
});

client.on("message", async message => {
  if(message.author.bot) return; // if true ignore
  prefix_db = "-"
  const args = message.content.slice(prefix_db.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (command) {
    case "decir":
      if(!args) {
        message.reply("introduce un valor.")
      }
      if(args != undefined || args != null) {
        message.delete()
        message.channel.send(args)
      }
      break;
  
    default:
      break;
  }
})

client.login(process.env.TOKEN);
