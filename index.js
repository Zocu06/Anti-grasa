const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
var prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
  client.user.setActivity(`a la chicha.`, { type: "WATCHING" })
});

client.on("message", message => {
  if(message.author.bot) return; // if true ignore
  if(prefix_db != null) prefix_db = "-"
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
    case "help":
      let embed = new Discord.MessageEmbed()
      .setTitle("Ayuda del bot")
      .setDescription("Aquí te ayudaré a entender el bot")
      .addField("DECIR", "Dice tu frase")
      .addField("SETTINGS", "Confiugra los ajustes del servidor.")
      .setColor("RANDOM");
      message.channel.send(embed)
      break;
    case "settings":
      if(args !== null) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Ajustes de el pachacho")
        .addField("SETPREFIX", "Mete un valor para prefix")
        .setColor("RANDOM");
        message.channel.send(embed)
      }
      switch (args[0]) {
        case "setprefix":
          if(args[1] != "" || args[1] != " ") {
            prefix_db.set(args[1])
          } else {
            message.reply("pon un prefix válido.")
          }
          break;
      
        default:
          break;
      }
      break;
  
    default:
      break;
  }
})

client.login(process.env.TOKEN);
