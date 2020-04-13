const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let botIcon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(botIcon)
    .addField("Bot Name", `${bot.user.username}`, inline)
    .addField("Bot Owner", " <@503983707502411787> & <@619617531048624139>", inline )
    .addField("Listening in", ` ${servsize} Server/s`, inline)
    .addField("Serving ", `${usersize} Users `, inline)
    .addField("Bot Library", " Discord.js", inline)
    .addField("Created On", bot.user.createdAt)
    .addField("Uptime ", `${uptimxd}`, inline)
    .setFooter(`Information about: ${bot.user.username}. Developed by: Фанари ﾉʐȶʀ#5413 `)
    
    message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}