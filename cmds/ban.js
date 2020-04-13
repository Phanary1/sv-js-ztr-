const Discord = require("discord.js")

//ban command

module.exports.run = async (client, message, args) => {

    if(args[0] == "help"){
        let xdemb = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Ban Command")
        .addField("Usage:", `ztr!ban [user] [reason]`, true)
    
        message.channel.send(xdemb);
        return;
      } 

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "503983707502411787") return message.channel.send("Nu ai acces ba prostule !");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send('Mentioneaza pe cineva in cristosu ma-tii !')
        if(!member.bannable) return message.channel.send("Nu il pot bana prostule")
        if(member.user.id === "503983707502411787") return message.channel.send("**Nu pot sa imi banez sefu !**")

        if(member.id === message.author.id) return message.channel.send("Nu te poti bana ba idiotule !")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        message.channel.send(`Cine-i **${member.user.username}**? E un prost care si-a luat zborul .`)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }