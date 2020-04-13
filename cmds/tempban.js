const Discord = require('discord.js');
const ms = require('ms');
const config = require("../config.json")

module.exports.run = async (client, message, args) => {

  if(args[0] == "help"){
    let xdemb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("TempBan Command")
    .addField("Usage:", `ztr!tempban [user] [time] [reason] `, true)

    message.channel.send(xdemb);
  } 

  if(message.author.bot) return;
    const user = message.author.id;
  const member = message.mentions.users.first();
  const bane = message.guild.member(member);
  const time = args[1];
  const reason = args.slice(2).join(' ');
  if(!member) return message.reply("Mentioneaza pe cineva nebunule !")
  if(bane.user.bot) return;
  if(member.id === message.author.id) return;
  if(member.id === client.user.id) return;
  if(!time) return message.reply("Pune drq si timpul pe care vrei sa il tin in puscarie !")
  if(!reason) return message.reply("Pe ce motiv vrei sa il bag la puscarie? ")
  if(!message.guild.member(user).hasPermission("BAN_MEMBERS")) return message.reply("Esti copil cu IQ pe minus, n-ai acces sa ii dai ban :face_palm:! ")
  if(!message.guild.member(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply("N-am accese frate! ")
    let memberrole = message.guild.member(member).highestRole;
    let botrole = message.guild.member(client.user.id).highestRole;
    if(memberrole.position > botrole.position){ return message.channel.send("Doamne damiai muie, nu il pot bana pentru ca gradul e mai sus ca al meu inbecilu dracu! ") }
    const unbane = member.id
    let reasonx = "Time ended !"
  let embed = new Discord.RichEmbed()
  
.setAuthor(message.author.username)
.setColor('RANDOM')
.setDescription("Inca un ban temporar ! ")
.addField("Prostu care a fost trimis la puscarie : ", member)
.addField("Motivul pentru care a intrat la puscarie  : ", reason)
.addField("Regele care l-a baga la puscarie : ", message.author)
.setTimestamp();
  message.channel.send(embed)
  
 bane.ban({
          reason: reason,
  })
    setTimeout(() => {
 message.guild.unban(unbane, reasonx)
    message.channel.send("<@" + unbane + "> has been unbanned !");
  }, ms(time));
}
  
module.exports.help = {
    name: 'tempban'
}