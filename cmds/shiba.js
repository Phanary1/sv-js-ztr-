const { get } = require("snekfetch");

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Generating Shiba ..");
    const { body } = await get("http://shibe.online/api/shibes");
    await msg.edit({
      embed: {
        "title": "Apasa aici daca nu vezi poza.",
        "url": body[0],
        "color": 6192321,
        "image": {
          "url": body[0]
        }
      }
    });
  }

  module.exports.help = {
    name: "shiba"
  }