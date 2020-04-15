const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Project Information")
    .setColor('#FFFF00')
    .addField("📃Project name📃","ᴠᴏʟɴᴇᴛ")
    .addField("🌈Genre🌈","J-RPG")
    .addField("👨‍💻Programers👨‍💻","JustBorysov, qloque.qlock, Demor")
    .addField("Art-Director","qloque.qlock")
    .addField("🎶Music🎶","SP, JustBorysov, qloque.qlock")
    .addField("🚶Sprites&Art🚶","SP, Fetre")
    .addField("🧑‍💼Manager🧑‍💼","Demor")
    .addField("Beta-Test","█████ █████ █████")
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "projectinfo"
};