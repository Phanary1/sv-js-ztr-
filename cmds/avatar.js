const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("**Cauta avatar-ul ..**");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.RichEmbed()

        .setImage(mentionedUser.displayAvatarURL)
        .setColor('RANDOM')
        .setTitle(`${mentionedUser.username} Avatar`)
        .setFooter("Avatar requested by " + message.author.tag)
        .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}