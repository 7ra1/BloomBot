//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, blyat) => {
  try {
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to Audio_`
      );
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    if (/audio/.test(BloomBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await BloomBot.downloadAndSaveMediaMessage(BloomBot.quoted, random);
      BloomBot.exec(
        `${BloomBot.pathFFmpeg} -i ${media} -af "aecho=0.8:0.9:1000:0.3" ${random}.mp3`,
        async (error) => {
          return blyat.reply(`*🌻You:* ${
            BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
          }\n*📢ChatId:* ${blyat.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
          var Thumb = await BloomBot.getBuffer(BloomBot.display);
          return await BloomBot.sendMessage(
            blyat.chat,
            {
              audio: BloomBot.fs.readFileSync(`${random}.mp3`),
              contextInfo: {
                externalAdReply: {
                  title: `*🎙️Filter:* _${fpth}_`,
                  body: "BloomBot by xhåÐr™",
                  mediaType: 2,
                  thumbnail: Thumb,
                  mediaUrl: one.url,
                },
              },
              mimetype: "audio/mpeg",
              fileName: `${one.title}.mp3`,
            },
            { quoted: blyat }
          ).then(BloomBot.fs.unlinkSync(`${random}.mp3`));
        }
      );
    } else {
      ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} reply to Audio_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, blyat, error);
  }
};
module.exports.aliases = [];
