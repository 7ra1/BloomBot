"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("🌟/config/index.js");

module.exports = async (BloomBot, chatkey, context, video) => {
  let buffer;
  if (Buffer.isBuffer(video)) {
    buffer = video;
  } else if (/^data:.*?\/.*?;base64,/i.test(video)) {
    buffer = Buffer.from(video.split(",")[1], "base64");
  } else if (/^https?:\/\//.test(video)) {
    buffer = await BloomBot.getBuffer(video);
  } else if (await BloomBot.fs.existsSync(video)) {
    buffer = await BloomBot.fs.readFileSync(video);
  } else {
    buffer = Buffer.alloc(0);
  }
  let receiver;
  let mentions = [chatkey.sender];
  await (async () => {
    switch (true) {
      case BloomBot.isReply:
        receiver =
          BloomBot.mtype === "extendedTextMessage" &&
          BloomBot.message.extendedTextMessage.contextInfo != null
            ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
            : "";
        mentions.push(receiver);
        break;
      case BloomBot.mentionByTag:
        receiver =
          BloomBot.mtype === "extendedTextMessage" &&
          BloomBot.message.extendedTextMessage.contextInfo != null
            ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
            : [];
        mentions.push(receiver);
        break;
    }
  })();
  const caption = `*📢Chat Id:* ${chatkey.chat}\n${context}
  
*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`;
  const messageOptions = {
    video: buffer,
    caption: caption,
    gifPlayback: true,
    mentions: mentions,
  };
  await BloomBot.sendMessage(chatkey.chat, messageOptions, {
    quoted: chatkey,
  }).catch((e) => console.log(e));
};

// module.exports = async (BloomBot, chatkey, context, νidēo) => {
// let buffer = Buffer.isBuffer(νidēo)
// ? νidēo
// : /^data:.*?\/.*?;base64,/i.test(νidēo)
// ? Buffer.from(νidēo.split(",")[1], "base64")
// : /^https?:\/\//.test(νidēo)
// ? await BloomBot.getBuffer(νidēo)
// : (await BloomBot.fs.existsSync(νidēo))
// ? await BloomBot.fs.readFileSync(νidēo)
// : Buffer.alloc(0);

// let receiver;
// let mentions = [chatkey.sender];

// switch (true) {
// case BloomBot.isReply:
// receiver =
// BloomBot.mtype == "extendedTextMessage" &&
// BloomBot.message.extendedTextMessage.contextInfo != null
// ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
// : "";

// mentions.push(receiver);

// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;

// case BloomBot.mentionByTag:
// receiver =
// BloomBot.mtype == "extendedTextMessage" &&
// BloomBot.message.extendedTextMessage.contextInfo != null
// ? BloomBot.message.extendedTextMessage.contextInfo.mentionedJid
// : [];

// mentions.push(receiver);

// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;

// default:
// await BloomBot.sendMessage(
// chatkey.chat,
// {
// video: buffer,
// caption: `*📢Chat Id:* ${chatkey.chat}\n${context}\n\n*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`,
// gifPlayback: true,
// mentions: mentions,
// },
// { quoted: chatkey }
// ).catch((e) => console.log(e));
// break;
// }
// };
