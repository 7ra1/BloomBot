<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
<<<<<<< HEAD
  WhatsBot,
=======
  voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
<<<<<<< HEAD
  await WhatsBot.sendMessage(voxchat.chat, {
=======
  await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    react: {
      text: "🔖",
      key: voxchat.key,
    },
  });
  try {
<<<<<<< HEAD
    if (!WhatsBot.frome && !WhatsBot.isSudo) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (!voxbot.frome && !voxbot.isSudo) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> _Owner Only Command!_`
      );
    }
<<<<<<< HEAD
    if (!WhatsBot.args.join(" ")) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (!voxbot.args.join(" ")) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌Error* 
> _No query provided!_

*⚡Usage*   
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} message_`
      );
    }

    let WhatsBotGroups = await WhatsBot.groupFetchAllParticipating();
    let vGroup = Object.entries(WhatsBotGroups)
=======
> _${voxbot.prefix}${finalname} message_`
      );
    }

    let voxbotGroups = await voxbot.groupFetchAllParticipating();
    let vGroup = Object.entries(voxbotGroups)
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      .slice(0)
      .map((entry) => entry[1]);
    let places = vGroup.map((v) => v.id);
    voxchat.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (let cron of places) {
<<<<<<< HEAD
      await WhatsBot.sendMessage(cron, {
=======
      await voxbot.sendMessage(cron, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        video: {
          url: "./public/Notice.mp4",
        },
        mimetype: "video/mp4",
        fileName: "Synthia-Notice.mp4",
        caption: `┌『*VLKYRE📢BROADCAST* 』
<<<<<<< HEAD
│║⦁ *💫By:*  ${WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${WhatsBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${WhatsBot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat);
=======
│║⦁ *💫By:*  ${voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${voxbot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${voxbot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
