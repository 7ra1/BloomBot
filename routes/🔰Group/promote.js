//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  VօxB໐t,
  ᴠᴏxᴄ,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!ᴠᴏxᴄ.isGroup) {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    if (VօxB໐t.args[0] && VօxB໐t.args[0].startsWith("@")) {
      let mention = VօxB໐t.mentionByTag;
      let users = (await mention[0]) || ᴠᴏxᴄ.msg.contextInfo.participant;
      if (!users) {
        await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} @tag/reply_`
        );
      }
      try {
        await VօxB໐t.groupParticipantsUpdate(ᴠᴏxᴄ.chat, [users], "promote");
      } catch {
        await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await VօxB໐t.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/VօxB໐t.jpg";
      }
      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else if (VօxB໐t.mentionByReply) {
      let users =
        ᴠᴏxᴄ.mtype == "extendedTextMessage" &&
        ᴠᴏxᴄ.message.extendedTextMessage.contextInfo != null
          ? ᴠᴏxᴄ.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} @tag/reply_`
        );
      }
      try {
        await VօxB໐t.groupParticipantsUpdate(ᴠᴏxᴄ.chat, [users], "promote");
      } catch {
        await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await VօxB໐t.profilePictureUrl(users, "image");
      } catch {
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/VօxB໐t.jpg";
      }
      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        𝕯𝖎𝖘𝖕𝖑𝖆𝖞
      );
    } else {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Couldn't find any userID in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} @tag/reply_`
      );
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ);
  }
};
