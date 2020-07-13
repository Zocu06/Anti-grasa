const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
const prefix_db = new db.crearDB("Prefixes");

client.on("ready", () => {
  console.log("Conectado como " + client.user.tag);
  client.user.setActivity(`a la grasa.`, { type: "WATCHING" })
});

let palabras = [
  "pizza",
  "grasa",
  "kebab",
  ", puto gordo"
]

client.login(process.env.TOKEN);
