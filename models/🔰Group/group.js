//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  FoxBot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!Foxchat.isGroup) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await FoxBot.profilePictureUrl(Foxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/FoxBot.png";
    }

    if (FoxBot.args[0] === "open") {
      await FoxBot
        .groupSettingUpdate(Foxchat.chat, "not_announcement")
        .then(
          async (res) =>
            await FoxBot.imagebutton(
              FoxBot,
              Foxchat,
              `> *Group have been Opened by: ${
                FoxBot.pushname || FoxBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          Foxchat.reply(
            `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (FoxBot.args[0] === "close") {
      await FoxBot
        .groupSettingUpdate(Foxchat.chat, "announcement")
        .then(
          async (res) =>
            await FoxBot.imagebutton(
              FoxBot,
              Foxchat,
              `> *Group have been Closed by: ${
                FoxBot.pushname || FoxBot.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          Foxchat.reply(
            `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (FoxBot.args[0] === "antilink") {
      if (
        FoxBot.args[1] === "ON" ||
        FoxBot.args[1] === "on" ||
        FoxBot.args[1] === "On"
      ) {
        return await FoxBot.LinkList.findOne(
          {
            serverId: Foxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return FoxBot.reply(`*🕊️You:* ${
                FoxBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${Foxchat.chat}

*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              var newServer = new FoxBot.LinkList({
                serverId: Foxchat.chat,
                value: "ON",
              });
              await newServer.save();
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        FoxBot.args[1] === "OFF" ||
        FoxBot.args[1] === "off" ||
        FoxBot.args[1] === "Off"
      ) {
        return await FoxBot.LinkList.findOne(
          {
            serverId: Foxchat.chat,
          },
          async (error, server) => {
            if (error) {
              return FoxBot.reply(`*🕊️You:* ${
                FoxBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Id:* ${Foxchat.chat}

*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await FoxBot.sendMessage(Foxchat.chat, {
          react: {
            text: "❌",
            key: Foxchat.key,
          },
        });
        return Foxchat.reply(
          `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} close/open
> _${FoxBot.prefix}${finalname} antilink on/off`
        );
      }
    } else {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${FoxBot.prefix}${finalname} close/open
> _${FoxBot.prefix}${finalname} antilink on/off`
      );
    }
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat);
  }
};
