//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (Foxbot, Foxchat, 𝚌𝚘𝚗𝚝є𝚡𝚝, νidē໐) => {
  if (Foxbot.isReply) {
    var receiver =
      Foxbot.mtype == "extendedTextMessage" &&
      Foxbot.message.extendedTextMessage.contextInfo != null
        ? Foxbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await Foxbot.sendMessage(
      Foxchat.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Foxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Foxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Foxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Foxbot.prefix}Help`,
            buttonText: { displayText: `${Foxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [Foxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender, receiver] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (Foxbot.mentionByTag) {
    var receiver =
      Foxbot.mtype == "extendedTextMessage" &&
      Foxbot.message.extendedTextMessage.contextInfo != null
        ? Foxbot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await Foxbot.sendMessage(
      Foxchat.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Foxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Foxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Foxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Foxbot.prefix}Help`,
            buttonText: { displayText: `${Foxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [Foxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender, receiver] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await Foxbot.sendMessage(
      Foxchat.chat,
      {
        image: { url: νidē໐ },
        caption: `*📢Id:* ${Foxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Foxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Foxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Foxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Foxbot.prefix}Help`,
            buttonText: { displayText: `${Foxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 5,
        mentions: [Foxchat.sender],
      },
      {
        contextInfo: { mentionedJid: [Foxchat.sender] },
        quoted: Foxchat,
      }
    ).catch((e) => console.log(e));
  }
};
