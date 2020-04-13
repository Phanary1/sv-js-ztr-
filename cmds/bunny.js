const { get } = require("snekfetch");

  module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating Bunny ..");
    const { body } = await get("https://api.bunnies.io/v2/loop/random/?media=gif,png");
    await msg.edit({
      embed: {
        "title": "Apasa aici daca nu se incarca poza.",
        "url": body.media.gif,
        "color": 6192321,
        "image": {
          "url": body.media.gif
        }
      }
    });
  }

  module.exports.help = {
    name: "bunny"
  }