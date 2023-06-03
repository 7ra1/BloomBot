"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
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
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags, gmeta, isAdmin, isbotAdmin) => {
  try {
    if (!mags.isGroup) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _bot not Admin!_`
      );
    }

    try {
      ProfilePic = await BloomBot.profilePictureUrl(mags.chat, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }
    if (!BloomBot.args) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:*   
> _${BloomBot.prefix}${fpth} on
> _${BloomBot.prefix}${fpth} off_`
      );
    } else if (
      BloomBot.args[0] === "ON" ||
      BloomBot.args[0] === "on" ||
      BloomBot.args[0] === "On"
    ) {
      return await BloomBot.LinkList.findOne(
        {
          serverId: mags.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!server) {
            new BloomBot.LinkList({
              serverId: mags.chat,
              value: "ON",
            }).save();
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              ProfilePic
            );
          } else {
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              ProfilePic
            );
          }
        }
      );
    } else if (
      BloomBot.args[0] === "OFF" ||
      BloomBot.args[0] === "off" ||
      BloomBot.args[0] === "Off"
    ) {
      return await BloomBot.LinkList.findOne(
        {
          serverId: mags.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!server) {
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              ProfilePic
            );
          } else {
            await server.delete();
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              ProfilePic
            );
          }
        }
      );
    } else {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:*   
> _${BloomBot.prefix}${fpth} on
> _${BloomBot.prefix}${fpth} off_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [
  "nohyper",
  "nolink",
  "unlinks",
  "urlstop",
  "linkoff",
  "antiurl",
  "nourl",
  "nobind",
  "nolinks",
  "unlink",
];
