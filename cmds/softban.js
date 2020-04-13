module.exports.run = (client, message, args, discord) => {

  if(args[0] == "help"){
    let xdemb = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("SoftBan Command")
    .addField("Usage:", `ztr!softban [userid] `, true)

    message.channel.send(xdemb);
    return;
  } 

    let mid = args.join(' ');
    if(!mid) message.channel.send(`${message.author.username} e prost si nu mi a dat un ID`)
    if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("Nu ai acces ba prostule !");
    client.fetchUser(mid).then(id => {
      if(id.id === message.author.id) return;
      if(id.id === client.user.id) return;
      if(!id){
        message.channel.send(`Nu-i nici un prost cu id-ul asta ${mid}, incearca iar, poate dai de prostu corect. :face_palm: `)
      }else{
        message.guild.ban(id).then(() => {
          message.channel.send(`Cine-i **${id}**? E un prost care si-a luat zborul !`)
        }).catch(err => {
          message.channel.send("Nu pot interzice accest dobitoc" + id)
        })
      }
      })
  }
  module.exports.help = {
    name: "softban"
  }