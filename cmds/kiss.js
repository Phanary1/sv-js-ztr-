const snekfetch = require('snekfetch')
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    const { body } = await snekfetch.get('https://nekos.life/api/v2/img/kiss')
    let personslap = message.mentions.members.first();
    let quote = ['Oof', 'Ouch', 'That hurt', 'Wow', 'LOL', 'Yeet'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    if (!personslap) {
        let personslap = `<@${message.author.id}>`;

        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> ia dat un pupic lu' ${personslap}! ${quoter}!**`)
            .setImage(body.url)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    if (personslap.id === message.author.id) {
        let personslap = 'they own damn selves';
        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> ia dat un pupic lu' ${personslap}! ${quoter}!**`)
            .setImage(body.url)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    if (personslap.id === client.user.id) {
        let personslap = 'me, the fricc?';
        let embed = new Discord.RichEmbed()
            .setDescription(`**<@${message.author.id}> ia dat un pupic lu ${personslap}! ${quoter}!**`)
            .setImage(body.url)
            .setColor('RANDOM');

        message.channel.send(embed);
        return;
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> ia dat un pupic lu' ${personslap}! ${quoter}!**`)
        .setImage(body.url)
        .setColor('RANDOM');

    message.channel.send(embed);
}

exports.help = {
    enabled: true,
    hideHelp: false,
    type: "fun",
    name: "kiss",
    description: "`Kiss` te lasa sa ii fututi la un prieten un pumn virtual ! \:)",
    usage: "`ztr!kiss <@user>`"
}