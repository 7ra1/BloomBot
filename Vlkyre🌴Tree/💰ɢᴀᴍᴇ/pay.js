("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let Economy = require(`../../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../Vlkyre👒Hat/Image_Button");
let { Video_Button } = require("../../Vlkyre👒Hat/Video_Button");
let { Bot_Not_Admin } = require("../../Vlkyre🧭Compass/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Vlkyre🧭Compass/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Vlkyre👒Hat/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.pay = async (
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
) => {
if (!𝐕𝐥𝐤𝐲𝐫𝐞.mentionByReply) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* Reply-Person: ${prefix}${Final_Name} _amount(number)_`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘.length === 0) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* Reply-Person: ${prefix}${Final_Name} _amount(number)_`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let Format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if (Format.test(𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘[0])) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* Reply-Person: ${prefix}${Final_Name} _amount(number)_`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘[0].match(/[a-z]/i)) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* Reply-Person: ${prefix}${Final_Name} _amount(number)_`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (𝐕𝐥𝐤𝐲𝐫𝐞.mentionByReply) {
let ɢᴏʟᴅ = parseInt(F𝖚𝖑𝖑_A𝖗𝖌𝖘);
let ʀᴇᴄᴇɪᴠᴇʀ =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "extendedTextMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo != null
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.participant || ""
: "";
let ʀᴇᴘʟɪᴇᴅ_ᴘᴇʀꜱᴏɴ = await ӄ𝖗𝖞ӄ𝖓𝖟.getName(ʀᴇᴄᴇɪᴠᴇʀ);
if (ʀᴇᴄᴇɪᴠᴇʀ === 𝐕𝐥𝐤𝐲𝐫𝐞.sender) {
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
ᴠʟᴋʏʀᴇ,
`*❌ERROR:* Can't pay self account.`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
Economy.findOne(
{
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
},
async (Èrrðr, ᴜꜱᴇʀᴘᴀʏ) => {
if (Èrrðr) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr);
if (!ᴜꜱᴇʀᴘᴀʏ) {
let ɴᴇᴡᴜꜱᴇʀᴘᴀʏ = new Economy({
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await ɴᴇᴡᴜꜱᴇʀᴘᴀʏ
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

*❌ERROR:* You Have 0gold To Pay
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName}`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (ɢᴏʟᴅ > ᴜꜱᴇʀᴘᴀʏ.money) {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

*❌ERROR:* You Don't Have That Much gold
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
Economy.findOne(
{
ID: ʀᴇᴄᴇɪᴠᴇʀ,
},
async (Èrrðr, ᴜꜱᴇʀɢᴏᴛ) => {
if (Èrrðr) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr);
if (!ᴜꜱᴇʀɢᴏᴛ) {
let ɴᴇᴡᴜꜱᴇʀɢᴏᴛ = new Economy({
ID: ʀᴇᴄᴇɪᴠᴇʀ,
money: ɢᴏʟᴅ,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await ɴᴇᴡᴜꜱᴇʀɢᴏᴛ
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr));
ᴜꜱᴇʀᴘᴀʏ.money = ᴜꜱᴇʀᴘᴀʏ.money - ɢᴏʟᴅ;
await ᴜꜱᴇʀᴘᴀʏ
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*📤𝐏𝐚𝐲𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName}
◇══════════◇
*📥𝐑𝐞𝐜𝐞𝐢𝐯𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ɢᴏʟᴅ}
*🐿️𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝗼 𝗣𝗮𝘆:* @${ʀᴇᴘʟɪᴇᴅ_ᴘᴇʀꜱᴏɴ}`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
ᴜꜱᴇʀᴘᴀʏ.money = ᴜꜱᴇʀᴘᴀʏ.money - ɢᴏʟᴅ;
ᴜꜱᴇʀɢᴏᴛ.money = ᴜꜱᴇʀɢᴏᴛ.money + ɢᴏʟᴅ;
await ᴜꜱᴇʀᴘᴀʏ
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr));
await ᴜꜱᴇʀɢᴏᴛ
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*📤𝐏𝐚𝐲𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀᴘᴀʏ.money}
*🦚𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗛𝗼𝗹𝗱𝗲𝗿:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName}
◇══════════◇
*📥𝐑𝐞𝐜𝐞𝐢𝐯𝐢𝐧𝐠 𝐀𝐜𝐜𝐨𝐮𝐧𝐭*
*💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲:* ${ᴜꜱᴇʀɢᴏᴛ.money}
*🐿️𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗧𝗼 𝗣𝗮𝘆:* @${ʀᴇᴘʟɪᴇᴅ_ᴘᴇʀꜱᴏɴ}`
);
}
);
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Argument Needed!

*⚡USAGE:* Reply-Person: ${prefix}${Final_Name} _amount(number)_`
);
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
