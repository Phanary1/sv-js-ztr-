const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){

        let xdemb = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Muted Command")
        .addField("Usage:", "ztr!mute [user] [time]", true)
    
        message.channel.send(xdemb);
        return;
      } 

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Mentioneaza pe cineva in cristosu ma-tii!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu ai acces sa faci asta prostule!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nu poti da mute dobitocule");
  if (tomute.id === message.author.id) return message.channel.send("Nu poti sa iti dau mute singur handicapatule!");



  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Pune si timpul tampitule !");

  var muterole = message.guild.roles.find(role => role.name === "Muted")

  if(!muterole) { 
muterole = message.guild.createRole({ 
  name: "Muted", 
  color: "#fffc06", 
  permissions:[] 
  })

message.guild.channels.forEach((c )=> {
c.overwritePermissions(muterole, { 
   SEND_MESSAGES: false,
   ATTACH_FILES: false
  }) 
})
  }

tomute.addRole(muterole)

  message.channel.send(`Cine-i **${tomute.user.username}**? E dobitocu' care a luat somn dintr-un pumn. Acum este in spital !`)

  setTimeout(function(){
    tomute.removeRole(muterole)
    message.channel.send(`**${tomute.user.username}** a revenit din spital!`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}
