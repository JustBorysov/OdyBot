const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Our social media projects!")
    .setColor('#25ca85')
    .addField("`Ofiicial Odyneft Telegram`","https://t.me/odyneft")
    .addField("`Ofiicial Odyneft Telegram bot`","https://t.me/odyneft_bot")
    .addField("`Ofiicial Odyneft Viber`","https://t.me/odyneft")

    bot.send(embed);

};
module.exports.help = {
    name: "social"
};