`|⬡────────────────────────────────────════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|────────────────────────────────────═══════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡────────────────────────────────────════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|────────────────────────────────────═══════⬡|`;
import { MessageType } from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { proto } from "@adiwajshing/baileys";
import Client from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import AʀƈȶɨӼ from "../../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/msb";
import ʟᴀʏᴏᴜᴛ from "../../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
//" |────────────────────────────────────════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |────────────────────────────────────═══════| "
import * as fs from "fs";
import path from "path";
var scriptName = path.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
//" |────────────────────────────────────════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |────────────────────────────────────═══════| "
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
await TUF.getGroupMetaData(AʀƈȶɨӼ.chatId, AʀƈȶɨӼ);
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
await TUF.sendMessage(
AʀƈȶɨӼ.chatId,
{
quoted: Fox,
timestamp: Date(),
contextInfo: { mentionedJid: [AʀƈȶɨӼ.sender] },
image: { url: "./𝐀𝐫𝐜𝐭𝐢𝐱👜𝐁𝐚𝐠/AʀƈȶɨӼ_Gold.png" },
caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
├• *Tαɠ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *Nαɱҽ:* ${Fox.pushName}
├• *Cσɱɱαɳԃ:* ${AʀƈȶɨӼ.commandName}
└────────────◇

┌─「 🧀𝐍𝐨 𝐑𝐞𝐬𝐭𝐫𝐢𝐜𝐭𝐢𝐨𝐧🧀 」
├•
├•🍙 ${ʟᴀʏᴏᴜᴛ.MuveOn}animemenu
├•⭕ ${ʟᴀʏᴏᴜᴛ.MuveOn}ytfiltermenu
├•📥 ${ʟᴀʏᴏᴜᴛ.MuveOn}downloadmenu
├•🔰 ${ʟᴀʏᴏᴜᴛ.MuveOn}groupmenu
├•🦄 ${ʟᴀʏᴏᴜᴛ.MuveOn}randommenu
├•🔎 ${ʟᴀʏᴏᴜᴛ.MuveOn}searchmenu
├•🍰 ${ʟᴀʏᴏᴜᴛ.MuveOn}filtersmenu
└──────────────◇

┌─「 ◇⚜️𝐀𝐝𝐦𝐢𝐧 𝐎𝐧𝐥𝐲 ⚜️ 」
├•
├•🔰 ${ʟᴀʏᴏᴜᴛ.MuveOn}groupmenu
├•👑 ${ʟᴀʏᴏᴜᴛ.MuveOn}ownermenu
├•🍑 ${ʟᴀʏᴏᴜᴛ.MuveOn}hentaimenu
├•🥃 ${ʟᴀʏᴏᴜᴛ.MuveOn}humanmenu
└──────────────◇`,
footer: "`⦓ 𝐀𝐫𝐜𝐭𝐢𝐱 ⦔",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}support`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}support` },
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
`|⬡────────────────────────────────────════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|────────────────────────────────────═══════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡────────────────────────────────────════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|────────────────────────────────────═══════⬡|`;
