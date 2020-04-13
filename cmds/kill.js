const Discord = require("discord.js")
 
module.exports.run = async (client, message, args) => {

let killed = message.mentions.members.first();
if(!killed) {

let emb = new Discord.RichEmbed()
.setColor("#00f00")
.setDescription(`${message.author} a decis sa se sinucida 💔 DORMI IN PACE DOBITOCULE`)

message.channel.send(emb)

} else {

let emb = new Discord.RichEmbed()
.setColor("#00f00")
.setDescription(`**${killed}** a fost omorat de catre **${message.author}** 💔 DORMI IN PACE DOBITOCULE`)

message.channel.send(emb)


}

}
module.exports.help = {
  name: "kill"
}