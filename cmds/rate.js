const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Dai tag cuiva ba prostu drq ");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, o sa iti dau cam: **${result}/10** .`);
} else return message.channel.send(`Ii dau lu' **__${ratus.user.username}__** ${result}/10 .`);

}

module.exports.help = {
  name: "rate"
}