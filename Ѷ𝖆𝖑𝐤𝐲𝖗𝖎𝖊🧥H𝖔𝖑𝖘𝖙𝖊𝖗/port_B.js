("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let fs = require(`fs`);
let chalk = require(`chalk`);
exports.port_B = async (
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply,
Time,
isCommand,
isCmd
) => {
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
switch (commandName) {
case "":
if (isCommand) {
await ᴋᴜɴᴀɪ.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
text: `Hey *${pushName}* .Do you mean: ${prefix}help`,
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
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
case `pokemon`:
let { pokemon } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pokemon");
await pokemon(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `carbon`:
let { carbon } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/carbon");
await carbon(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `getgif`:
case `gify`:
case `gif`:
let { gify } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/gify");
await gify(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `s`:
case `sgif`:
case `sticker`:
case `stickergif`:
let { sticker } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/sticker");
await sticker(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `toimg`:
let { toimg } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/toimg");
await toimg(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `pin`:
case `pinterest`:
let { pinterest } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pinterest");
await pinterest(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tourl`:
let { tourl } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tourl");
await tourl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `remove`:
let { remove } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/remove");
await remove(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `promote`:
let { promote } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/promote");
await promote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `demote`:
let { demote } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/demote");
await demote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `setdesc`:
let { setdesc } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setdesc");
await setdesc(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `seticon`:
case `setppgrup`:
case `setgpfp`:
let { setgpfp } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setgpfp");
await setgpfp(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tagall`:
let { tagall } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/tagall");
await tagall(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `group`:
let { group } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/group");
await group(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `invite`:
case `grouplink`:
let { invite } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/invite");
await invite(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `del`:
case `delete`:
let { del } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/del");
await del(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `antilink`:
case `stoplink`:
case `nolink`:
let { antilink } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/antilink");
await antilink(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `autorank`:
case `autorole`:
let { autorank } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/autorank");
await autorank(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `setwelcome`:
case `welcomer`:
case `welcome`:
let { setwelcome } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setwelcome");
await setwelcome(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ban`:
let { ban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/ban");
await ban(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `unban`:
let { unban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/unban");
await unban(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `yta`:
case `play`:
case `song`:
case `sing`:
case `ytmp3`:
case `ytplay`:
case `ytaudio`:
case `ytmusic`:
case `youtubemusic`:
let { yta } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/yta");
await yta(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ytv`:
case `watch`:
case `stream`:
case `ytmp4`:
case `ytvideo`:
case `youtubevideo`:
let { ytv } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/ytv");
await ytv(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `yts`:
case `ytsearch`:
case `ytscrape`:
case `youtubescrape`:
case `youtubesearch`:
let { yts } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/yts");
await yts(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `sr`:
case `reddit`:
case `subreddit`:
let { reddit } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/reddit");
await reddit(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `meme`:
let { meme } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/meme");
await meme(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tinyurl`:
let { tinyurl } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tinyurl");
await tinyurl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `join`:
let { join } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/join");
await join(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `leave`:
let { leave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/leave");
await leave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `lyrics`:
let { lyrics } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/lyrics");
await lyrics(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `gimage`:
case `image`:
let { image } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/image");
await image(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `web`:
case `find`:
case `search`:
case `google`:
let { google } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/google");
await google(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `take`:
case `steal`:
let { steal } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/steal");
await steal(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `iguser`:
let { iguser } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/iguser");
await iguser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ship`:
let { ship } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/ship");
await ship(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `quote`:
let { quote } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/quote");
await quote(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `fact`:
let { fact } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/fact");
await fact(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `advice`:
let { advice } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/advice");
await advice(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bot`:
let { bot } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/bot");
await bot(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `pat`:
let { pat } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/pat");
await pat(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `hug`:
let { hug } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/hug");
await hug(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `kiss`:
let { kiss } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kiss");
await kiss(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `cuddle`:
let { cuddle } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cuddle");
await cuddle(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `kick`:
let { kick } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kick");
await kick(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bite`:
let { bite } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bite");
await bite(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `blush`:
let { blush } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/blush");
await blush(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bored`:
let { bored } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bored");
await bored(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `confused`:
let { confused } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/confused");
await confused(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `cry`:
let { cry } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cry");
await cry(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `goodnight`:
let { goodnight } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/goodnight");
await goodnight(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `happy`:
let { happy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/happy");
await happy(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `poke`:
let { poke } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/poke");
await poke(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `sad`:
let { sad } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/sad");
await sad(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `slap`:
let { slap } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/slap");
await slap(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `smile`:
let { smile } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/smile");
await smile(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `wave`:
let { wave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wave");
await wave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `wink`:
let { wink } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wink");
await wink(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `waifu`:
let { waifu } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/waifu");
await waifu(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `neko`:
let { neko } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/neko");
await neko(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `anime`:
let { anime } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/anime");
await anime(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `manga`:
let { manga } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/manga");
await manga(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `wallpaper`:
let { wallpaper } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/wallpaper");
await wallpaper(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bc`:
case `bcgroup`:
let { bcgroup } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/bcgroup");
await bcgroup(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `yt8d`:
let { yt8d } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/yt8d");
await yt8d(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytbassboost`:
let {
ytbassboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytbassboost");
await ytbassboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytecho`:
let { ytecho } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytecho");
await ytecho(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytflanger`:
let { ytflanger } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytflanger");
await ytflanger(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytnightcore`:
let {
ytnightcore,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytnightcore");
await ytnightcore(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytphaser`:
let { ytphaser } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytphaser");
await ytphaser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytreverse`:
let { ytreverse } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytreverse");
await ytreverse(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytslow`:
let { ytslow } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytslow");
await ytslow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytspeed`:
let { ytspeed } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytspeed");
await ytspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsubboost`:
let {
ytsubboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsubboost");
await ytsubboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsuperslow`:
let {
ytsuperspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperspeed");
await ytsuperspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsuperslow`:
let {
ytsuperslow,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperslow");
await ytsuperslow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsurround`:
let {
ytsurround,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsurround");
await ytsurround(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytvaporwave`:
let {
ytvaporwave,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvaporwave");
await ytvaporwave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytvibrato`:
let { ytvibrato } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvibrato");
await ytvibrato(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `bassboost`:
let { bassboost } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/bassboost");
await bassboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `echo`:
let { echo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/echo");
await echo(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `flanger`:
let { flanger } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/flanger");
await flanger(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `nightcore`:
let { nightcore } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/nightcore");
await nightcore(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `phaser`:
let { phaser } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/phaser");
await phaser(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `reverse`:
let { reverse } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/reverse");
await reverse(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `slow`:
let { slow } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/slow");
await slow(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `speed`:
let { speed } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/speed");
await speed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `subboost`:
let { subboost } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/subboost");
await subboost(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `superspeed`:
let { superspeed } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/superspeed");
await superspeed(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `surround`:
let { surround } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/surround");
await surround(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `vaporwave`:
let { vaporwave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vaporwave");
await vaporwave(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `vibrato`:
let { vibrato } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vibrato");
await vibrato(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ass`:
let { ass } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/ass");
await ass(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `bdsm`:
let { bdsm } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/bdsm");
await bdsm(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `cum`:
let { cum } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/cum");
await cum(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `doujin`:
let { doujin } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/doujin");
await doujin(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `feet`:
let { feet } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/feet");
await feet(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `femdom`:
let { femdom } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/femdom");
await femdom(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `foxgirl`:
let { foxgirl } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/foxgirl");
await foxgirl(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `glasses`:
let { glasses } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/glasses");
await glasses(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `hentai`:
let { hentai } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/hentai");
await hentai(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `maid`:
let { maid } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/maid");
await maid(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `masturbation`:
let {
masturbation,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/masturbation");
await masturbation(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `netorare`:
let { netorare } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/netorare");
await netorare(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `orgy`:
let { orgy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/orgy");
await orgy(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `panties`:
let { panties } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/panties");
await panties(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `school`:
let { school } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/school");
await school(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `tentacles`:
let { tentacles } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/tentacles");
await tentacles(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `thighs`:
let { thighs } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/thighs");
await thighs(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `uniform`:
let { uniform } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/uniform");
await uniform(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `yuri`:
let { yuri } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/yuri");
await yuri(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `dly`:
case `daily`:
let { daily } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/daily");
await daily(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `fish`:
case `pond`:
case `fishes`:
let { fish } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/fish");
await fish(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `bet`:
case `gamble`:
case `betting`:
case `roulette`:
let { gamble } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/gamble");
await gamble(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `hunt`:
case `hunting`:
case `pokehunt`:
let { hunt } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/hunt");
await hunt(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `zoo`:
case `forest`:
case `animals`:
let { zoo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/zoo");
await zoo(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `pay`:
case `loan`:
case `borrow`:
case `payment`:
let { pay } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/pay");
await pay(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `sp`:
case `dev`:
case `bot`:
case `devs`:
case `official`:
case `support`:
let { support } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/support");
await support(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `rule`:
case `rules`:
let { rules } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/rules");
await rules(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `h`:
case `how`:
case `help`:
case `menu`:
case `allmenu`:
let { help } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📜ᴍᴇɴᴜ/help");
await help(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
default:
return await ᴋᴜɴᴀɪ.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
image: { url: "https://i.postimg.cc/qB1f08hd/Uni.png" },
caption: `╔══『 𝐏𝐫𝐨𝐭𝐨𝐓𝐲𝐩𝐞® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


*❌ERROR:* Couldn't find any matching commands. Try again with the commands from the help list`,
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
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Present_File = require.resolve(__filename);
var Present_Name = Present_Path.basename(__filename);
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
