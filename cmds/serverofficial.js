const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

const reply = new Discord.RichEmbed()

.setAuthor(`${message.author.username}`)
.setColor('RANDOM')
.setDescription(`Pentru a intra pe serverul oficial intra pe linkul de mai jos \n [Here](https://discord.gg/ZkMraq2) `)
.setFooter(`© Фанари`)

message.author.send(reply)

}

module.exports.help = {
    name: "serverofficial"
}