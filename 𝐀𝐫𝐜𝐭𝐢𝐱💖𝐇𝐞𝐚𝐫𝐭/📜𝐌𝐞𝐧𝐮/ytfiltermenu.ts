`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
import * as fs from 'fs';
import path from 'path';
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
export = {
name: dotScrpt,
category: path.basename(__dirname),
async handle(
TUF: Client,
Fox: proto.IWebMessageInfo,
AʀƈȶɨӼ: AʀƈȶɨӼ,
ǟʀɢʊʍɛռȶ: string[],
ӄʀʏȶɛӄ
): Promise<void> {
const ʟɴᴀᴍᴇ = AʀƈȶɨӼ.sender;
const ᴅꜰɴᴀᴍᴇ = AʀƈȶɨӼ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
let grup: any;
try {
grup = await TUF.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
} catch (e) {
console.log(e);
}
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox,
timestamp: Date(),
contextInfo: { mentionedJid: [AʀƈȶɨӼ.sender] },
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Sky.jpg" },
caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐏𝐫𝐨𝐭𝐨® 」
├• *ɴᴀᴍᴇ:* ${Fox.pushName}
├• *ᴍᴇɴᴛɪᴏɴ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *ᴄᴏᴍᴍᴀɴᴅ:* ${AʀƈȶɨӼ.commandName}
└────────────────◇

┌─「 ⭕ 𝐘𝐨𝐮𝐓𝐮𝐛𝐞/𝐅𝐢𝐥𝐭𝐞𝐫
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}yt8d:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytbassboost:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytdeep:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytecho:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytflanger:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytnightcore:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytphaser:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytreverse:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytslow:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytspeed:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytsubboost:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytsuperslow:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytsuperspeed:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytsurround:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytvaporwave:*  _download yt audio with filter_
├• *${ʟᴀʏᴏᴜᴛ.MuveOn}ytvibrato:*  _download yt audio with filter_
└────────────◇`,
footer: "*⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 𝐁𝐞𝐭𝐚❗ ⦔*",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
);
},
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
