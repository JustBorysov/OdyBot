const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("👉My commands👈")
    .setColor('#10c7e2')
    .addField("Info about server","!serverinfo")
    .addField("Info about Programmers","!proginfo")
    .addField("Info about music","!musicinfo")
    .addField("Info about sprite&art","!spriteartinfo")
    .addField("Info about you","!userinfo")
    .addField("Our social media","!social")

    bot.send(embed);

};
module.exports.help = {
    name: "help"
};