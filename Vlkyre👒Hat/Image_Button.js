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
exports.Image_Button = async (ӄӄ, Vlkyre, A𝖗𝖌𝖘, M𝖊𝖉𝖎𝖆, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
let usedUser = require(`../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
let ᴍꜱᴇᴄ = require("parse-ms");
let ʙᴏᴛ_ᴜꜱᴇᴅ;
let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
await usedUser.findOne(
{
User: Vlkyre.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(ӄӄ, Vlkyre, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
ʙᴏᴛ_ᴜꜱᴇᴅ = 0
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds
}});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await ӄӄ.sendPresenceUpdate("composing", Vlkyre.chatID);
let ʀᴇᴀᴄᴛ;
if (Vlkyre.isReply) {
var Receiver =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
ʀᴇᴀᴄᴛ = await ӄӄ
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Vlkyre.mentionByTag) {
var Receiver =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.mentionedJid
: [];
ʀᴇᴀᴄᴛ = await ӄӄ
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlkyre.sender, Receiver] },
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
ʀᴇᴀᴄᴛ = await ӄӄ
.sendMessage(
Vlkyre.chatID,
{
contextInfo: { mentionedJid: [Vlkyre.sender] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlkyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlkyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: ʀᴇᴀᴄᴛ.key,
},
};
console.log(ʀᴇᴀᴄᴛ);
return await ӄӄ
.sendMessage(Vlkyre.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
}
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