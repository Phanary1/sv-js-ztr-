const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {

    if(args[0] == "help"){

        let xdemb = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Muted Command")
        .addField("Usage:", "ztr!warn [user] [reason]", true)
    
        message.channel.send(xdemb);
        return;
      } 

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nu ai acces ba prostule !!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Vezi ca trebuie sa dai mention la cine pentru a dat **warn**.');
  if (reason.length < 1) return message.reply('Trebuie sa ai un motiv pentru a dar **warn**.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`Ai primit warn  \`${message.guild.name}\``)
  .addField("Warn de catre", message.author.tag)
  .addField("Motiv", reason);

  user.send(dmsEmbed);
  
  message.channel.send(`${user.tag} a primit warn`)

}

exports.help = {
  name: 'warn'
};