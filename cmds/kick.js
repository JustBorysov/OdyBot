const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("~~Sorry, you have no rights.~~");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("`You did not specify a user`");
    if(!rUser) return bot.send("`User is not found`");
    let embed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor('#e22216')
    .addField("Administrator",message.author.username)
    .addField("Kicked",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick("123");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};