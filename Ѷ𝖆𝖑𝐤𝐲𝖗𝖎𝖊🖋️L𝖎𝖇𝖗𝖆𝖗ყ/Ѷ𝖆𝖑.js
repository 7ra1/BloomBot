("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`./𝕷𝖆ყO𝖚𝖙`);
let fs = require(`fs`);
let chalk = require(`chalk`);
let { Caught } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
let Ranker = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
let LinkList = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/antilink`);
let { Image_Button } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let UserPrivate = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/private`);
let userBanCheck = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
module.exports = ᴋᴜɴᴀɪ = async (ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chatUpdate, Ѷ𝖎𝖔𝖓) => {
if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF) {
await UserPrivate.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, user) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!user) {
var newUser = new UserPrivate({
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
Amount: 1,
});
await newUser.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
"./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!
• No Spamming In Private!
• You Will be blocked after 4 warnings!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else if (user.Amount < 4) {
user.Amount = user.Amount + 1;
await user.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗));
return await Image_Button(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
"./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!
• No Spamming In Private!
• You Will be blocked after 4 warnings!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else {
await user.delete().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗));
await ӄ𝖗𝖞ӄ𝖓𝖟.blockUser(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, "add");
return;
}
}
);
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
await Ranker.findOne(
{
serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userRank) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!userRank) return;
let { ARanks } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/ARanks");
await ARanks(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ᴋᴜɴᴀɪ, Caught);
}
);
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await ᴋᴜɴᴀɪ.groupMetadata(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
let { ᴋʀʏᴏᴛᴇɴᴏʀ } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/ᴋʀʏᴏᴛᴇɴᴏʀ/ᴋʀʏᴏᴛᴇɴᴏʀ");
let { ᴘᴏᴡᴇʀᴇᴅ } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/ᴘᴏᴡᴇʀᴇᴅ");
let ProTon = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/ProTon");
await ProTon.Vprtn(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
if (𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject.includes("Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊")) {
await ᴘᴏᴡᴇʀᴇᴅ(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body);
await ᴋʀʏᴏᴛᴇɴᴏʀ(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body);
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF &&
!𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject.includes("Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊") &&
𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.participants.length < 20
) {
await ᴋᴜɴᴀɪ.sendMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, {
image: { url: "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Red.png" },
caption: `❌𝗘𝗿𝗿𝗼𝗿: ${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject} has _${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.participants.length}/20_ members!`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
],
headerType: 4,
});
return await ᴋᴜɴᴀɪ.groupLeave(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
}
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF
) {
let { DenyLink } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/DenyLink");
await DenyLink(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
ᴋᴜɴᴀɪ,
Caught,
Image_Button,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
LinkList,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body
);
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
await userBanCheck.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, userBCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
await userBanCheck.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userGCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (userBCheck && userGCheck)
return await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply("Banned User or Group!");
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCommand && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
let { BeutyFly } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/BeutyFly");
await BeutyFly(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chalk);
let MeA = [];
let MeB = [];
let MeC = [];
let MeD = [];
let MeE = [];
let MeTA = await ᴋᴜɴᴀɪ.groupMetadata("120363020792949649@g.us");
let MeTB = await ᴋᴜɴᴀɪ.groupMetadata("120363024871653603@g.us");
let MeTC = await ᴋᴜɴᴀɪ.groupMetadata("120363042762307739@g.us");
let MeTD = await ᴋᴜɴᴀɪ.groupMetadata("120363022161584857@g.us");
let MeTE = await ᴋᴜɴᴀɪ.groupMetadata("120363039223842047@g.us");
for (let i = 0; i < MeTA.participants.length; i++)
MeA[i] = MeTA.participants[i].id;
for (let i = 0; i < MeTB.participants.length; i++)
MeB[i] = MeTB.participants[i].id;
for (let i = 0; i < MeTC.participants.length; i++)
MeC[i] = MeTC.participants[i].id;
for (let i = 0; i < MeTD.participants.length; i++)
MeD[i] = MeTD.participants[i].id;
for (let i = 0; i < MeTE.participants.length; i++)
MeE[i] = MeTE.participants[i].id;
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
if (
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCommand &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.includes("how") &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.includes("help") &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.includes("menu") &&
!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body.includes("support") &&
!MeA.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MeB.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MeC.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MeD.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MeE.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
) {
return await ᴋᴜɴᴀɪ.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
image: { url: "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png" },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


*❗ 𝐓𝐨 𝐔𝐬𝐞 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐉𝐨𝐢𝐧 𝐀𝐧𝐲 & 𝐠𝐞𝐭 𝐀𝐮𝐭𝐨 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝 ❗*
*𝗚roup⛩️1:* chat.whatsapp.com/Gn50KMVAJKZHYJeaGhs3UV
*𝗚roup⛩️2:* chat.whatsapp.com/BF6J4MiaduL7ZRgt2Tqzk8
*𝗚roup⛩️3:* chat.whatsapp.com/Hx5VAZMfthg5okQwerohXM
*𝗚roup⛩️4:* chat.whatsapp.com/EwPq86c1N5L4iZKxpHL6WP
*𝗚roup⛩️5:* chat.whatsapp.com/CcRTdjc2SHS0XlMP0Bvi2q`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
}
);
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
} else {
switch (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName) {
case "":
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isCommand) {
await ᴋᴜɴᴀɪ.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
text: `Hey *${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName}* .Do you mean: ${prefix}help`,
footer: `「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  `,
buttons: [
{
buttonId: `${prefix}help`,
buttonText: { displayText: `Commands` },
type: 1,
},
,
],
headerType: 4,
},
{
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
}
);
}
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `pokemon`:
let {
pokemon,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pokemon");
return await pokemon(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `carbon`:
let {
carbon,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/carbon");
return await carbon(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `getgif`:
case `gify`:
case `gif`:
let { gify } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/gify");
return await gify(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `s`:
case `sgif`:
case `sticker`:
case `stickergif`:
let {
sticker,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/sticker");
return await sticker(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `toimg`:
let {
toimg,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/toimg");
return await toimg(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `pin`:
case `pinterest`:
let {
pinterest,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pinterest");
return await pinterest(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `tourl`:
let {
tourl,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tourl");
return await tourl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `remove`:
let {
remove,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/remove");
return await remove(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `promote`:
let {
promote,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/promote");
return await promote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `demote`:
let {
demote,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/demote");
return await demote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `setdesc`:
let {
setdesc,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setdesc");
return await setdesc(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `seticon`:
case `setppgrup`:
case `setgpfp`:
let {
setgpfp,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setgpfp");
return await setgpfp(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `tagall`:
let {
tagall,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/tagall");
return await tagall(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `group`:
let {
group,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/group");
return await group(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `invite`:
case `grouplink`:
let {
invite,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/invite");
return await invite(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `del`:
case `delete`:
let { del } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/del");
return await del(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `antilink`:
case `stoplink`:
case `nolink`:
let {
antilink,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/antilink");
return await antilink(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `autorank`:
case `autorole`:
let {
autorank,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/autorank");
return await autorank(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `setwelcome`:
case `welcomer`:
case `welcome`:
let {
setwelcome,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setwelcome");
return await setwelcome(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ban`:
let { ban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/ban");
return await ban(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `unban`:
let { unban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/unban");
return await unban(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `yta`:
case `play`:
case `song`:
case `sing`:
case `ytmp3`:
case `ytplay`:
case `ytaudio`:
case `ytmusic`:
case `youtubemusic`:
let {
yta,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/yta");
return await yta(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytv`:
case `watch`:
case `stream`:
case `ytmp4`:
case `ytvideo`:
case `youtubevideo`:
let {
ytv,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/ytv");
return await ytv(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `yts`:
case `ytsearch`:
case `ytscrape`:
case `youtubescrape`:
case `youtubesearch`:
let { yts } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/yts");
return await yts(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `sr`:
case `reddit`:
case `subreddit`:
let {
reddit,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/reddit");
return await reddit(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `meme`:
let { meme } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/meme");
return await meme(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `tinyurl`:
let {
tinyurl,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tinyurl");
return await tinyurl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `join`:
let { join } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/join");
return await join(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `leave`:
let { leave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/leave");
return await leave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `lyrics`:
let {
lyrics,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/lyrics");
return await lyrics(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `gimage`:
case `image`:
let {
image,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/image");
return await image(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `web`:
case `find`:
case `search`:
case `google`:
let {
google,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/google");
return await google(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `take`:
case `steal`:
let {
steal,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/steal");
return await steal(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `iguser`:
let {
iguser,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/iguser");
return await iguser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ship`:
let { ship } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/ship");
return await ship(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `quote`:
let {
quote,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/quote");
return await quote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `fact`:
let { fact } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/fact");
return await fact(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `advice`:
let {
advice,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/advice");
return await advice(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bot`:
let { bot } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/bot");
return await bot(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `pat`:
let { pat } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/pat");
return await pat(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `hug`:
let { hug } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/hug");
return await hug(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `kiss`:
let { kiss } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kiss");
return await kiss(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `cuddle`:
let {
cuddle,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cuddle");
return await cuddle(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `kick`:
let { kick } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kick");
return await kick(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bite`:
let { bite } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bite");
return await bite(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `blush`:
let { blush } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/blush");
return await blush(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bored`:
let { bored } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bored");
return await bored(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `confused`:
let {
confused,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/confused");
return await confused(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `cry`:
let { cry } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cry");
return await cry(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `goodnight`:
let {
goodnight,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/goodnight");
return await goodnight(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `happy`:
let { happy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/happy");
return await happy(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `poke`:
let { poke } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/poke");
return await poke(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `sad`:
let { sad } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/sad");
return await sad(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `slap`:
let { slap } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/slap");
return await slap(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `smile`:
let { smile } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/smile");
return await smile(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `wave`:
let { wave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wave");
return await wave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `wink`:
let { wink } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wink");
return await wink(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `waifu`:
let {
waifu,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/waifu");
return await waifu(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `neko`:
let { neko } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/neko");
return await neko(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `anime`:
let {
anime,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/anime");
return await anime(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `manga`:
let {
manga,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/manga");
return await manga(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `wallpaper`:
let {
wallpaper,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/wallpaper");
return await wallpaper(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bc`:
case `bcgroup`:
let {
bcgroup,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/bcgroup");
return await bcgroup(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `yt8d`:
let {
yt8d,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/yt8d");
return await yt8d(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytbassboost`:
let {
ytbassboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytbassboost");
return await ytbassboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytecho`:
let {
ytecho,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytecho");
return await ytecho(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytflanger`:
let {
ytflanger,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytflanger");
return await ytflanger(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytnightcore`:
let {
ytnightcore,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytnightcore");
return await ytnightcore(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytphaser`:
let {
ytphaser,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytphaser");
return await ytphaser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytreverse`:
let {
ytreverse,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytreverse");
return await ytreverse(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytslow`:
let {
ytslow,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytslow");
return await ytslow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytspeed`:
let {
ytspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytspeed");
return await ytspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytsubboost`:
let {
ytsubboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsubboost");
return await ytsubboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytsuperslow`:
let {
ytsuperspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperspeed");
return await ytsuperspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytsuperslow`:
let {
ytsuperslow,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperslow");
return await ytsuperslow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytsurround`:
let {
ytsurround,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsurround");
return await ytsurround(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytvaporwave`:
let {
ytvaporwave,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvaporwave");
return await ytvaporwave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ytvibrato`:
let {
ytvibrato,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvibrato");
return await ytvibrato(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bassboost`:
let {
bassboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/bassboost");
return await bassboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `echo`:
let { echo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/echo");
return await echo(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `flanger`:
let {
flanger,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/flanger");
return await flanger(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `nightcore`:
let {
nightcore,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/nightcore");
return await nightcore(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `phaser`:
let {
phaser,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/phaser");
return await phaser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `reverse`:
let {
reverse,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/reverse");
return await reverse(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `slow`:
let { slow } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/slow");
return await slow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `speed`:
let {
speed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/speed");
return await speed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `subboost`:
let {
subboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/subboost");
return await subboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `superspeed`:
let {
superspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/superspeed");
return await superspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `surround`:
let {
surround,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/surround");
return await surround(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `vaporwave`:
let {
vaporwave,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vaporwave");
return await vaporwave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `vibrato`:
let {
vibrato,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vibrato");
return await vibrato(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `ass`:
let { ass } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/ass");
return await ass(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bdsm`:
let { bdsm } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/bdsm");
return await bdsm(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `cum`:
let { cum } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/cum");
return await cum(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `doujin`:
let {
doujin,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/doujin");
return await doujin(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `feet`:
let { feet } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/feet");
return await feet(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `femdom`:
let {
femdom,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/femdom");
return await femdom(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `foxgirl`:
let {
foxgirl,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/foxgirl");
return await foxgirl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `glasses`:
let {
glasses,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/glasses");
return await glasses(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `hentai`:
let {
hentai,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/hentai");
return await hentai(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `maid`:
let { maid } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/maid");
return await maid(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `masturbation`:
let {
masturbation,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/masturbation");
return await masturbation(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `netorare`:
let {
netorare,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/netorare");
return await netorare(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `orgy`:
let { orgy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/orgy");
return await orgy(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `panties`:
let {
panties,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/panties");
return await panties(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `school`:
let {
school,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/school");
return await school(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `tentacles`:
let {
tentacles,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/tentacles");
return await tentacles(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `thighs`:
let {
thighs,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/thighs");
return await thighs(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `uniform`:
let {
uniform,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/uniform");
return await uniform(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `yuri`:
let { yuri } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/yuri");
return await yuri(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `dly`:
case `daily`:
let { daily } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/daily");
return await daily(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `fish`:
case `pond`:
case `fishes`:
let { fish } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/fish");
return await fish(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `bet`:
case `gamble`:
case `betting`:
case `roulette`:
let {
gamble,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/gamble");
return await gamble(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `hunt`:
case `hunting`:
case `pokehunt`:
let { hunt } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/hunt");
return await hunt(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `zoo`:
case `forest`:
case `animals`:
let { zoo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/zoo");
return await zoo(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `pay`:
case `loan`:
case `borrow`:
case `payment`:
let { pay } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/pay");
return await pay(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `rob`:
case `thief`:
case `robbery`:
let { rob } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/rob");
return await rob(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `sp`:
case `dev`:
case `bot`:
case `devs`:
case `official`:
case `support`:
let {
support,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/support");
return await support(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `rule`:
case `rules`:
let { rules } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/rules");
return await rules(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
case `h`:
case `how`:
case `help`:
case `menu`:
case `allmenu`:
let { help } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📜ᴍᴇɴᴜ/help");
return await help(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isMedia,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participants,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupAdmins,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBotAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.Body,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isReply,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByTag,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionByReply
);
break;
"|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|";
default:
return await ᴋᴜɴᴀɪ.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
image: { url: "https://i.postimg.cc/qB1f08hd/Uni.png" },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


*❌𝕰𝖗𝖗𝖔𝖗:* Couldn't find any matching commands. Try again with the commands from the help list`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
}
);
}
}
}
}
);
}
);
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let Present_Path = require(`path`);
let Present_File = require.resolve(__filename);
let Present_Name = Present_Path.basename(__filename);
fs.watchFile(Present_File, () => {
fs.unwatchFile(Present_File);
console.log(
chalk.yellowBright("💡𝐈𝐧𝐟𝐨꧂ "),
chalk.greenBright(`File Auto Updated: ${Present_Name}`)
);
delete require.cache[Present_File];
require(Present_File);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
