`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const fs = require(`fs`);
const Kolor = require("chalk");
const { table } = require("table");
const Vlkyre = require(`ascii-table`);
const VlkyreTable = new Vlkyre().setHeading("✭ 𝐅𝐢𝐥𝐞 ✭", "✭ 𝐇𝐞𝐚𝐥𝐭𝐡 ✭");
async function Tǟɮ(ꜱɪᴛʀᴀᴘ) {
  const ᴅᴇʀꜱ = fs.readdirSync(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ`);
  for (const ʟᴅᴇʀ of ᴅᴇʀꜱ) {
    const cmdF = fs
      .readdirSync(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ/${ʟᴅᴇʀ}`)
      .filter((ɪꜱᴏ) => ɪꜱᴏ.endsWith(`.js`));
    for (const ɪꜱᴏ of cmdF) {
      const command = require(`./ᴠʟᴋʏʀᴇ❣️ʜᴇᴀʀᴛ/${ʟᴅᴇʀ}/${ɪꜱᴏ}`);
      if (command.name) {
        ꜱɪᴛʀᴀᴘ.set(command.name, command);
        VlkyreTable.addRow(
          "⚡",
          Kolor.greenBright(command.name.toUpperCase()),
          "SymLinked"
        );
      }
      VlkyreTable.addRow(
        "❌",
        Kolor.redBright(command.name.toUpperCase()),
        "Could Not SymLink!"
      );
      continue;
    }
    console.log(VlkyreTable.toString());
  }
}

module.exports = { Tǟɮ };
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
// const result = require("child_process").spawn("python", [
//     "-c",
//     `import awesomeFile;
//     awesomeFile.myfunc(${command.name}, ${command.ᴠʟᴋʏʀᴇӄǟɨʐօ})`,
//     ]);
//     result.stdout.pipe(process.stdout);
