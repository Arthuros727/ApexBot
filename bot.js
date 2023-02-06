const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
let currentMap = '';
// client.user.setPresence({ game: { name: '.help' }, status: 'online' });



function check(){
  const channel = client.channels.cache.find(channel => channel.name === 'apex-map-rotation');
  request('https://api.mozambiquehe.re/maprotation?auth=e3c1b7ac6759d2004a16208ccc16005a', function (error, response, body) {
    const maps = JSON.parse(body);  
    const take = maps.current.map
    let take1 = maps.current.remainingTimer
    const { MessageAttachment } = require('discord.js')

      const attachment = new MessageAttachment('https://cdn1.dotesports.com/wp-content/uploads/2022/10/26135842/Broken-Moon-Promenade.jpeg');
      const we = new MessageAttachment('https://cdn12.idcgames.com/storage/image/1099/worlds-edge-emergence/default.jpg'); //ex. https://i.imgur.com/random.jpg
      const Olympus = new MessageAttachment('https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/defiance-olympuas-map-update/apex-legends-screenshots-s12-map-sabotagedolympus-b-clean-min.png.adapt.crop191x100.628p.png');
      const kc = new MessageAttachment('https://pbs.twimg.com/ext_tw_video_thumb/1230654017644224512/pu/img/K6tdW7IDfXD4PgPa.jpg');


    if (currentMap != take){
      if(take == "Broken Moon"){

        channel.send( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [attachment] )
        currentMap = take
      }
      if(take == "World's Edge"){

        channel.send( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [we] )
        currentMap = take
      }
      if(take == "Olympus"){

        channel.send( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [Olympus] )
        currentMap = take
      }
      if(take == "King's Canyon"){
        channel.send( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [kc] )
        currentMap = take
      }

      // channel.send(`La carte actuelle est : ` + take + "\nTemps restant : " + take1);
      
    }

})
}

setInterval(function(){ 
  check() 
}, 10000);

client.on('ready', () => {
  client.user.setPresence({
    status: 'online',
    activity: {
      name: "@Elon getting ratio'd",
      type: 'WATCHING'
    },
  });

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
  if (msg.content === '!map') {
    request('https://api.mozambiquehe.re/maprotation?auth=e3c1b7ac6759d2004a16208ccc16005a', function (error, response, body) {
      if (error) return console.error(error);
      const { MessageAttachment } = require('discord.js')

      const attachment = new MessageAttachment('https://cdn1.dotesports.com/wp-content/uploads/2022/10/26135842/Broken-Moon-Promenade.jpeg');
      const we = new MessageAttachment('https://cdn12.idcgames.com/storage/image/1099/worlds-edge-emergence/default.jpg'); //ex. https://i.imgur.com/random.jpg
      const Olympus = new MessageAttachment('https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/defiance-olympuas-map-update/apex-legends-screenshots-s12-map-sabotagedolympus-b-clean-min.png.adapt.crop191x100.628p.png');
      const kc = new MessageAttachment('https://pbs.twimg.com/ext_tw_video_thumb/1230654017644224512/pu/img/K6tdW7IDfXD4PgPa.jpg');
      // ({ content: "La carte actuelle est : " + maps.current.map + "\nTemps restant : " + maps.current.remainingTimer + "\n " , files: [attachment] })
      
      const maps = JSON.parse(body);
      const take = maps.current.remainingTimer
      const take4 = maps.current.map
      if(take4 == "Broken Moon"){

        msg.reply( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [attachment] )
      }
      if(take4 == "World's Edge"){

        msg.reply( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [we] )
      }
      if(take4 == "Olympus"){

        msg.reply( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [Olympus] )
      }
      if(take4 == "King's Canyon"){
        msg.reply( `Current map : ` + maps.current.map + "\nTime remaining : " + maps.current.remainingTimer + "\nNext : " + maps.next.map , [kc] )
      }
      // const currentMap = maps[0];
      
      console.log(take)
      
      // msg.reply( `La carte actuelle est : ` + maps.current.map + "\nTemps restant : " + maps.current.remainingTimer + "\n " +  );
    });
  }
});

client.on('message', msg => {
  if (msg.content === '!elmapo') {
    msg.reply("Did you mean  ElChado ?")
  }
});




client.login('MTA3MTIyNDYzNTgyMTE1MDMyOQ.GHu3pb.uNSYkDsGNoOdnMHE8GFJm9ppavA5Og8ulHFMvA');



