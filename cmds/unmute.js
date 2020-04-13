const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] == "help"){

        let xdemb = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Muted Command")
        .addField("Usage:", "ztr!unmute [user]", true)
    
        message.channel.send(xdemb);
        return;
      } 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Nu ai acces ba prostule !")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Mentioneaza pe cineva sau baga un id !");
        let muterole = message.guild.roles.find(r => r.name === 'Muted')
        if(!toMute.roles.has(muterole)) return message.channel.send(`${toMute} nu are mute dobitocule`)

        toMute.removeRole(muterole)

        message.channel.send(`**${toMute.user.username}** a revenit din spital!`);

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }