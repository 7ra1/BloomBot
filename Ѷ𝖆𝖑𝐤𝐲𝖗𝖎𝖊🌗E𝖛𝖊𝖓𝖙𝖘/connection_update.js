("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let chalk = require("chalk");
let { DisconnectReason } = require(`@adiwajshing/baileys`);
let connection_update = async (update, startᴋᴜɴᴀɪ, ᴋᴜɴᴀɪ) => {
  let { lastDisconnect, connection, qr } = update;
  if (connection === "close") {
    if (
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
    ) {
      await startᴋᴜɴᴀɪ().catch((e) => console.log(e));
    } else {
      console.log("❌𝐄𝐫𝐫𝐨𝐫꧂ Connection closed. You are logged out.");
      process.exit(0);
    }
  }
  if (qr) {
    QR_GENERATE = qr;
  }
  ("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
  if (connection === "open") {
    console.log(
      chalk.bgGreen(
        "「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」═══════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」"
      )
    );
  }
  try {
    let groupMetadata = await ᴋᴜɴᴀɪ.groupMetadata("120363020792949649@g.us");
    await ᴋᴜɴᴀɪ.sendMessage("120363020792949649@g.us", {
      text: "*💡back Online*",
      mentions: groupMetadata.participants.map((a) => a.id),
    });
    try {
      await ᴋᴜɴᴀɪ
        .groupSettingUpdate("120363020792949649@g.us", "announcement")
        .catch((𝕰𝖗𝖗𝖔𝖗) => Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply(jsonformat(𝕰𝖗𝖗𝖔𝖗)));
    } catch {}
    await ᴋᴜɴᴀɪ.sendMessage(ᴋᴜɴᴀɪ.user.id, {
      text: `お 𝐔𝐬𝐞𝐫: ${
        ᴋᴜɴᴀɪ.user.notify ||
        ᴋᴜɴᴀɪ.user.name ||
        ᴋᴜɴᴀɪ.user.name ||
        ᴋᴜɴᴀɪ.user.id.split("@")[0]
      } お

「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®: Online   」`,
    });
  } catch (error) {
    console.log("「 Stored 𝐕𝐥𝐤𝐲𝐫𝐞 data! 」");
  }
};
module.exports = {
  Vcnup: connection_update,
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
