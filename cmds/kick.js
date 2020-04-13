const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "619617531048624139") return message.channel.send("Nu ai permisune saracule !");
    
  if(args[0] == "help"){

    let xdemb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Kick Command")
    .addField("Usage:", "ztr!kick [user] [reason]", true)

    message.channel.send(xdemb);
    return;
  } 

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Mentioneaza pe cineva in cristosu ma-tii! `)
      
    if(!member.kickable) 
      return message.channel.send("Nu il poti da afara dobitocule!");
   if(member.user.id === "503983707502411787") return message.channel.send("**Nu pot sa dau kick la sefu !**")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "No reason given";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));

      message.channel.send(`Cine-i **${member.user.username}**? E un prost care a fost dat afara .`)
      

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }