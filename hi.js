'use strict';

const fs = require('fs');

fs.readFile('config.json', (err, data) => {
    if (err) throw err;
    let serverid1 = JSON.parse(data).serverID;
    let clid1 = JSON.parse(data).clientID;
    let details1 = JSON.parse(data).details;
    let largeImage1 = JSON.parse(data).largeImageName;
    let largeImageText1 = JSON.parse(data).largeImageText;
    let smallImage1 = JSON.parse(data).smallImageName;
    
    // servers data

    let pers_team = 691254865405411359

    














    console.log(serverid1);
    if (serverid1 == pers_team) {
  largeImage1 = 'jss';
}





const node_fetch = require("node-fetch");
node_fetch(`https://discordapp.com/api/guilds/${serverid1}/widget.json`).then(res => res.text()).then(data => {console.log(JSON.parse(data).name);

node_fetch(`https://discordapp.com/api/guilds/${serverid1}/widget.json`).then(res => res.text()).then(data => {console.log(JSON.parse(data).presence_count);

node_fetch(`https://discordapp.com/api/guilds/${serverid1}/widget.json`).then(res => res.text()).then(data => {console.log(JSON.parse(data).instant_invite);




'use strict';

const client = require('.')(`${clid1}`);

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '1337') {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

client.on('connected', () => {
  console.log('connected!');

let numbermem = JSON.parse(data).presence_count



  client.updatePresence({
    state: 'Online Members',
    details: `${details1}`,
    largeImageKey: `${largeImage1}`,
    largeImageText: `${largeImageText1}`,
    smallImageKey: `${smallImage1}`,
    smallImageText: JSON.parse(data).instant_invite,
    partyId: 'snek_party',
    partySize: 1,
    partyMax: JSON.parse(data).presence_count,
    matchSecret: 'slithers',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
  });
});







process.on('unhandledRejection', console.error);





})
})
})

});




