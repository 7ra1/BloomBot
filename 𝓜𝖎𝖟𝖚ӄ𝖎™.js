try {
  // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎ᴢᴇɴ`);
  const AutoKrakz = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
  const 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/helper`);
  const welbuts = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/welbuts`);
  const postDb = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/postDb`);
  const _𝔏𝔞𝔟_ = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
  const ℓιєηт = require(`./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
  const download = require(`download-file`);
  const Kolor = require(`chalk`);
  const 𝓜𝖎𝖟𝖚ӄ𝖎sql = _𝔏𝔞𝔟_.POSTQL;
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  const fs = require(`fs`);
  console.clear();
  var ᴛʙʏᴇ = [
    `ᴡɪʟʟ ʙᴇ ᴍɪꜱꜱᴇᴅ.`,
    `ᴊᴜꜱᴛ ᴡᴇɴᴛ ᴏꜰꜰʟɪɴᴇ.`,
    `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ʟᴏʙʙʏ.`,
    `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ᴄʟᴀɴ.`,
    `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ɢᴀᴍᴇ.`,
    `ʜᴀꜱ ꜰʟᴇᴅ ᴛʜᴇ ᴀʀᴇᴀ.`,
    `ɴɪᴄᴇ ᴋɴᴏᴡɪɴɢ ʏᴀ!`,
    `ɪᴛ ᴡᴀꜱ ᴀ ꜰᴜɴ ᴛɪᴍᴇ.`,
    `ɪ ᴅᴏɴᴜᴛ ᴡᴀɴᴛ ᴛᴏ ꜱᴀʏ ɢᴏᴏᴅʙʏᴇ.`,
    `ᴡᴇ ʜᴏᴘᴇ ᴛᴏ ꜱᴇᴇ ʏᴏᴜ ᴀɢᴀɪɴ ꜱᴏᴏɴ.`,
    `ʏᴏᴜ'ʀᴇ ʟᴇᴀᴠɪɴɢ, ? ʏᴀʀᴇ ʏᴀʀᴇ ᴅᴀᴢᴇ.`,
    `ɢᴏᴏᴅʙʏᴇ ! ɢᴜᴇꜱꜱ ᴡʜᴏ'ꜱ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ :')`,
    `ɢᴏᴏᴅʙʏᴇ ! ɪᴛ'ꜱ ɢᴏɴɴᴀ ʙᴇ ʟᴏɴᴇʟʏ ᴡɪᴛʜᴏᴜᴛ ʏᴀ.`,
    `ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟᴇᴀᴠᴇ ᴍᴇ ᴀʟᴏɴᴇ ɪɴ ᴛʜɪꜱ ᴘʟᴀᴄᴇ!`,
    `ɢᴏᴏᴅ ʟᴜᴄᴋ ꜰɪɴᴅɪɴɢ ʙᴇᴛᴛᴇʀ ꜱʜɪᴛ-ᴘᴏꜱᴛᴇʀꜱ ᴛʜᴀɴ ᴜꜱ!`,
    `ʏᴏᴜ ᴋɴᴏᴡ ᴡᴇ'ʀᴇ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ . ʀɪɢʜᴛ? ʀɪɢʜᴛ? ʀɪɢʜᴛ?`,
    `ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ, ! ʏᴏᴜ'ʀᴇ ᴏꜰꜰɪᴄɪᴀʟʟʏ ꜰʀᴇᴇ ᴏꜰ ᴛʜɪꜱ ᴍᴇꜱꜱ.`,
  ];
  // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
  var ӄʀǟӄɨռʐ = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.WhatsApp;
  const ascii = require("ascii-table");
  const 𝓜𝖎𝖟𝖚ӄ𝖎Table = new ascii().setHeading("✭𝓜𝖎𝖟𝖚ӄ𝖎✭", "Health");
  ӄʀǟӄɨռʐ.logger.level = "error";
  async function 𝓜𝓮𝓮6s() {
    var 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹 = new Map();
    var commandUsage = new Map();
    console.log(Kolor.yellow(`💡𝗜𝗻𝗳𝗼⬰ 𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    function loadCommands() {
      const Folders = fs.readdirSync(`./𝓜𝖎𝖟𝖚ӄ𝖎😈𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼`);
      for (const folder of Folders) {
        const commandFiles = fs
          .readdirSync(`./𝓜𝖎𝖟𝖚ӄ𝖎😈𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼/${folder}`)
          .filter((file) => file.endsWith(".js"));
        for (const file of commandFiles) {
          const command = require(`./𝓜𝖎𝖟𝖚ӄ𝖎😈𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼/${folder}/${file}`);
          if (command.name) {
            𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.set(command.name, command);
            commandUsage.set(command.𝓜𝓮𝓮6ʍօʀɛ, command.description);
            𝓜𝖎𝖟𝖚ӄ𝖎Table.addRow(
              `💡𝗜𝗻𝗳𝗼⬰ ` + Kolor.green(command.name.toUpperCase()),
              "Ready 🐙"
            );
          } else {
            continue;
          }
        }
        console.log(𝓜𝖎𝖟𝖚ӄ𝖎Table.toString());
      }
    }
    loadCommands();
    if (_𝔏𝔞𝔟_.HEROKU_API === `Null` || _𝔏𝔞𝔟_.HEROKU_BOT_NAME === `Null`) {
      console.log(
        Kolor.yellow(
          `❌𝗘𝗿𝗿⬰  𝐒𝐞𝐞𝐦𝐬 𝐥𝐢𝐤𝐞 𝐇𝐞𝐫𝐨𝐤𝐮 𝐯𝐚𝐫𝐬 𝐚𝐫𝐞 𝐢𝐧𝐯𝐚𝐥𝐢𝐝.𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐚𝐧𝐝 𝐫𝐞𝐭𝐫𝐲!`
        )
      );
      process.exit(0);
    }
    console.log(
      Kolor.yellow(`⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`)
    );
    console.log(Kolor.yellow(`💡𝗜𝗻𝗳𝗼⬰ 𝗖𝗵𝗲𝗰𝗸𝗶𝗻𝗴 𝗳𝗼𝗿 𝘂𝗽𝗱𝗮𝘁𝗲𝘀...`));
    await AutoKrakz();
    try {
      var session = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.Mee6reignite(_𝔏𝔞𝔟_.Mee6);
      ӄʀǟӄɨռʐ.loadAuthInfo(session);
    } catch (ℓαвєяяσя) {
      if (
        ℓαвєяяσя instanceof Typeℓαвєяяσя ||
        ℓαвєяяσя.message === `given authInfo is null` ||
        ℓαвєяяσя instanceof Syntaxℓαвєяяσя
      ) {
        console.log(
          Kolor.red(`𝗜𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗦𝘁𝗿𝗶𝗻𝗴. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝗮𝗴𝗮𝗶𝗻!`)
        );
        process.exit(0);
      } else {
        console.log(Kolor.red(`SOMETHING WENT WRONG.\n`));
        process.exit(0);
      }
    }
    // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    ӄʀǟӄɨռʐ.on(`connecting`, async () => {
      console.log(
        Kolor.yellow(`⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`)
      );
      console.log(Kolor.yellow(`💡𝗜𝗻𝗳𝗼⬰ 𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`));
    });
    // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    ӄʀǟӄɨռʐ.on(`open`, async () => {
      console.log(
        Kolor.yellow(`⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`)
      );
      console.log(Kolor.green(`💡𝗜𝗻𝗳𝗼⬰ 𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`));
      try {
        await 𝓜𝖎𝖟𝖚ӄ𝖎sql.authenticate();
      } catch (ℓαвєяяσя) {
        console.ℓαвєяяσя(
          `❌𝗘𝗿𝗿⬰  𝗨𝗻𝗮𝗯𝗹𝗲 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲:`,
          ℓαвєяяσя
        );
      }
      console.log(
        Kolor.yellow(`⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`)
      );
      console.log(Kolor.green(`💡𝗜𝗻𝗳𝗼⬰ 𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`));
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.sync();
      console.log(
        Kolor.green(`⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`),
        Kolor.red(`
███╗   ███╗██╗███████╗██╗   ██╗██╗  ██╗██╗
████╗ ████║██║╚══███╔╝██║   ██║██║ ██╔╝██║
██╔████╔██║██║  ███╔╝ ██║   ██║█████╔╝ ██║
██║╚██╔╝██║██║ ███╔╝  ██║   ██║██╔═██╗ ██║
██║ ╚═╝ ██║██║███████╗╚██████╔╝██║  ██╗██║
╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝`),
        Kolor.green(`\n⬡=================⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿    ⬡=================⬡`)
      );
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const yes_no = _𝔏𝔞𝔟_.Krakinz;
      if (yes_no === `Null`) {
        await ӄʀǟӄɨռʐ.sendMessage(
          ӄʀǟӄɨռʐ.user.jid,
          {
            url: _𝔏𝔞𝔟_.MEE,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png || Mimetype.jpeg,
            caption: `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

シ︎💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}


💻 𝗪𝗵𝗮𝘁 𝗖𝗮𝗻 𝐌𝐢𝐳𝐮𝐤𝐢™ 𝗗𝗼???
⧪ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
⧪ 𝓜𝖎𝖟𝖚ӄ𝖎 ɪꜱ ᴡʀɪᴛᴛᴇɴ ɪɴ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴀɴᴅ ɪꜱ ʙʏ ꜰᴀʀ ᴛʜᴇ ᴍᴏꜱᴛ ᴀᴅᴠᴀɴᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ.
⧪ ᴜꜱᴇ 𝓜𝖎𝖟𝖚ӄ𝖎 ɪɴ ʙᴏᴛʜ ᴘᴜʙʟɪᴄ-ɢʀᴏᴜᴘꜱ ᴀɴᴅ ᴘʀɪᴠᴀᴛᴇ
⧪ ꜱᴏ ᴍᴀɴʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴛʜᴀᴛ ᴡɪʟʟ ʙʟᴏᴡ ᴜᴘ ᴛʜᴇ ᴇᴠᴇʀʏ-ᴅᴀʏ ᴜꜱᴇ ᴏꜰ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ.`,
          }
        );
      } else {
        console.log(`KrakinzLab-Dev-Mode`);
      }
    });
    await ӄʀǟӄɨռʐ.connect();
    // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    ӄʀǟӄɨռʐ.on(`group-update`, async (update) => {
      groupupdateID = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
      if (update.announce == `false`) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

*<○ ${groupupdateID.subject} Opened ○>*
Group has been opened by admin Now all members can send messages`,
            MessageType.text
          )
          .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (update.announce == `true`) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

*<○ ${groupupdateID.subject} 𝗖𝗹𝗼𝘀𝗲𝗱 ○>*
ɢʀᴏᴜᴘ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ʙʏ ᴀᴅᴍɪɴ ɴᴏᴡ ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ꜱᴇɴᴅ ᴍᴇꜱꜱᴀɢᴇꜱ`,
            MessageType.text
          )
          .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (!update.desc == ``) {
        tag = update.descOwner.split(`@`)[0] + `@s.whatsapp.net`;
        ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

*<○ ${groupupdateID.subject} 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
• 𝙶𝚛𝚘𝚞𝚙 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚌𝚑𝚊𝚗𝚐𝚎𝚍 𝚋𝚢:@${update.descOwner.split(`@`)[0]}

• 𝙽𝚎𝚠 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: 
${update.desc}`,
            MessageType.text,
            {
              contextInfo: {
                mentionedJid: [tag],
              },
            }
          )
          .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (update.restrict == `false`) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖h𝗮𝗻𝗴𝗲 ○>*
ᴇᴅɪᴛ ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴏᴘᴇɴᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
            MessageType.text,
            {}
          )
          .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else if (update.restrict == `true`) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
            MessageType.text,
            {}
          )
          .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
      }
    });
    // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
      var GroupID = update.jid;
      const GroupMemData = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
      const GroupMemG = GroupMemData.participants.length;
      const GroupMemBio = await ӄʀǟӄɨռʐ.getStatus(
        update.participants[0],
        MessageType.text
      );
      const MemNum = update.participants[0];
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (update.action == `add` && MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
        console.log(`⬡••••••••⬡    ⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿Added    ⬡••••••••⬡`);
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            GroupID,
            `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

┌─────⭓
│⦿ ʜᴇʟʟᴏ ᴇᴠᴇʀʏᴏɴᴇ, ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ʜᴇʀᴇ
│⦿ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ *${ᴋᴇɪ}help* ᴛᴏ ᴋɴᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!
└───────────⭓

┌─────⭓
│⬘ 𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
│⬘ 𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}
└───────────⭓`,
            `conversation`
          )
          .then(console.log(Kolor.green(GroupID)))
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (update.action === `add` && !MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
        var enable = await postDb.checkSettings(GroupID, `setwelcome`);
        if (enable === false || enable === `OFF`) {
          return;
        } else {
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          return welbuts
            .welbuts(
              ӄʀǟӄɨռʐ,
              GroupID,
              GroupMemData,
              GroupMemG,
              GroupMemBio,
              MemNum
            )
            .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        }
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (update.action === `remove`) {
        var enable = await postDb.checkSettings(GroupID, `setgoodbye`);
        var ꜰᴇᴛᴄʜᴇᴅʙʏᴇ = await postDb.getMessage(GroupID, `setgoodbye`);
        if (enable === false || enable === `OFF`) {
          return;
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        } else {
          try {
            𝕸𝖊𝖊𝕷𝖊𝖋𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(
              `${MemNum.split(`@`)[0]}@c.us`
            );
          } catch {
            𝕸𝖊𝖊𝕷𝖊𝖋𝖙𝖊𝖗 = `https://i.postimg.cc/3wfrmmpB/NoPP.jpg`;
          }
          download(
            𝕸𝖊𝖊𝕷𝖊𝖋𝖙𝖊𝖗,
            {
              directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/`,
              filename: `𝕸𝖊𝖊𝕷𝖊𝖋𝖙𝖊𝖗.jpg`,
            },
            async function (ℓαвєяяσя) {
              if (ℓαвєяяσя) throw ℓαвєяяσя;
              const byetext = ᴛʙʏᴇ[Math.floor(Math.random() * ᴛʙʏᴇ.length)];
              personcum = MemNum.substring(0, MemNum.length - 15);
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  GroupID,
                  {
                    url: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/𝕸𝖊𝖊𝕷𝖊𝖋𝖙𝖊𝖗.jpg`,
                  },
                  MessageType.image,
                  {
                    mimetype: Mimetype.png || Mimetype.jpeg,
                    contextInfo: {
                      mentionedJid: [MemNum],
                    },
                    caption: `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

@${personcum}👋🏽${byetext}

┌───────⭓ 
│⬘𝗕𝗶𝗼: ${GroupMemBio.status}
│⬘𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
│⬘𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}
└───────────⭓

${ꜰᴇᴛᴄʜᴇᴅʙʏᴇ.message}`,
                  }
                )
                .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
            }
          );
          return;
        }
      }
    });
    // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
      if (!chat.hasNewMessage) {
        return;
      }
      if (!chat.messages) {
        return;
      }
      chat = chat.messages.all()[0];
      var sender = chat.key.remoteJid;
      const groupMetadata = sender.endsWith(`@g.us`)
        ? await ӄʀǟӄɨռʐ.groupMetadata(sender)
        : ``;
      var 𝓜𝖎𝖟𝖚ӄ𝖎 = 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isCmd) {
        console.log(
          Kolor.green(`💡𝗜𝗻𝗳𝗼⬰ ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName} command executed.`)
        );
        const command = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        var arg = 𝓜𝖎𝖟𝖚ӄ𝖎.body.trim().split(/\s+/).slice(1);
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        if (!command) {
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗖𝗼𝗺𝗺𝗮𝗻𝗱

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Use *${ᴋᴇɪ}𝗵𝗲𝗹𝗽* to get the list of available commands`,
              MessageType.text,
              {
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        return command.handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹);
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      var enableanti = await postDb.checkSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
      var ꜰᴇᴛᴄʜᴇᴅanti = await postDb.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
      if (enableanti === false || enableanti === `OFF`) {
        return;
      } else {
        const REMOVE = chat.key.fromMe
          ? ӄʀǟӄɨռʐ.user.jid
          : 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
          ? chat.participant
          : chat.key.remoteJid;
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
          if (
            (!𝓜𝖎𝖟𝖚ӄ𝖎.budy.includes(_𝔏𝔞𝔟_.HASH) &&
              𝓜𝖎𝖟𝖚ӄ𝖎.budy.includes(`://chat.whatsapp.com/`)) ||
            𝓜𝖎𝖟𝖚ӄ𝖎.budy.includes(`://wa.me/`) ||
            𝓜𝖎𝖟𝖚ӄ𝖎.budy.includes(`://discord.gg`)
          ) {
            ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `(ᴄ) ᴍɪᴢᴜᴋɪ ʙᴏᴛ

@${REMOVE},
┌────⭓ 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤🐙𝐀𝐜𝐭𝐢𝐯𝐞
│ ❗𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸-𝗔𝗰𝘁𝗶𝘃𝗲 𝘚𝘰 𝘺𝘰𝘶 𝘸𝘪𝘭𝘭
│ 𝘣𝘦 𝗔𝘂𝘁𝗼-𝗞𝗶𝗰𝗸𝗲𝗱 𝘣𝘺 𝘢𝘥𝘮𝘪𝘯𝘴❗
└───────────⭓

*•──────[ Message From Admins  ]──────•*
${ꜰᴇᴛᴄʜᴇᴅanti.message}`,
                MessageType.text
              )
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            ӄʀǟӄɨռʐ
              .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [REMOVE])
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            return;
          }
        }
      }
    });
  }
  // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
  𝓜𝓮𝓮6s().catch((ℓαвєяяσя) =>
    console.log(Kolor.red(`❌𝗘𝗿𝗿⬰ `), Kolor.red(ℓαвєяяσя))
  );
  // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
