`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
(async () => {
const fs = require("fs");
const path = require("path");
const assert = require("assert");
const { spawn } = require("child_process");
let folders = [".", ...Object.keys(require("./package.json").directories)];
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
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
const ɢɪᴛ = require(`simple-git`)();
await ɢɪᴛ.fetch();
var ꜰᴇᴛᴄʜᴇᴅ = await ɢɪᴛ.log([`KryTek..origin/KryTek`]);
if (ꜰᴇᴛᴄʜᴇᴅ.total != 0) {
require(`simple-git`)().pull(async (e, update) => {
if (e) {
require(`child_process`).exec(
"git config --global pull.rebase false"
);
}
if (update && update.summary.changes) {
var childs = require(`child_process`).exec(`python B͓̽o͓̽o͓̽t͓̽L͓̽o͓̽a͓̽d͓̽e͓̽r͓̽i.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
console.log(`
╔◇║ ⌜Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬⌟\n❝ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™❞
║
║💡 𝐈𝐧𝐟𝐨⬰ Auto-Updating ᴠʟᴋʏʀᴇ System With Latest Patch...!
╚════════════༻꧂`);
} catch (e) {
console.log(e);
console.log(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ Please Re-Deploy!`);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const { ᴠʟᴋʏʀᴇ } = require("./ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗.js");
try {
await ᴠʟᴋʏʀᴇ();
} catch (e) {
console.log(e);
var ᴠʟᴋʏ = require(`child_process`).exec(`python3 𝕭𝖔𝖔𝖙☢𝕷𝖔𝖆𝖉𝖊𝖗.py`);
ᴠʟᴋʏ.stdout.pipe(process.stdout);
ᴠʟᴋʏ.on(`exit`, async function () {
process.exitCode = 1;
});
}
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
