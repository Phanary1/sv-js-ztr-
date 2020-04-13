const Discord = require(`discord.js`)
const client = new Discord.Client();
const config = require ('./config.json')

const serverStats = {
    guildID: '674946395261632522',
    memberUserID: '698574320607428628'
};

client.on('ready',() =>console.log('Server Stats Ready !'));

client.on('guildMemberAdd', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.memberUserID).setName(`Membrii: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.memberUserID).setName(`Membrii: ${member.guild.memberCount}`);
});

client.login(config.token)