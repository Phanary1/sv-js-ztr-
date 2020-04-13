const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("RemoveRole Command")
    .addField("Usage:", "ztr!removerole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Ai nevoie de accesul de `Gestionare Rolurile`pentru a face asta!.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(`Dai tag cuiva si gradul pe care vrei sa il scoti ! `);

  let role = args.join(" ").slice(22);

  let gRole = message.mentions.roles.first() || message.guild.roles.find(c => c.name === `${args[1]}`);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("Tampitule, asta nu are gradul asta.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`Am scos gradul lu' **${rMember.user.username}** de **${gRole.name}**!`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}