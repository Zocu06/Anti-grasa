const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
});
let palabras = [
  "pizza",
  "grasa",
  "kebab",
  ", puto gordo"
]
setInterval(() => {
  client.user.setActivity(`a la ${palabras[Math.random() * palabras.length - 1]}.`, { type: "WATCHING" })
}, 28000);

client.login(process.env.TOKEN);
