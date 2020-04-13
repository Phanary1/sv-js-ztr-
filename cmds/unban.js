const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] == "help"){
        let xdemb = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("Unban Command")
        .addField("Usage:", `ztr!unban [ID]`, true)
    
        message.channel.send(xdemb);
        return;
      } 

	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`Da-mi permisiuni sclavule`); 	 	
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(` Stai prost cu vederea ${message.author.username} ? N ai permisiuni prostule`);

  let search = args[0];
if(!search) return message.channel.send(`${message.author.username} e prost si nu mi-a dat un nume sau un ID`); 	
try { 		
let bans = await message.guild.fetchBans(); 		let banned = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase())); 		 		
if(!banned) return message.channel.send(`Parasuta asta n-are ban bai`); 		
await message.guild.unban(banned); 		message.channel.send(`${banned.tag} a primit unban ca asa mi s-a sculat mie`);
 	} catch(e) { 		
message.channel.send(`N-am putut sa-i dau unban :shrug:`)
 	} 
} 
module.exports.help = {
 	name: "unban" 
}