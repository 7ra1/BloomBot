("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let ᴍꜱ = require("parse-ms");
let { Caught } = require("../Vlkyre👒Hat/Caught");
let { ӄօʟօʀs } = require("../Vlkyre🌗Events/ӄօʟօʀs");
let Bagde = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let { Image_Button } = require("../Vlkyre👒Hat/Image_Button");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.Night = async (Vlkyre, ӄӄ, ӄ_counter, Ѷ𝖎𝖔𝖓, CC) => {
await ӄօʟօʀs(ӄӄ, Vlkyre);
await Bagde.findOne(
{
ID: Vlkyre.sender,
},
async (error, userBg) => {
if (error) return Caught(ӄӄ, Vlkyre, util.format(error));
if (!userBg) {
let newUser = new Bagde({
ID: Vlkyre.sender,
Badge: "🧵Basic 10 Commands",
value: "True",
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser.save();
return await Image_Button(
ӄӄ,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_DB.png",
`🧈Added To DB for Current command First Time!`
);
} else {
console.clear();
console.log(userBg);
let Re = ᴍꜱ(userBg.PermanentLimitTime - (Date.now() - userBg.CurrentLimitTime));
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Re > 0 && userBg.Limits == 0) {
userBg.value = "False";
await userBg.save();
return await Image_Button(
ӄӄ,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Re.hours}h ${Re.minutes}m ${Re.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Re > 0 && !userBg.Limits == 0) {
userBg.Limits = userBg.Limits - 1;
userBg.value = "True";
await userBg.save();
return await CC(Vlkyre, ӄӄ, ӄ_counter, Ѷ𝖎𝖔𝖓);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Re < 0 && userBg.Limits == 0) {
if (userBg.Badge === "🧵Basic 10 Commands") userBg.Limits = 10;
if (userBg.Badge === "🥉Bronze 20 Commands") userBg.Limits = 20;
if (userBg.Badge === "🥈Silver 40 Commands") userBg.Limits = 40;
if (userBg.Badge === "🥇Gold 60 Commands") userBg.Limits = 60;
if (userBg.Badge === "💍Platinum 80 Commands") userBg.Limits = 80;
if (userBg.Badge === "💎Diamond 100 Commands") userBg.Limits = 100;
userBg.CurrentLimitTime = Date.now();
userBg.value = "True";
await userBg.save();
return await CC(Vlkyre, ӄӄ, ӄ_counter, Ѷ𝖎𝖔𝖓);
} 
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (userBg.value === "False") {
return await Image_Button(
ӄӄ,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre__Shop.png",
`
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Re.hours}h ${Re.minutes}m ${Re.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
);
}
}
}
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
