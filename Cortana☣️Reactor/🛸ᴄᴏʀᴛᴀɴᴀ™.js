(async () => {
  try {
    const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
    const Kolor = require(`chalk`);
    await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
    var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([`KrakinzLab..origin/KrakinzLab`]);
    if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
      require(`simple-git`)()
        .exec(async () => {
          console.log(
            Kolor.yellow(
              `💡 𝐈𝐧𝐟𝐨⬰ Updating Cortana System With Latest Patch...`
            )
          );
          console.log(
            Kolor.green(`\n\n
          ⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
          ██░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█░▄▄▀███░▄▄▀█░██░████░█▀▄█░▄▄▀█░▄▄▀█░█▀██▄██░▄▄▀█▄▄░██░████░▄▄▀█░▄▄▀
          ██░████░██░█░▀▀▄██░██░▀▀░█░██░█░▀▀░███░▄▄▀█░▀▀░████░▄▀██░▀▀▄█░▀▀░█░▄▀██░▄█░██░█▀▄███░████░▀▀░█░▄▄▀
          ██░▀▀▄██▄▄██▄█▄▄██▄██▄██▄█▄██▄█▄██▄███▄▄▄▄█▀▀▀▄████░██░█▄█▄▄█▄██▄█▄█▄█▄▄▄█▄██▄█▄▄▄██░▀▀░█▄██▄█▄▄▄▄
          ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
          ⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
          \n\n`)
          );
        })
        .pull(async (Error, update) => {
          if (Error) {
            try {
              const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
              console.log(
                Kolor.green(
                  `💡 𝐈𝐧𝐟𝐨⬰ Auto-Updating Finished. Total Changes: [${mergeSummary.merges.length}]`
                )
              );
            } catch (Error) {
              console.log(
                Kolor.red(
                  `❌ 𝐄𝐫𝐫𝐨𝐫⬰ Merge Resulted with Total-Conflicts: ${Kolor.red(
                    Error
                  )} `
                )
              );
            }
          } else if (update && update.summary.changes) {
            var childs = require(`child_process`).exec(`python3 ᴄᴏʀᴛᴀɴᴀ.py`);
            childs.stdout.pipe(process.stdout);
            childs.on(`exit`, async function () {
              process.exitCode = 1;
              console.log(
                Kolor.green(`\n\n
          ⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
          ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
          ██░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█░▄▄▀███░▄▄▀█░██░████░█▀▄█░▄▄▀█░▄▄▀█░█▀██▄██░▄▄▀█▄▄░██░████░▄▄▀█░▄▄▀
          ██░████░██░█░▀▀▄██░██░▀▀░█░██░█░▀▀░███░▄▄▀█░▀▀░████░▄▀██░▀▀▄█░▀▀░█░▄▀██░▄█░██░█▀▄███░████░▀▀░█░▄▄▀
          ██░▀▀▄██▄▄██▄█▄▄██▄██▄██▄█▄██▄█▄██▄███▄▄▄▄█▀▀▀▄████░██░█▄█▄▄█▄██▄█▄█▄█▄▄▄█▄██▄█▄▄▄██░▀▀░█▄██▄█▄▄▄▄
          ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
          ⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
          \n\n`)
              );
            });
          } else {
            require("child_process").child_process.execFile(
              "node",
              ["./Cortana🛰️Server/🛸ƈօʀȶǟռǟ™.js"],
              (err, stdout, stderr) => {
                if (err) {
                  console.log(err);
                }
                if (stdout) {
                  console.log(stdout);
                }
                if (stderr) {
                  console.log(stderr);
                }
              }
            );
          }
        });
    }
  } catch (Error) {
    console.log(Error);
    console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`));
  }
})();
