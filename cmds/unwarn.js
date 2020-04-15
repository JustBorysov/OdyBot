const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("~~Sorry, you have no rights.~~");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("You did not specify a user");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!profile[rUser.id])return bot.send("No user in profile.json");
    if(profile[rUser.id]<=0) return bot.send("User has 0 warnings");
    profile[rUser.id].warns--;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setDescription("Warning")
    .setColor('#25ca85')
    .addField("Administrator",message.author.username)
    .addField("Снял предупреждение",`${rUser.user.username}`)
    .addField("removed the warning",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "unwarn"
};