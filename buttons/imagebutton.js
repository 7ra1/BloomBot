//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (Voxbot, Voxchat, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (Voxbot.isReply) {
    var receiver =
      Voxbot.mtype == "extendedTextMessage" &&
      Voxbot.message.extendedTextMessage.contextInfo != null
        ? Voxbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await Voxbot.sendMessage(
      Voxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Voxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Voxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Voxbot.prefix}Help`,
            buttonText: { displayText: `${Voxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Voxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Voxchat.sender, receiver] },
        quoted: Voxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (Voxbot.mentionByTag) {
    var receiver =
      Voxbot.mtype == "extendedTextMessage" &&
      Voxbot.message.extendedTextMessage.contextInfo != null
        ? Voxbot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await Voxbot.sendMessage(
      Voxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Voxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Voxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Voxbot.prefix}Help`,
            buttonText: { displayText: `${Voxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Voxchat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [Voxchat.sender, receiver] },
        quoted: Voxchat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await Voxbot.sendMessage(
      Voxchat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${Voxchat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Voxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Voxbot.prefix}Dashboard`,
            buttonText: { displayText: `${Voxbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${Voxbot.prefix}Help`,
            buttonText: { displayText: `${Voxbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Voxchat.sender],
      },
      {
        contextInfo: { mentionedJid: [Voxchat.sender] },
        quoted: Voxchat,
      }
    ).catch((e) => console.log(e));
  }
};
