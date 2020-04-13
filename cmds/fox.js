const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const superagent = require("superagent")
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
  if(message.author.bot) return;
		try {
			get('https://randomfox.ca/floof/').then(res => {
				const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
				.setImage(res.body.image)
				return message.channel.send({embed});
			});
		} catch(err) {
			return message.channel.send(err.stack);
		}
}
module.exports.help = {
  name: "fox"
}