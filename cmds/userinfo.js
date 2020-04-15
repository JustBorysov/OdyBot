const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor('#10c7e2')
    .addField("Name",a.username)
    .addField("Tag",a.tag)
    .addField("Discriminator",a.discriminator)
    .addField("Account creation",a.createdAt)
    .addField("ID",a.id)
    .addField("You are a bot?",a.bot)
    .setThumbnail(a.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};