// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ѕуηтнiα.profilePictureUrl(νℓкhat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ѕуηтнiα.jpg";
    }

    if (ѕуηтнiα.args[0] === "open") {
      await ѕуηтнiα
        .groupSettingUpdate(νℓкhat.chat, "not_announcement")
        .then(
          async (res) =>
            await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `> *Group have been Opened by: ${
                ѕуηтнiα.pushname || ѕуηтнiα.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          νℓкhat.reply(
            `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (ѕуηтнiα.args[0] === "close") {
      await ѕуηтнiα
        .groupSettingUpdate(νℓкhat.chat, "announcement")
        .then(
          async (res) =>
            await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `> *Group have been Closed by: ${
                ѕуηтнiα.pushname || ѕуηтнiα.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          νℓкhat.reply(
            `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (ѕуηтнiα.args[0] === "antilink") {
      if (
        ѕуηтнiα.args[1] === "ON" ||
        ѕуηтнiα.args[1] === "on" ||
        ѕуηтнiα.args[1] === "On"
      ) {
        return await ѕуηтнiα.LinkList.findOne(
          {
            serverID: νℓкhat.chat,
          },
          async (error, server) => {
            if (error) {
              return ѕуηтнiα.reply(`*🕊️You:* ${
                ѕуηтнiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              let newServer = new ѕуηтнiα.LinkList({
                serverID: νℓкhat.chat,
                value: "ON",
              });
              await newServer.save();
              return await ѕуηтнiα.imgB(
                ѕуηтнiα,
                νℓкhat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await ѕуηтнiα.imgB(
                ѕуηтнiα,
                νℓкhat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        ѕуηтнiα.args[1] === "OFF" ||
        ѕуηтнiα.args[1] === "off" ||
        ѕуηтнiα.args[1] === "Off"
      ) {
        return await ѕуηтнiα.LinkList.findOne(
          {
            serverID: νℓкhat.chat,
          },
          async (error, server) => {
            if (error) {
              return ѕуηтнiα.reply(`*🕊️You:* ${
                ѕуηтнiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await ѕуηтнiα.imgB(
                ѕуηтнiα,
                νℓкhat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await ѕуηтнiα.imgB(
                ѕуηтнiα,
                νℓкhat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await ѕуηтнiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} close/open
> _${ѕуηтнiα.prefix}${pfname} antilink on/off`
        );
      }
    } else {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} close/open
> _${ѕуηтнiα.prefix}${pfname} antilink on/off`
      );
    }
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat);
  }
};
