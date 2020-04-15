const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("~~Sorry, you have no rights.~~");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("`You did not specify a user`");
    if(!rUser) return bot.send("`User is not found`");
    if(!profile[rUser.id])return bot.send("`No user in profile.json`");
    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Warnings");
    }
    let embed = new Discord.RichEmbed()
    .setDescription("Warning")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Issued a warning",`${rUser.user.username}`)
    .addField("Warning amount",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};