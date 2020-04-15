const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Programmers info")
    .setColor('#800080')
    .addField("First Programer", "JustBorysov")
    .addField("Second Programer","Qloque.qlock")
    .addField("Third Programer","Demor")

    bot.send(embed);

};
module.exports.help = {
    name: "proginfo"
};