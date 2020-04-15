const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#FF00FF')
    .addField("**Server rules**","**1.Chat**")
    .addField("1.1","Spam / flood prohibited - `Mute 15 minutes`")
    .addField("1.2","It is forbidden to insult participants - `Mute 30 minutes`")
    .addField("1.3","Forbidden curses words! - `Mutе 10 minutes`")
    .addField("1.4","Malicious File Distribution Prohibited - `Mutе Forever`")
    .addField("1.5","Ping for no reason is prohibited - `Mutе 1 hour`")
    .addField("\u200b","**2.Voice chat**")
    .addField("2.1","Do what you want, just don’t disturb others")
    .addField("\u200b","**4.General rules**")
    .addField("3.1","It is forbidden to use bot / server bugs - `Warn / Ban`")
    .addField("3.2","Neglected Administration Attitude - `Warn and Withdrawal`")
    .addField("3.3","Violation of the Rules - `Punishment`")
    .addField("3.4","The draining of private violins is forbidden - `Ban forever`")
    .addField("3.5","Advertising of their servers / sites not related to programming is prohibited - `Mut according to the situation / Warn / Ban forever`")
    .addField("3.6","Selfbots are allowed only which help with programming - `Warn / Ban`")
    .addField("3.7","Offensive nicknames / nicknames that cannot be pinged are forbidden - Warn / Nickname change")
    .addField("\u200b","**5.Administrator rules**")
    .addField("1.","Administration is punished in the amount of 2")
    .addField("2.","The administrator can punish you for an item that is not specified in the rules")
    .addField("3","As a helper / administrator, `you must help other members`")


    bot.send(embed);

};
module.exports.help = {
    name: "rules"
};