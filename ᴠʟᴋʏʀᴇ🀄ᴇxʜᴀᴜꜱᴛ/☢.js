`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { spawn } = require("child_process");
const ʋʟӄʏʀɛքʊʟʟ = require("../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ʋʟӄʏʀɛքʊʟʟ");
const { ᴠʟᴋʏʀᴇ } = require("../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗.js");
let folders = [".", ...Object.keys(require("../package.json").directories)];
let files = [];
for (let folder of folders)
for (let file of fs.readdirSync(folder).filter((v) => {
v.endsWith(`.js`);
}))
files.push(path.resolve(path.join(folder, file)));
for (let file of files) {
if (file == path.join(__dirname, __filename)) continue;
console.error("Verifying: ", file);
spawn("node", ["-c", file])
.on("exit", () => assert.ok(file) & console.log("Verified: ", file))
.stderr.on("data", (chunk) => assert.fail(chunk.toString()));
}
(async () => {
await ʋʟӄʏʀɛքʊʟʟ();
await ᴠʟᴋʏʀᴇ().catch((error) => {
console.log(error);
var ᴠʟᴋʏ = require(`child_process`).exec(`python3 𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗.py`);
ᴠʟᴋʏ.stdout.pipe(process.stdout);
ᴠʟᴋʏ.on(`exit`, async function () {
process.exitCode = 1;
});
});
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
/*
2022-02-19T16:45:18.759848+00:00 app[worker.1]:     remoteJid: '923322147896-1632752229@g.us',
2022-02-19T16:45:18.759848+00:00 app[worker.1]:     fromMe: false,
2022-02-19T16:45:18.759849+00:00 app[worker.1]:     id: '63188597B1B8263FF3CE3EFB5EBA51A1'
*/
