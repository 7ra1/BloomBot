`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fetch = require("node-fetch");
const googleIt = require("google-it");
const vers = require(`../../package.json`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
name: `google`,
description: `Search anything on google`,
𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}google <text>`,
async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
try {
`🐙============================================================================================================================<⚡>`;
var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
`🐙============================================================================================================================<⚡>`;
if (arg.length === 0) {
var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
return nahargs
.nahargs(
ӄʀǟӄɨռʐ,
chat,
𝓜𝖎𝖟𝖚ӄ𝖎,
ꜱᴇɴᴅᴇʀɪᴅ,
ꜱᴇɴᴅᴇʀeceived,
𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
𝓜𝓮𝓮ʍօʀɛ
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
}
`🐙============================================================================================================================<⚡>`;
let url = "https://google.com/search?q=" + encodeURIComponent(text);
let search = await googleIt({ query: text });
let msg = search.map(({ title, link, snippet }) => {
return `*${title}*\n_${link}_\n_${snippet}_`;
}).join`\n\n`;
try {
let ss = await (
await fetch(global.API("nrtm", "/api/ssweb", { delay: 1000, url, full }))
).buffer();
if (ss.includes("html")) throw "";
await conn.sendFile(m.chat, ss, "screenshot.png", url + "\n\n" + msg, m);




} catch (ℓαвєяяσя) {
ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
console.log(ℓαвєяяσя);
}
},
};
`🐙============================================================================================================================<⚡>`;
