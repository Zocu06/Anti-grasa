const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
  client.user.setActivity(`a la grasa.`, { type: "WATCHING" })
});

client.on("message", async message => {
  prefix_db = "-"
  const args = message.content.slice(prefix_db.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  switch (message.content) {
    case "decir":
      message.reply("dsds")
      break;
  
    default:
      break;
  }
})

client.login(process.env.TOKEN);
