const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("clear Command", "Usage: ztr!clear <amount>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nu ai acces sa faci asta ceva!");
  if(!args[0]) return message.channel.send("Scrie un numar de mesaj pentru a sterge !");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});


}

module.exports.help = {
  name: "clear"
}