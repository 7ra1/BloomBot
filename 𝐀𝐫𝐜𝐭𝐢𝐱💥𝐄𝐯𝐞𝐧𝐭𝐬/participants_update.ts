`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const UserPrivate = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const BanPerson = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐀𝐫𝐜𝐭𝐢𝐱✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
import { jidNormalizedUser } from "@adiwajshing/baileys";
const Downloader = require(`nodejs-file-downloader`);
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import Client from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const participants_update = async (update: any, ӄ𝖗𝖞ӄ𝖓𝖟: any): Promise<void> => {
let client: Client = new Client(ӄ𝖗𝖞ӄ𝖓𝖟);
let 𝐏𝐩𝐢𝐜: any;
for (let i of update.participants) {
try {
𝐏𝐩𝐢𝐜 = await ӄ𝖗𝖞ӄ𝖓𝖟.profilePictureUrl(i, "image");
} catch {
𝐏𝐩𝐢𝐜 = "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ.png";
}
}
const Latest___ = update.participants[0];
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
console.log(update.participants);
if (update.action == "add") {
// if (Latest___.includes(ӄ𝖗𝖞ӄ𝖓𝖟.user.id)) {
// await client.sendMessage(
// update.id,
// {
// timestamp: Date(),
// image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Gold.png" },
// caption: `
// ╔⧉༻ 🧀 𝐃𝐞𝐟𝐚𝐮𝐥𝐭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬! ꧂
// ║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}help:* _commands of Arctix!_
// ║◇ *${ʟᴀʏᴏᴜᴛ.MuveOn}support:* _official arctix groups!_
// ╚════════════╝`,
// footer: `⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
// buttons: [
// {
// buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
// buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
// type: 1,
// },
// {
// buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules`,
// buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules` },
// type: 1,
// },
// ],
// headerType: 4,
// },
// MessageType.buttonsMessage
// );
// }
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const GroupMemData = await ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(update.id);
const ᴘᴘᴡᴇʟᴄᴏᴍᴇ = Latest___.replace(/[^\d-]/g, "");
const GroupMemG = GroupMemData.participants.length;
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
await Welcome.findOne(
{
ID: update.id,
},
async (error: any, userWel: any) => {
if (error) console.log(error);
if (!userWel) return;
await client
.sendMessage(
update.id,
{
contextInfo: { mentionedJid: [Latest___, ] },
timestamp: Date(),
image: { url: 𝐏𝐩𝐢𝐜 },
caption: `「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
┌─「 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 」
├• @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
└────────────◇
┌─「 𝐌𝐞𝐦𝐛𝐞𝐫 」
├• ${GroupMemG}
└────────────◇
┌─「 𝐆𝐫𝐨𝐮𝐩 」
├• ${GroupMemData.subject}
└────────────◇


${userWel.message}`,
footer: `⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
)
.catch((error: any) => console.log(error));
}
);
} else if (update.action == "remove") {
return;
}
};
export = {
participants_update: participants_update,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
