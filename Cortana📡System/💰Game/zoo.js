`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const animals = require(`../../Cortana🛰️Server/FISH/animals.json`);
const Economy = require(`../../Cortana🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const Zoology = require(`../../Cortana🍃Goose/zoo`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.isGroup) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const hold = require(`../../Cortana🛰️Server/Hold`);
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
Economy.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userEco) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!userEco) {
var newUser = new Economy({
ID: աɦօֆɛռȶɦǟȶ,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║◇ *Type:* _Just Bought A Zoo!_
╚════════════╝`
);
} else {
Zoology.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userZoo) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!userZoo) {
var newUser = new Zoology({
ID: աɦօֆɛռȶɦǟȶ,
zoodone: Date.now(),
zootimeout: 1800000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊    𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════════◇╝

╔════◇🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
║◇ *Type:* _Nothing Found_
╚════════════╝`
);
} else {
if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
let time = ms(
userZoo.zootimeout - (Date.now() - userZoo.zoodone)
);
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊    𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇║
╔◇║
║❌ 𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
║🐓 𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s
╚════════════╝`
);
} else {
const zooID = Math.floor(Math.random() * 10) + 1;
let rarity;
if (zooID < 5) rarity = `small`;
else if (zooID < 8) rarity = `medium`;
else if (zooID < 9) rarity = `big`;
else if (zooID < 10) rarity = `large`;
else rarity = `legendary`;
const anim = animals[rarity];
const worth =
Math.floor(Math.random() * (anim.max - anim.min + 1)) +
anim.min;
userEco.money = userEco.money + worth;
userZoo.zoodone = Date.now();
userZoo.zootimeout = 1800000;
await userZoo
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat)
);
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊    𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇║
╔◇║
║🐆 𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
║💵 𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
║💍 𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_
╚════════════╝`
);
}
}
}
);
}
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
