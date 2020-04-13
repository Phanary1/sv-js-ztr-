const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if(message.author.bot) return;
    if(message.author.id === client.user.id) return;

    let Help = new Discord.RichEmbed()

    .setAuthor(`${message.author.username}`)
    .setColor('RANDOM')
    .setDescription(`** Commands List ** \n \n **General :** avatar, afk, urban, unban, botinfo, serverinfo, serverofficial, userinfo \n \n **Moderation :** addrole, removerole, kick, ban, tempban, softban, mute, unmute, roleinfo, warn \n \n **Fun & Stuff:** bunny, cat, dog, panda, koala, pikachu, pasare, shiba, tiger, kiss, hug, slap, fox, giphy, 8ball, joke, kill, penguin, meme, morse, rate `)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Bot Developer : Фанари ﾉʐȶʀ#5413 `)
    .setTimestamp();
    message.channel.send(Help)

}

module.exports.help = {
    name: "help"
}