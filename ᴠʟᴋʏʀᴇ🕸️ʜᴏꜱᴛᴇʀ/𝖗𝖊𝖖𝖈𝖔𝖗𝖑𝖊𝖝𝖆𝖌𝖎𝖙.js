`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
(async () => {
try {
const 𝖗𝖊𝖖𝖈𝖔𝖗𝖑𝖊𝖝𝖆𝖌𝖎𝖙 = require(`simple-git`)();
await 𝖗𝖊𝖖𝖈𝖔𝖗𝖑𝖊𝖝𝖆𝖌𝖎𝖙.fetch();
var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await 𝖗𝖊𝖖𝖈𝖔𝖗𝖑𝖊𝖝𝖆𝖌𝖎𝖙.log([
`KrakinzLab..origin/KrakinzLab`,
]);
if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
var rebase = require(`child_process`).exec(
`git config pull.rebase false`
);
rebase.stdout.pipe(process.stdout);
require(`simple-git`)()
.exec(async () => {
console.log(`💡 𝐈𝐧𝐟𝐨⬰ Updating Corlexa System With Latest Patch...`);
})
.pull(async (Error, update) => {
if (Error) {
console.log(
`❌ 𝐄𝐫𝐫𝐨𝐫⬰ Merge Resulted with Total-Conflicts: ` + Error
);
}
if (update.files.includes(`package.json`)) {
require(`child_process`).exec(`npm i --force`);
}
if (update && update.summary.changes) {
var childs = require(`child_process`).exec(`python3 🐙ᴋʀʏᴏᴛᴇᴋ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
console.log(`💡 𝐈𝐧𝐟𝐨⬰ Auto-Updating Finished!`);
});
}
});
}
} catch (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + Error);
console.log(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ReDeployment Is Needed!`);
let { execSync } = require("child_process");
let res = execSync("python3 🐙ᴋʀʏᴏᴛᴇᴋ.py");
console.log(res.toString());
}
})();
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
