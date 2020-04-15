const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("**Server Information**")
    .setColor('#008000')
    .addField("📃**Server name**📃",message.guild.name)
    .addField("👾**Server creation**👾",message.guild.createdAt)
    .addField("🙋‍♂️**You are connected to the server**🙋‍♂️",message.guild.joinedAt)
    .addField("👥**Number of participants👥**",message.guild.memberCount)
    .addField("🏳**region**🏳",message.guild.region)
    .addField("🤖**Bots**🤖","3")
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};