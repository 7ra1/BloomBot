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
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let Economy = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../Vlkyre👒Hat/Image_Button");
let { Video_Button } = require("../../Vlkyre👒Hat/Video_Button");
let { Bot_Not_Admin } = require("../../Vlkyre🧭Compass/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Vlkyre🧭Compass/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Vlkyre👒Hat/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.daily = async (
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
Economy.findOne(
{
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, util.format(Èrrðr));
if (!userEco) {
let newUser = new Economy({
ID: 𝐕𝐥𝐤𝐲𝐫𝐞.sender,
money: 500,
daily: Date.now(),
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, util.format(Èrrðr)));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_DB.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
✅𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!`
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
if (userEco.timeout - (Date.now() - userEco.daily) > 0) {
let ᴄʟᴏᴄᴋ = ms(userEco.timeout - (Date.now() - userEco.daily));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Daily.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


❌𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
💵𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
userEco.daily = Date.now();
userEco.money = userEco.money + 500;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, 𝐕𝐥𝐤𝐲𝐫𝐞, util.format(Èrrðr)));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Daily.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`
);
}
}
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
