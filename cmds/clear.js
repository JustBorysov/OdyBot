const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("~~Sorry, you have no rights.~~");
    if(args[0]>100) return bot.send("`Please enter a value less than 100.`");
    if(args[0]<1) return bot.send("`Please enter a value greater than 1`");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Removed ${args[0]} posts`).then(msg => msg.delete(15*100000));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};