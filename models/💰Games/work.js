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
module.exports = async (BloomBot, mags) => {
  try {
    const JworkR =
      BloomBot.Jwork[Math.floor(Math.random() * BloomBot.Jwork.length)];
    BloomBot.Economy.findOne(
      {
        Id: mags.sender,
      },
      async (error, userEco) => {
        if (error) {
          return BloomBot.handlerror(BloomBot, mags, error);
        }

        if (!userEco) {
          new BloomBot.Economy({
            Id: mags.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: Date.now(),
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return BloomBot.handlerror(BloomBot, mags, error);
            });
          return await BloomBot.imagebutton(
            BloomBot,
            mags,
            `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*🧈Status:* Added To DB!
*💰Balance:* Just Bloomed Your Account!`,
            BloomBot.display
          );
        } else {
          if (userEco.worktimeout - (Date.now() - userEco.workdone) > 0) {
            const time = BloomBot.ms(
              userEco.worktimeout - (Date.now() - userEco.workdone)
            );
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
❌ 𝗘𝗿𝗿𝗼𝗿: _You have already worked recently._ 
🕐 𝗪𝗼𝗿𝗸_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              BloomBot.display
            );
          } else {
            const amount = Math.floor(Math.random() * 80) + 1;
            userEco.money = userEco.money + amount;
            userEco.workdone = Date.now();
            userEco.worktimeout = 900000;
            userEco.save().catch((error) => {
              return BloomBot.handlerror(BloomBot, mags, error);
            });
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
👔𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ${JworkR}.
🪙𝗘𝗮𝗿𝗻𝗲𝗱: ${amount}`,
              BloomBot.display
            );
          }
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
