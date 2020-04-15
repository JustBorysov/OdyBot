const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Music info")
    .setColor('#FFA500')
    .addField("First Music Maker", "SP")
    .addField("Second Music Maker","JustBorysov")
    .addField("Third Music Maker","Qloque.qlock")

    bot.send(embed);

};
module.exports.help = {
    name: "musicinfo"
};