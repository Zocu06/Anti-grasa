const Discord = require('discord.js')
const db = require('megadb');
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity('Anti-Grasa BOT', { type: 'PLAYING' })
    console.log('Iniciado!')

});

const PREFIX = new db.crearDB("Prefixes");
const FILTERS = new db.crearDB("FILTROS")

client.on("ready", () => {
    console.log("Conectado como " + client.user.tag);
    client.user.setActivity("a la grasa.", { type: "WATCHING" }); //you can have WATCHING, LISTENING or PLAYING
});

client.on("message", async msg => {
    let prefix;
    if (prefix_db.tiene(`${msg.guild.id}`)) {
        prefix = await prefix_db.obtener(`${msg.guild.id}`);
    } else {
        prefix = ".";
    }

    if (msg.isMentioned(client.user)) {
        return msg.channel.send(
            "¡Hola! Soy el Anti-Grasa Bot, este es mi prefix: `" + prefix + "`"
        );
    }
    if (msg.author.bot) return;
    if (msg.content.indexOf(prefix) !== 0) return;

    const args = msg.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    //Embed help
    if (command === "help") {
        const embed = new Discord.RichEmbed()

            .setTitle("Ayuda del Anti-Grasa.")
            .setDescription(
                "¡Hola! Soy el Anti-Grasa Bot, estoy aquí para evitar la grasa en tu servidor. Una vez que me has metido en tu servidor, ya lo estás protegiendo de la grasa, y aunque tenga pocos comandos, puedo serte de utilidad."
            )
            .setThumbnail(
                "https://cdn.discordapp.com/attachments/724316581294768158/730565297664163961/unknown.png"
            )
            .addField(
                "Desarrolladores",
                "<@365508528967909376> <@719683540199145522>",
                true
            )
            .addField("Mis comandos", "`" + `${prefix}comandos` + "`", true)
            .setColor("RANDOM");

        msg.channel.send(embed);
    }

    //Embed comandos
    if (command === "comandos") {
        const embed = new Discord.RichEmbed()

            .setTitle("Comandos del Anti-Grasa.")
            .setDescription("Estos son mis comandos:")
            .setThumbnail(
                "https://cdn.discordapp.com/attachments/724316581294768158/730565297664163961/unknown.png"
            )
            .addField(
                "Información sobre el bot",
                "``help``|``comandos``|``support``|``info``|``invite``"
            )
            .addField("Otros comandos de utilidad", "``decir``|``setprefix``|``reportar``")
            .setColor("RANDOM");

        msg.channel.send(embed);
    }

    //Comando secreto lean

    if (command === "lean") {
        const embed = new Discord.RichEmbed()

            .setTitle("Comandos del Anti-Grasa.")
            .setDescription("Estos son mis comandos")
            .addField("Información", "``help``|``commands``|``support``")
            .setColor("RANDOM");

        msg.channel.send({ files: "https://cdn.discordapp.com/attachments/655812811384946707/723727691987157012/poto_.shitpost_on_Instagram___Es_buenardo_jsjsjsjMP4.mp4" })
        msg.channel.send("¡Enhorabuena! Has encontrado un comando secreto.");
    }
    //Embed soporte
    if (command === "support") {
        const embed = new Discord.RichEmbed()

            .setTitle("Soporte del Anti-Grasa Bot.")
            .setDescription(`[Servidor de soporte](https://discord.gg/mvjFUyA)`)
            .setColor("RANDOM");

        msg.channel.send(embed);
    }

    //Embed verificacion

    if (command === "verif") {
        const embed = new Discord.RichEmbed()

            .setTitle("¡Bienvenid@ a la Secta Anti Grasa!")
            .setDescription("Para verificarte, debes reaccionar a este mensaje con ✅. Si la verificación no funciona, avisa a un miembro del staff conectado.")
            .setColor("RANDOM");
        if (msg.author.hasPermission("ADMINISTRATOR")) {
            msg.channel.send(
                embed
            )
        };
    }

    //Comando reportar fallos

    if (command === "reportar") {
        const embed = new Discord.RichEmbed()

            .setTitle("Reportanos fallos del bot, sugerencias para mejorarlo y más cosas en nuestro servidor de soporte.")
            .setDescription(`[Secta Anti-Grasa](https://discord.gg/h8vTwv)`)
            .setColor("RANDOM");

        msg.channel.send(
            embed
        );
    }

    //Servidores del bot//
    if (command === "servers") {
        if (msg.author.id !== "365508528967909376")
            return msg.channel.send(
                "Este comando solo lo puede usar el desarrollador."
            );
        let permiso = msg.member.hasPermission("ADMINISTRATOR");
        if (!permiso) {
            const embed = new Discord.RichEmbed()

                .setTitle(`${msg.author.username} No tienes los permisos suficientes`)
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(
                    `${msg.author.username} intento ver la cantidad de servidores donde estoy`
                );

            msg.channel.send(embed);

            return;
        }

        let razon = msg.content.slice(7);

        let img = msg.mentions.users.first();
        const embed = new Discord.RichEmbed()

            .setTitle(
                `${msg.author.username} Estos son los nombres de los servidores donde estoy`
            )
            .setDescription(client.guilds.map(x => x.name).join("\n "))
            .setTimestamp()
            .setFooter(
                "Solicitado por " + msg.author.username + "",
                msg.author.avatarURL
            )
            .addField("Cantidad: ", `${client.guilds.size}`)
            .setColor("RANDOM");

        msg.channel.send("Mira tus mensajes privados :D");
        msg.author.send(embed);
        msg.react("✅");
    }
    //Embed invite
    if (command === "invite") {
        const embed = new Discord.RichEmbed()

            .setTitle("Invitame a tu servidor y acabaremos juntos con la grasa :D")
            .setDescription(
                `[Invitame aquí](https://discord.com/api/oauth2/authorize?client_id=726760333141606490&permissions=8&scope=bot)`
            )
            .setColor("RANDOM");

        msg.channel.send("Estoy en fase beta, así que aún no puedes invitarme.");
    }

    //Mandar MD a un usuario
    if (command === "enviar") {
        //DONDE ESTA EL DE MENTION?
        if (msg.author.id !== "365508528967909376")
            return msg.channel.send(
                "Este comando solo lo puede usar el desarrollador."
            );
        let permisos = msg.member.hasPermission("MANAGE_ROLES");
        if (!permisos) return msg.reply("No tienes permisos");
        const mencionado = msg.mentions.users.first();
        if (!mencionado) return msg.reply("No ha mencionando a ningún miembro.");
        let id = mencionado.id;
        let texto = args.slice(1).join(" ");
        if (!texto) return msg.channel.send(`Escriba el contenido a enviar.`);
        client.users.get(id).send(texto);
    }
    //Embed info
    if (command === "info") {
        const embed = new Discord.RichEmbed()

            .setTitle("Información del bot")
            .setDescription(
                "¿Cuál es la función de este bot? Queremos acabar con la grasa. Este bot elimina el mensaje con contenido grasoso y luego le dice algo al creador de dicho mensaje.",
                true
            )
            .setColor("RANDOM");

        msg.channel.send(embed);
    }

    //Comando secreto funar
    if (command === "funar") {
        const embed = new Discord.RichEmbed()

            .setTitle("Información del bot")
            .setDescription(
                "¿Cuál es la función de este bot? Queremos acabar con la grasa. Este bot elimina el mensaje con contenido grasoso y luego le dice algo al creador de dicho mensaje.",
                true
            )
            .setColor("RANDOM");

        msg.channel.send(
            "https://cdn.discordapp.com/attachments/579318559508004897/730769470771167323/103248155_3347080518649517_8357316044453562602_n-2.mp4"
        );
        msg.channel.send("¡Enhorabuena! Has encontrado un comando secreto.");
    }

    //Comando setprefix
    if (command === "setprefix") {
        let permisos = msg.member.hasPermission("ADMINISTRATOR");
        if (!permisos) return msg.reply("No tienes permisos");
        if (!args[0]) return msg.channel.send("Debes colocar un prefix");

        prefix_db.establecer(`${msg.guild.id}`, args[0]);
        msg.channel.send("Tu prefix ha sido cambiado a " + args[0]);
    }

    //Comando decir
    if (command === "decir") {
        msg.delete();
        let texto = args.slice().join(" ");
        if (!texto) return msg.reply("Que quieres que diga?");
        msg.channel.send(texto);
    }
});

// Evento message: se emite cada vez que se envia un mensaje (asíncrono)
client.on("message", async msg => {
    const msgs = [
        "te imaginas que si.",
        "estamos en 2020 y  eres de esos que sigue usando el Pacman. Patético.",
        "aquí no pasó nada gente.",
        "https://media.discordapp.net/attachments/729776527218049096/730811331355213894/image0.jpg"
    ];
    if (msg.author.bot) return;
    if (FILTERS.tiene(msg.guild.id.toString())) {
        if (msg.content.includes(":v")) { //pon de la db, los que sean del server. prometo que lo pondré pronto :'v
            msg.reply(msgs[Math.random() * (msgs.length)])
        }
    } else {
        FILTERS.add(msg.guild.id.toString())
    }
});

client.login(process.env.TOKEN);