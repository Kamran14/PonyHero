const Discord = require('discord.js');
const client = new Discord.Client();
//const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login("NjUwODIyNTA2MzU3MTk0Nzcy.XeQ98w.a4vSgkxdsGW-gzejPAuba_-FsbE");
client.on('message', msg => {
   // console.log(msg.author.username);
    //console.log(msg.toString().includes("pony"));
    /*if(msg.author === "Matt" || msg.author === "Kam" || msg.author === "Ryan"){
        msg.react(":matt:");

    }*/
    if(contains(msg,"pony") || contains(msg, "matt") || contains(msg, "Matt") ||  contains(msg, "Pony") || contains(msg, "ponies") || contains(msg, "horse")){
        msg.react(msg.guild.emojis.find(emoji => emoji.name === 'matt'));
        //msg.channel.send(':matt:')
    }
  });


function contains(originalMsg, keyWord){
    if(originalMsg.author.username != "PonyHero"){
        console.log(originalMsg.author.toString());
        return originalMsg.toString().includes(keyWord)
    }else{
        return false;
    }
}
client.on('error', err => {
    console.warn(err);
   });
