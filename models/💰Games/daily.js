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
module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    whatsbot.Economy.findOne(
      {
        Id: whatschat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return whatsbot.handlerror(whatsbot, whatschat, error);
        }

        if (!userEco) {
          new whatsbot.Economy({
            Id: whatschat.sender,
            money: 500,
            daily: Date.now(),
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
          return await whatsbot.imagebutton(
            whatsbot,
            whatschat,
            `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*🧈Status:* Added To DB!
✅𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
*💰Balance:* Just Opened Your Account!`,
            "./public/whatsbot.png"
          );
        } else {
          if (userEco.timeout - (Date.now() - userEco.daily) > 0) {
            var ᴄʟᴏᴄᴋ = whatsbot.ms(
              userEco.timeout - (Date.now() - userEco.daily)
            );
            return await whatsbot.imagebutton(
              whatsbot,
              whatschat,
              `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
💵𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s`,
              "./public/whatsbot.png"
            );
          }

          userEco.daily = Date.now();
          userEco.money = userEco.money + 500;
          userEco.save().catch((error) => {
            return whatsbot.handlerror(whatsbot, whatschat, error);
          });
          return await whatsbot.imagebutton(
            whatsbot,
            whatschat,
            `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  500 
💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money}`,
            "./public/whatsbot.png"
          );
        }
      }
    );
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
