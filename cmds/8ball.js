const Discord = require("discord.js")
 
module.exports.run = async (client, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("Scrie ceva normal dobitocule ..");
   let replies = ["Da", "Nu", "Nu stiu", "Nu mai fi prost, incearca iar!", "Cyka", "Nu sunt sigur!", "Nu ba coaie", "Pai tu sa-mi zici", "Logic ce dracu ma", "Nu pot prezice inca", "Da da da da.", ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let ballembed = new Discord.RichEmbed()

   .setAuthor(message.author.username)
   .setColor('RANDOM')
   .addField("Question", question)
   .addField("Answer", replies[result]);

   message.channel.send(ballembed)

   message.delete();


}

   module.exports.help = {
       name: "8ball"
   }