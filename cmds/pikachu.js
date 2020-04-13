const { get } = require("snekfetch");

module.exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Generating Pika ..");
    const { body } = await get("https://some-random-api.ml/pikachuimg");
    await msg.edit({
      embed: {
        "title": "Apasa aici daca nu vezi poza.",
        "url": body.link,
        "color": 6192321,
        "image": {
          "url": body.link
        }
      }
    });
  }

  module.exports.help = {
    name: "pikachu"
  }