//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  whatsbot,
  whatschat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!whatschat.isGroup) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }
    if (!/image/.test(whatsbot.mime)) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply/send image_`
      );
    }
    if (/webp/.test(whatsbot.mime)) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: {
          text: "❌",
          key: whatschat.key,
        },
      });
      return whatschat.reply(
        `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${whatsbot.prefix}${finalname} reply/send image_`
      );
    }

    let media = await whatsbot.downloadAndSaveMediaMessage(whatsbot.quoted);
    await whatsbot
      .updateProfilePicture(whatschat.chat, { url: media })
      .then(
        whatsbot.imagebutton(
          whatsbot,
          whatschat,
          `> *Group icone has been changed: ${
            whatsbot.pushname || whatsbot.Tname
          }*`,
          media
        )
      )
      .catch(async (error) => {
        whatsbot.fs.unlinkSync(media);
        await whatsbot.sendMessage(whatschat.chat, {
          react: {
            text: "❌",
            key: whatschat.key,
          },
        });
        return whatschat.reply(
          `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌Error* 
> _Could not change group image!_

*🐞Bug* 
> ${error}`
        );
      });
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat);
  }
};
