//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags, isAdmin, isbotAdmin) => {
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
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await BloomBot.profilePictureUrl(mags.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = BloomBot.display;
    }

    if (BloomBot.args[0] === "Bloom") {
      await BloomBot.groupSettingUpdate(mags.chat, "not_announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              mags,
              `> *Group have been Bloomed by: ${
                BloomBot.pushname || BloomBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          mags.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error:* 
> ${jsonformat(error)}`
          )
        );
    } else if (BloomBot.args[0] === "close") {
      await BloomBot.groupSettingUpdate(mags.chat, "announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              mags,
              `> *Group have been Closed by: ${
                BloomBot.pushname || BloomBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          mags.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error:* 
> ${jsonformat(error)}`
          )
        );
    } else if (BloomBot.args[0] === "antilink") {
      if (
        BloomBot.args[1] === "ON" ||
        BloomBot.args[1] === "on" ||
        BloomBot.args[1] === "On"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: mags.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ChatId:* ${mags.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
> ${error}`);
            }

            if (!server) {
              const newServer = new BloomBot.LinkList({
                serverId: mags.chat,
                value: "ON",
              });
              await newServer.save();
              return await BloomBot.imagebutton(
                BloomBot,
                mags,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await BloomBot.imagebutton(
                BloomBot,
                mags,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        BloomBot.args[1] === "OFF" ||
        BloomBot.args[1] === "off" ||
        BloomBot.args[1] === "Off"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: mags.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ChatId:* ${mags.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
> ${error}`);
            }

            if (!server) {
              return await BloomBot.imagebutton(
                BloomBot,
                mags,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await BloomBot.imagebutton(
                BloomBot,
                mags,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
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
> _Argument Missing!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} close/Bloom
> _${BloomBot.prefix}${fpth} antilink on/off`
        );
      }
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
> _Argument Missing!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} close/Bloom
> _${BloomBot.prefix}${fpth} antilink on/off`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
