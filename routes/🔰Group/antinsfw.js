("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ ѕуηтнiα was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ѕуηтнiα,
  νℓкhat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!νℓкhat.isGroup) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> This is an Admin only Command!`
      );
    } else if (!isBotAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> Bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ѕуηтнiα.profilePictureUrl(νℓкhat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ѕуηтнiα.jpg";
    }
    if (!ѕуηтнiα.args) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${ѕуηтнiα.prefix}${pfname} on
> ${ѕуηтнiα.prefix}${pfname} off`
      );
    } else if (
      ѕуηтнiα.args[0] === "ON" ||
      ѕуηтнiα.args[0] === "on" ||
      ѕуηтнiα.args[0] === "On"
    ) {
      return await ѕуηтнiα.nsfwCheck.findOne(
        {
          serverID: νℓкhat.chat,
        },
        async (error, server) => {
          if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
          if (!server) {
            new ѕуηтнiα.nsfwCheck({
              serverID: νℓкhat.chat,
              value: "ON",
            }).save();
            return await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else
            return await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
        }
      );
    } else if (
      ѕуηтнiα.args[0] === "OFF" ||
      ѕуηтнiα.args[0] === "off" ||
      ѕуηтнiα.args[0] === "Off"
    ) {
      return await ѕуηтнiα.nsfwCheck.findOne(
        {
          serverID: νℓкhat.chat,
        },
        async (error, server) => {
          if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
          if (!server) {
            return await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else await server.delete();
          return await ѕуηтнiα.imgB(
            ѕуηтнiα,
            νℓкhat,
            `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            𝕯𝖎𝖘𝖕𝖑𝖆𝖞
          );
        }
      );
    } else
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
    return νℓкhat.reply(
      `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${ѕуηтнiα.prefix}${pfname} on
> ${ѕуηтнiα.prefix}${pfname} off`
    );
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat);
  }
};
