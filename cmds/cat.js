const request = require('request'); 
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor('RANDOM')
                    .setTitle("Aici este o pisica")
                              
                   message.channel.send(emb)  
            }
        });
    }

module.exports.help = {
  name: "cat"
}