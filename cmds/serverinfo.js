const Discord = require('discord.js');
const config = require("../config.json")

module.exports.run = async (client, message, args) => {
    inline = true;
    let clientIcon = client.user.avatarURL;
    let userIcon = message.author.avatarURL;
    let serverIcon = message.guild.iconURL;

    const verlvl = {
        0: "None",
        1: "Low",
        2: "Medium",
        3: "Hard",
        4: "Epic"
      }

  if(message.author.bot) return;
    let author = message.author.username
  
      let embed = new Discord.RichEmbed()
        .setAuthor(author)
        .setColor('RANDOM')
        .setTitle(`${message.guild.name}`)
        .addField("Server Name ", message.guild.name, inline)
        .addField("Server ID ", message.guild.id, inline)
        .addField("Server Owner ", message.guild.owner, inline)
        .addField("Server Region ", message.guild.region, inline)
        .addField("Verification Level", verlvl[message.guild.verificationLevel], inline)
        .addField("Total Channels ", message.guild.channels.size, inline)
        .addField("Total Roles : ", message.guild.roles.size, inline)
        .addField("You joined ", message.author.joinedAt, inline)
        .addField("Total Users ", `${message.guild.memberCount} Members`, inline)
        .addField('Online ', ` ${message.guild.members.filter(u => u.presence.status === 'online').size}`, inline)
        .addField('Offline / Invisible ', ` ${message.guild.members.filter(u => u.presence.status === 'offline').size}`, inline)
        .addField('Idle ', ` ${message.guild.members.filter(u => u.presence.status === 'idle').size}`, inline)
        .addField('Do Not Disturb ', ` ${message.guild.members.filter(u => u.presence.status === 'dnd').size}`, inline)
        .setThumbnail(serverIcon)
        .setTimestamp()
        .setFooter(`© Фанари`);
    
      message.channel.send(embed)
}
module.exports.help = {
  name: 'serverinfo'
}