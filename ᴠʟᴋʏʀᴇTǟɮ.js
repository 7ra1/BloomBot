`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const fs = require(`fs`);
const Kolor = require("chalk");
const ascii = require(`ascii-table`);
async function ᴠʟᴋʏʀᴇTǟɮ(ꜱɪᴛʀᴀᴘ, commandUsage) {
const ᴅᴇʀꜱ = fs.readdirSync(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ`);
for (const ʟᴅᴇʀ of ᴅᴇʀꜱ) {
const cmdF = fs
.readdirSync(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ/${ʟᴅᴇʀ}`)
.filter((ɪꜱᴏ) => ɪꜱᴏ.endsWith(`.js`));
for (const ɪꜱᴏ of cmdF) {
const command = require(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ/${ʟᴅᴇʀ}/${ɪꜱᴏ}`);
ꜱɪᴛʀᴀᴘ.set(command.name, command);
commandUsage.set(command.ƈօʀȶǟռǟӄǟɨʐօ, command.description);
}
}
var VlkG = require("child_process").exec("python 🐍𝖛𝖑𝖐𝖕𝖞.py");
console.log("🛰️ 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃:", Kolor.green(VlkG.pid));
VlkG.stderr.pipe(process.stderr);
VlkG.stdout.pipe(process.stdout);
VlkG.on("exit", function (code, signal) {
if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
if (signal)
console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
process.exitCode = 1;
});
}
module.exports = { ᴠʟᴋʏʀᴇTǟɮ };
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
