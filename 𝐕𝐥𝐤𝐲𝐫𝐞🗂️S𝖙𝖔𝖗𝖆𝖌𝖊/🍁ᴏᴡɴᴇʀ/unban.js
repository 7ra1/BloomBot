("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
let { Image_Button } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let { Video_Button } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
let { Bot_Not_Admin } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
let userBanCheck = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let { Sender_Not_Admin } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../𝐕𝐥𝐤𝐲𝐫𝐞🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.unban = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
mentionByTag,
mentionByReply
) => {
if (!𝐕𝐥𝐤𝐲𝐫𝐞.fromMe && !isSenderTUF) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:* Owner & Mod only command!

*⚡USAGE:* ${prefix}${Final_Name} _reply to person to ban_
${prefix}${Final_Name} _don't reply to anyone and group will be banned_`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (mentionByReply) {
let repliedPerson =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "extendedTextMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo != null
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.participant || ""
: "";
let repliedPersonNum = repliedPerson.substring(
0,
repliedPerson.length - 15
);
await userBanCheck.findOne(
{
ID: repliedPerson,
},
async (error, userBan) => {
if (error) return console.log(error);
if (!userBan) {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./𝐕𝐥𝐤𝐲𝐫𝐞👗𝕯𝖗𝖊𝖘𝖘/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*❌𝗘𝗿𝗿𝗼𝗿:* That Person Was Not Banned!`
);
} else {
await userBan.delete();
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./𝐕𝐥𝐤𝐲𝐫𝐞👗𝕯𝖗𝖊𝖘𝖘/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* That Person Has Been Un-Banned!`
);
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (!mentionByReply) {
await userBanCheck.findOne(
{
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
},
async (error, userBan) => {
if (error) return console.log(error);
if (!userBan) {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./𝐕𝐥𝐤𝐲𝐫𝐞👗𝕯𝖗𝖊𝖘𝖘/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*❌𝗘𝗿𝗿𝗼𝗿:* ${𝐕𝐥𝐤𝐲𝐫𝐞.groupMetadata.subject} Was Not Banned!`
);
} else {
await userBan.delete();
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./𝐕𝐥𝐤𝐲𝐫𝐞👗𝕯𝖗𝖊𝖘𝖘/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${𝐕𝐥𝐤𝐲𝐫𝐞.groupMetadata.subject} Has Been Un-Banned!`
);
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*⚡USAGE:* ${prefix}${Final_Name} _reply to person to ban_
${prefix}${Final_Name}* _don't reply to anyone and group will be banned_`
);
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");