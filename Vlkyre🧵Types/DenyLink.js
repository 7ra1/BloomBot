("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
exports.DenyLink = async (
Vlyre,
𝖍𝖆𝖜ӄ,
Caught,
Image_Button,
A𝖗𝖌𝖘,
LinkList,
Figure
) => {
await LinkList.findOne(
{
serverID: Vlyre.chatID,
},
async (error, server) => {
if (error) return Caught(𝖍𝖆𝖜ӄ, Vlyre, e);
if (!server) return;
let FetchCurrentGroupLink = await 𝖍𝖆𝖜ӄ.groupInviteCode(Vlyre.chatID);
let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let isGroupLink = GroupLinkRegex.exec(Figure);
let PresentGroupLink = new RegExp(`https://chat.whatsapp.com/${FetchCurrentGroupLink}`,"i");
let isCurrentGroupLink = PresentGroupLink.test(Figure);
if (isGroupLink && !isCurrentGroupLink) {
await Image_Button(
𝖍𝖆𝖜ӄ,
Vlyre,
A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐥𝐤𝐲𝐫𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await 𝖍𝖆𝖜ӄ.groupParticipantsUpdate(Vlyre.chatID, [Vlyre.sender],"remove").catch((e) => Caught(𝖍𝖆𝖜ӄ, Vlyre, e));
} else if (
Figure.includes("https://t.me/") &&
Figure.includes("discord.gg") &&
Figure.includes("discord.com") &&
Figure.includes("/t.me/") &&
Figure.includes("wa.me/") &&
Figure.includes("www.")
) {
await Image_Button(
𝖍𝖆𝖜ӄ,
Vlyre,
A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐥𝐤𝐲𝐫𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await 𝖍𝖆𝖜ӄ.groupParticipantsUpdate(Vlyre.chatID, [Vlyre.sender],"remove").catch((e) => Caught(𝖍𝖆𝖜ӄ, Vlyre, e));
} else {
}
}
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
