// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
`😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
—••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
const git = require("simple-git")();
const chalk = require("chalk");
const exec = require("child_process").exec;
const gitPull = async () => {
  await git.fetch();
  var newCommits = await git.log(["KrakinzLab..origin/KrakinzLab"]);
  if (newCommits.total) {
    console.log(chalk.blueBright("💡⬰ New Update pending, updating..."));
    await git.pull("origin", "KrakinzLab", (err, update) => {
      if (update && update.summary.changes) {
        if (update.files.includes("package.json")) {
          exec("npm install").stderr.pipe(process.stderr);
        }
        console.log(
          chalk.greenBright("💡⬰ 𝗔𝘂𝘁𝗼-𝗨𝗽𝗱𝗮𝘁𝗲𝗱 ⚡𝐌𝐞𝐞𝟔™ 𝘄𝗶𝘁𝗵 𝗹𝗮𝘁𝗲𝘀𝘁 𝗰𝗵𝗮𝗻𝗴𝗲𝘀.")
        );
      } else if (err) {
        console.log(
          chalk.redBright(
            "❌⬰ 𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐞𝐞𝟔™ 𝘂𝗽𝗱𝗮𝘁𝗲 𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!"
          )
        );
      }
    });
  } else {
    console.log(chalk.greenBright("💡⬰ ⚡𝐌𝐞𝐞𝟔™ 𝗶𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗼𝗻 𝗹𝗮𝘁𝗲𝘀𝘁 𝘃𝗲𝗿𝘀𝗶𝗼𝗻."));
  }
};

module.exports = gitPull;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
`😈𝗠𝗶𝘇𝘂𝗸𝗶 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗨𝘀𝗲𝗿𝗯𝗼𝘁😈💡𝗠𝗮𝗱𝗲 𝗕𝘆 𝗔 𝗡𝗼𝗼𝗯 𝗳𝗼𝗿 𝗣𝗿𝗼𝘀💡
🐙ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🐙

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
—••÷[ 𝓜𝖎𝖟𝖚ӄ𝖎™ ]÷••—  ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`;
// ⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡
