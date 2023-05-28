//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  WhatsBot,
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!voxchat.isGroup) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await WhatsBot.profilePictureUrl(voxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/WhatsBot.jpg";
    }
    if (!WhatsBot.args) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${WhatsBot.prefix}${finalname} on
> _${WhatsBot.prefix}${finalname} off_`
      );
    } else if (
      WhatsBot.args[0] === "ON" ||
      WhatsBot.args[0] === "on" ||
      WhatsBot.args[0] === "On"
    ) {
      return await WhatsBot.LinkList.findOne(
        {
          serverId: voxchat.chat,
        },
        async (error, server) => {
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!server) {
            new WhatsBot.LinkList({
              serverId: voxchat.chat,
              value: "ON",
            }).save();
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else if (
      WhatsBot.args[0] === "OFF" ||
      WhatsBot.args[0] === "off" ||
      WhatsBot.args[0] === "Off"
    ) {
      return await WhatsBot.LinkList.findOne(
        {
          serverId: voxchat.chat,
        },
        async (error, server) => {
          if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
          if (!server) {
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else {
            await server.delete();
            return await WhatsBot.imagebutton(
              WhatsBot,
              voxchat,
              `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          }
        }
      );
    } else {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${WhatsBot.prefix}${finalname} on
> _${WhatsBot.prefix}${finalname} off_`
      );
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat);
  }
};
