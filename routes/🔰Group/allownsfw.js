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
module.exports = async (BloomBot, blyat, gmeta, isAdmin, isbotAdmin) => {
  try {
    if (!blyat.isGroup) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> This is an Admin only Command!`
      );
    } else if (!isbotAdmin) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await BloomBot.profilePictureUrl(blyat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = BloomBot.display;
    }
    if (!BloomBot.args) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> No query provided!

*🌻Usage*   
> ${BloomBot.prefix}${fpth} on
> ${BloomBot.prefix}${fpth} off`
      );
    } else if (
      BloomBot.args[0] === "ON" ||
      BloomBot.args[0] === "on" ||
      BloomBot.args[0] === "On"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: blyat.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, blyat, error);
          if (!server) {
            new BloomBot.nsfwCheck({
              serverId: blyat.chat,
              value: "ON",
            }).save();
            return await BloomBot.imagebutton(
              BloomBot,
              blyat,
              `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else
            return await BloomBot.imagebutton(
              BloomBot,
              blyat,
              `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
        }
      );
    } else if (
      BloomBot.args[0] === "OFF" ||
      BloomBot.args[0] === "off" ||
      BloomBot.args[0] === "Off"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: blyat.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, blyat, error);
          if (!server) {
            return await BloomBot.imagebutton(
              BloomBot,
              blyat,
              `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else await server.delete();
          return await BloomBot.imagebutton(
            BloomBot,
            blyat,
            `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            𝕯𝖎𝖘𝖕𝖑𝖆𝖞
          );
        }
      );
    } else
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
    return blyat.reply(
      `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> No query provided!

*🌻Usage*   
> ${BloomBot.prefix}${fpth} on
> ${BloomBot.prefix}${fpth} off`
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, blyat, error);
  }
};
module.exports.aliases = [];
