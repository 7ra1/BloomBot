// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (ѕуηтнσяiα, νℓкhat, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (ѕуηтнσяiα.isReply) {
    var receiver =
      ѕуηтнσяiα.mtype == "extendedTextMessage" &&
      ѕуηтнσяiα.message.extendedTextMessage.contextInfo != null
        ? ѕуηтнσяiα.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await ѕуηтнσяiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: imåge },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнσяiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнσяiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [νℓкhat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender, receiver] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (ѕуηтнσяiα.mentionByTag) {
    var receiver =
      ѕуηтнσяiα.mtype == "extendedTextMessage" &&
      ѕуηтнσяiα.message.extendedTextMessage.contextInfo != null
        ? ѕуηтнσяiα.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await ѕуηтнσяiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: imåge },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнσяiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнσяiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [νℓкhat.sender, receiver],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender, receiver] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await ѕуηтнσяiα
      .sendMessage(
        νℓкhat.chat,
        {
          image: { url: imåge },
          caption: `*📢ID:* ${νℓкhat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
          footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ѕуηтнσяiα.prefix}Dashboard`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ѕуηтнσяiα.prefix}Help`,
              buttonText: { displayText: `${ѕуηтнσяiα.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [νℓкhat.sender],
        },
        {
          contextInfo: { mentionedJid: [νℓкhat.sender] },
          quoted: νℓкhat,
        }
      )
      .catch((e) => console.log(e));
  }
};
