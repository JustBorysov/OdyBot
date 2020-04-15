const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Sprite&Art info")
    .setColor('#00FF00')
    .addField("First Sprite&Art Maker", "SP")
    .addField("Second Sprite&Art Maker","Fetre")

    bot.send(embed);

};
module.exports.help = {
    name: "spriteartinfo"
};