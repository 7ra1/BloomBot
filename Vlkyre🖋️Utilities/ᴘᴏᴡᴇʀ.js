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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");require("./𝕷𝖆ყO𝖚𝖙");
let ᴋᴏʟᴏʀ = require("chalk");
let ʏᴛꜱ = require("yt-search");
let ᴍꜱᴇᴄ = require("parse-ms");
let { Req } = require("./Req");
let ɴᴏᴅᴇꜰᴇᴛᴄʜ = require("node-fetch");
let ɢᴇᴛᴠɪᴅᴇᴏɪᴅ = require("get-video-id");
let ProTon = require("../Vlkyre🌗Events/ProTon");
let { ytaR } = require("../Vlkyre🖋️Utilities/y2mate");
let { ARanks } = require("../Vlkyre🧵Types/ARanks");
let { Caught } = require("../Vlkyre👒Hat/Caught");
let { DenyLink } = require("../Vlkyre🧵Types/DenyLink");
let { getBuffer } = require("../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ");
let Radio = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/radio");
let { 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙 } = require("../Vlkyre🍄Room/𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙");
let Ranker = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/autorank");
let { yta_var } = require("../Vlkyre🛎️Bell/letiableServers");
let LinkList = require("../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/antilink");
let { Image_Button } = require("../Vlkyre👒Hat/Image_Button");
let usedUser = require("../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser");
let userBanCheck = require("../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let { Message_NotMe } = require("../Vlkyre🍄Room/Message_NotMe");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.ᴘᴏᴡᴇʀ = async (Ѷ𝖎𝖔𝖓, 𝖍𝖆𝖜ӄ, Vlyre) => {
if (Vlyre.chatID === "120363024362806300@g.us") {
return await Req(𝖍𝖆𝖜ӄ, Vlyre);
}
async function 𝕮𝖔𝖚𝖓𝖙𝖊𝖗𝖀𝖘𝖊𝖗(Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔) {
await usedUser.findOne(
{
User: Vlyre.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlyre.sender,
Total: Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔,
LastTime: Date.now(),
PermaTime: 15000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
} else {
ꜱᴇʀᴄ.Total = ꜱᴇʀᴄ.Total + Ѷ𝖎𝖔𝖓𝖒𝖔𝖓𝖌𝖔;
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
let ᴍꜱᴇᴄ = require("parse-ms");
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
}
}
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
await Radio.findOne(
{
ID: Vlyre.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, uR) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗);
if (!uR) {
let newRadio = new Radio({
ID: Vlyre.chatID,
goneRadio: 0,
goneRadiotimeout: 0,
});
return await newRadio
.save()
.catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
} else {
if (uR.goneRadiotimeout - (Date.now() - uR.goneRadio) > 0) {
return;
} else {
uR.goneRadio = Date.now();
uR.goneRadiotimeout = 1800000;
await uR.save().catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
// console.log(
// ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("🍯𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐀𝐭: "), ᴋᴏʟᴏʀ.bgYellow(new Date()))
// );
// try {
// let ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ = 15;
// let ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ = false;
// let ᴍᴀɪɴᴜʀʟ = "";
// let ᴄᴏʀᴇꜰᴇᴛᴄʜ;
// if (typeof window === "undefined") {
// ᴄᴏʀᴇꜰᴇᴛᴄʜ = ɴᴏᴅᴇꜰᴇᴛᴄʜ;
// } else {
// ᴄᴏʀᴇꜰᴇᴛᴄʜ = fetch;
// }
// let playlists = [
// {
// name: "most-viewed",
// id: "PL15B1E77BB5708555",
// max: 500,
// },
// {
// name: "billboard",
// id: "PL55713C70BA91BD6E",
// max: 500,
// },
// {
// name: "latest",
// id: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
// max: 500,
// },
// {
// name: "popular-music-videos",
// id: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
// max: 500,
// },
// {
// name: "top-hits-this-week",
// id: "PLw-VjHDlEOgvWPpRBs9FRGgJcKpDimTqf",
// max: 500,
// },
// ];
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// let app = {
// playlist: {},
// index: null,
// baseURL: "https://www.youtube.com/embed/?list={0}&index={1}",
// queryStrings:
// "&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=1&amp;wadsworth=1",
// iframeSrc: "",
// };
// String.prototype.format = function () {
// let string = this;
// for (let i = 0; i < arguments.length; i++) {
// let regexp = new RegExp("\\{" + i + "\\}", "gi");
// string = string.replace(regexp, arguments[i]);
// }
// return string;
// };
// function ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(num) {
// return Math.floor(Math.random() * num);
// }
// function ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ() {
// let loc = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlists.length);
// return playlists[loc];
// }
// function ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ() {
// let playlist = ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ();
// let index = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlist.max);
// return app.baseURL.format(playlist.id, index) + app.queryStrings;
// }
// async function getMainSiteYoutubeMusicVideoUrl(embedUrl) {
// if (embedUrl == null) {
// throw new Error("embedUrl is null");
// }
// let res = await ᴄᴏʀᴇꜰᴇᴛᴄʜ(embedUrl);
// let txt = await res.text();
// let realUrlStartIdx = txt.indexOf("https://www.youtube.com/watch?v=");
// if (realUrlStartIdx === -1) {
// return embedUrl;
// }
// let realUrlEndIdx = txt.indexOf("'", realUrlStartIdx);
// if (realUrlEndIdx === -1) {
// return embedUrl;
// }
// return txt.substring(realUrlStartIdx, realUrlEndIdx);
// }
// async function ʀꜰᴏᴜɴᴅ(preventEmbedded) {
// while (ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ > 0) {
// ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ--;
// let embedUrl = ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ();
// ᴍᴀɪɴᴜʀʟ = await getMainSiteYoutubeMusicVideoUrl(embedUrl);
// ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ =
// ᴍᴀɪɴᴜʀʟ.indexOf("https://www.youtube.com/embed/?list=") !== -1;
// if (!ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
// return ᴍᴀɪɴᴜʀʟ;
// }
// }
// if (preventEmbedded && ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
// return null;
// }
// return ᴍᴀɪɴᴜʀʟ;
// }
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// let ᴛᴜʙᴇʟ = await ʀꜰᴏᴜɴᴅ();
// let { id } = ɢᴇᴛᴠɪᴅᴇᴏɪᴅ(ᴛᴜʙᴇʟ);
// if (!id) return;
// let ꜰꜰᴏᴜɴᴅ = await ʏᴛꜱ(id);
// let ᴛꜰᴏᴜɴᴅ = ꜰꜰᴏᴜɴᴅ.videos.slice(0, 1);
// if (!ᴛꜰᴏᴜɴᴅ) return;
// if (!ꜰꜰᴏᴜɴᴅ) return;
// ᴛꜰᴏᴜɴᴅ.forEach(async function (ᴛᴜʙᴇ) {
// console.log(
// ᴋᴏʟᴏʀ.black(
// ᴋᴏʟᴏʀ.bgWhite("🐙𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐫𝐞𝐝 𝐀𝐭: "),
// ᴋᴏʟᴏʀ.bgMagenta(new Date())
// )
// );
// try {
// let { DLoader } = await yta_var(ᴛᴜʙᴇ.url, "en136");
// return await 𝖍𝖆𝖜ӄ.sendMessage(Vlyre.chatID, {
// audio: { url: DLoader },
// contextInfo: {
// externalAdReply: {
// title: `🍻𝐓𝐢𝐭𝐥𝐞: ${ᴛᴜʙᴇ.title}`,
// body: `ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ⭕ʀᴀᴅɪᴏ`,
// mediaType: 2,
// thumbnail: await getBuffer(ᴛᴜʙᴇ.thumbnail),
// mediaUrl: ᴛᴜʙᴇ.thumbnail,
// },
// },
// mimetype: `audio/mpeg`,
// fileName: `${ᴛᴜʙᴇ.title}.mp3`,
// });
// ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// } catch (𝕰𝖗𝖗𝖔𝖗) {
// console.log(
// ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("⚠️𝕰𝖗𝖗𝖔𝖗: "), ᴋᴏʟᴏʀ.bgRed(𝕰𝖗𝖗𝖔𝖗))
// );
// let ᴍᴇᴅɪᴀ = await ytaR(ᴛᴜʙᴇ.url, "128kbps");
// return await 𝖍𝖆𝖜ӄ.sendMessage(Vlyre.chatID, {
// audio: { url: ᴍᴇᴅɪᴀ.DLoader },
// contextInfo: {
// externalAdReply: {
// title: `🍻𝐓𝐢𝐭𝐥𝐞: ${ᴛᴜʙᴇ.title}`,
// body: `ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ⭕ʀᴀᴅɪᴏ`,
// mediaType: 2,
// thumbnail: await getBuffer(ᴛᴜʙᴇ.thumbnail),
// mediaUrl: ᴛᴜʙᴇ.thumbnail,
// },
// },
// mimetype: `audio/mpeg`,
// fileName: `${ᴛᴜʙᴇ.title}.mp3`,
// });
// }
// });
// } catch (𝕰𝖗𝖗𝖔𝖗) {
// return console.log(
// ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("⚠️𝕰𝖗𝖗𝖔𝖗: "), ᴋᴏʟᴏʀ.bgRed(𝕰𝖗𝖗𝖔𝖗))
// );
// }
}
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (Vlyre.message && !Vlyre.fromMe) {
await Message_NotMe(𝖍𝖆𝖜ӄ, Vlyre);
}
if (Vlyre.message) {
await Ranker.findOne(
{
serverID: Vlyre.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userRank) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗);
if (!userRank) return;
await ARanks(Vlyre, 𝖍𝖆𝖜ӄ, Caught, Vlyre.A𝖗𝖌𝖘);
}
);
}
await ProTon.Vprtn(𝖍𝖆𝖜ӄ, Vlyre);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (
Vlyre.message &&
!Vlyre.isSenderAdmin &&
Vlyre.isBotAdmin &&
!Vlyre.isSenderTUF
) {
await DenyLink(
Vlyre,
𝖍𝖆𝖜ӄ,
Caught,
Image_Button,
Vlyre.A𝖗𝖌𝖘,
LinkList,
Vlyre.Body
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (
Vlyre.isCommand &&
!Vlyre.fromMe &&
!Vlyre.isSenderTUF &&
Vlyre.groupMetadata.subject.includes("Vlyre 𝐑𝐞𝐪𝐮𝐞𝐬𝐭")
) {
return await 𝖍𝖆𝖜ӄ.sendMessage(
Vlyre.chatID,
{
text: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Vlyre.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Vlyre.chatID.split("@")[0]}
╚═══════╝


*❌𝕰𝖗𝖗𝖔𝖗:* Only send your group links.Bot will not respond to commands!`,
},
{
quoted: Vlyre,
}
);
}
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");await userBanCheck.findOne(
{
ID: Vlyre.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, userBCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
await userBanCheck.findOne(
{
ID: Vlyre.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userGCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (userBCheck && !Vlyre.fromMe && !Vlyre.isSenderTUF) {
return;
} else if (userGCheck && !Vlyre.fromMe && !Vlyre.isSenderTUF) {
return;
} else {
if (Vlyre.isCommand) {
let { ӄօʟօʀs } = require("../Vlkyre🌗Events/ӄօʟօʀs");
await ӄօʟօʀs(𝖍𝖆𝖜ӄ, Vlyre);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let MeA = [];
let MeB = [];
let MeC = [];
let MeD = [];
let MeE = [];
let ʀᴇꜱᴘᴏɴꜱᴇ1 = await 𝖍𝖆𝖜ӄ.groupInviteCode(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ2 = await 𝖍𝖆𝖜ӄ.groupInviteCode(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ3 = await 𝖍𝖆𝖜ӄ.groupInviteCode(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ4 = await 𝖍𝖆𝖜ӄ.groupInviteCode(
"120363042762307739@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇ5 = await 𝖍𝖆𝖜ӄ.groupInviteCode(
"120363022161584857@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇA = await 𝖍𝖆𝖜ӄ.groupMetadata(
"120363020792949649@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇB = await 𝖍𝖆𝖜ӄ.groupMetadata(
"120363039223842047@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇC = await 𝖍𝖆𝖜ӄ.groupMetadata(
"120363024871653603@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇD = await 𝖍𝖆𝖜ӄ.groupMetadata(
"120363042762307739@g.us"
);
let ʀᴇꜱᴘᴏɴꜱᴇE = await 𝖍𝖆𝖜ӄ.groupMetadata(
"120363022161584857@g.us"
);
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇA.participants.length; i++) {
MeA[i] = ʀᴇꜱᴘᴏɴꜱᴇA.participants[i].id;
}
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇB.participants.length; i++) {
MeB[i] = ʀᴇꜱᴘᴏɴꜱᴇB.participants[i].id;
}
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇC.participants.length; i++) {
MeC[i] = ʀᴇꜱᴘᴏɴꜱᴇC.participants[i].id;
}
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇD.participants.length; i++) {
MeD[i] = ʀᴇꜱᴘᴏɴꜱᴇD.participants[i].id;
}
for (let i = 0; i < ʀᴇꜱᴘᴏɴꜱᴇE.participants.length; i++) {
MeE[i] = ʀᴇꜱᴘᴏɴꜱᴇE.participants[i].id;
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (
!Vlyre.fromMe &&
Vlyre.isCommand &&
!Vlyre.isSenderTUF &&
!Vlyre.Body.includes("how") &&
!Vlyre.Body.includes("help") &&
!Vlyre.Body.includes("menu") &&
!Vlyre.Body.includes("support") &&
!MeA.includes(Vlyre.sender) &&
!MeB.includes(Vlyre.sender) &&
!MeC.includes(Vlyre.sender) &&
!MeD.includes(Vlyre.sender) &&
!MeE.includes(Vlyre.sender)
) {
/*
*🕊️Grp A:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ1}
*🕊️Grp B:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ2}
*🕊️Grp C:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ3}
*🕊️Grp D:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ4}
*🕊️Grp E:* chat.whatsapp.com/${ʀᴇꜱᴘᴏɴꜱᴇ5}
*/
return await Vlyre.reply(`╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${Vlyre.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Vlyre.chatID.split("@")[0]}
╚═══════╝


❗ 𝐕𝐄𝐑𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 ❗
*Join Any Group Using Below Website and  get verified to use bot anywhere!*
VlkyreAI.krakinzkon.repl.co`);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
await usedUser.findOne(
{
User: Vlyre.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
let ɴᴇᴡᴜꜱᴇʀᴄ = new usedUser({
User: Vlyre.sender,
Total: 0,
LastTime: 0,
PermaTime: 15000,
});
return await ɴᴇᴡᴜꜱᴇʀᴄ
.save()
.catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(
ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime)
);
if (ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime) > 0) {
return Vlyre.reply(
"*❌𝕰𝖗𝖗𝖔𝖗:* You Need To wait for " +
ᴄʟᴏᴄᴋ.seconds +
"secs!"
);
} else {
ꜱᴇʀᴄ.LastTime = Date.now();
await ꜱᴇʀᴄ
.save()
.catch((𝕰𝖗𝖗𝖔𝖗) => Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗));
return await 𝕮𝖆𝖘𝖊𝕮𝖎𝖗𝖈𝖚𝖎𝖙(
Vlyre,
𝖍𝖆𝖜ӄ,
𝕮𝖔𝖚𝖓𝖙𝖊𝖗𝖀𝖘𝖊𝖗,
Ѷ𝖎𝖔𝖓
);
}
}
}
);
}
}
}
}
);
}
);
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