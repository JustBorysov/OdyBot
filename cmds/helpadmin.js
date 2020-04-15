const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("~~Sorry, you have no rights.~~");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let embed = new Discord.RichEmbed()
    .setDescription("👉My admin commands👈")
    .setColor('#10c7e2')
    .addField("1⃣","!ban")
    .addField("2⃣","!clear")
    .addField("3⃣","!kick")
    .addField("4⃣","!mute")
    .addField("5⃣","!warn")
    .addField("6⃣","!unwarn")
    .addField("7⃣","!unmute")

    bot.send(embed);
};
module.exports.help = {
    name: "helpadmin"
};