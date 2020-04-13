    
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Addrole Command", "Usage: ztr!addrole <@user> <role>")

    message.channel.send(helpembxd);
  } 


  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("N-ai acces sa faci asta baaa !");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send('Dai tag cuiva si gradul pe care vrei sa il dai !');

  let gRole = message.mentions.roles.first() || message.guild.roles.find(c => c.name === `${args[1]}`);
  if(!gRole) return message.channel.send("Nu exista acest grad ..");

  if(rMember.roles.has(gRole.id)) return message.channel.send("Deja are gradul asta.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`I-am dat lu' **${rMember.user.username}** gradul de **${gRole.name}** !`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole"
}