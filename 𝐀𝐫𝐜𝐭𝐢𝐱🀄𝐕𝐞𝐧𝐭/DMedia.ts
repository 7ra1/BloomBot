`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
const util = require(`util`);
import { Transform } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { writeFile } from "fs/promises";
const Oops = require(`../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
import Image_Button from "../𝐀𝐫𝐜𝐭𝐢𝐱☘️𝐊𝐞𝐲𝐬/Image_Button";
const { TelegraPh } = require(`../𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/uploader`);
import { MessageType } from "../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { downloadContentFromMessage } from "@adiwajshing/baileys";
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const DMedia = async (
TUF: any,
Fox: any,
ǟʀɢʊʍɛռȶ: any,
AʀƈȶɨӼ: any,
FileID: string,
FileSocket: { message: any; type: any }
): Promise<void> => {
try {
const FileName: string = "./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/" + FileID + ".png";
const FileStream: Transform = await downloadContentFromMessage(
FileSocket.message,
FileSocket.type
);
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const saveBuffer = async (
FileName: string,
FileStream: Transform
): Promise<void> => {
let buffer = Buffer.from([]);
for await (const chunk of FileStream) {
buffer = Buffer.concat([buffer, chunk]);
}
await writeFile(FileName, buffer);
};
await saveBuffer(FileName, FileStream);
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」                                                                            「   𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
if (AʀƈȶɨӼ.type === "image" || AʀƈȶɨӼ.isReplyImage) {
console.log("Image Received");
let gotTgh = await TelegraPh(FileName);
await Image_Button.VImg(
TUF,
Fox,
AʀƈȶɨӼ,
`🔗𝐔𝐫𝐥: ${util.format(gotTgh)}`,
FileName
);
return await VOID.VOID(FileName);
}
} catch (error) {
console.log(error);
}
};
export = {
VDmed: DMedia,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
