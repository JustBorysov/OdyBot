const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("~~Sorry, you have no rights.~~");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("You did not specify a user");
    if(!rUser) return bot.send("User is not found");
    if(!args[1]) return bot.send("Specify the time in seconds");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            });
        });
    };
    if(rUser.roles.has(role.id)) return bot.send("This user can no longer speak");
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};