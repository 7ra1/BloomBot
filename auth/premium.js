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
require("@/config");
exports.premium = async (BloomBot, mags, update, store) => {
  if (BloomBot.isSudo) {
    await BloomBot.sendMessage(mags.chat, {
      react: {
        text: "🌻",
        key: mags.key,
      },
    });
    return await require("@/System/library")(BloomBot, mags, update, store);
  } else
    await BloomBot.premium.findOne(
      {
        Id: mags.sender,
      },
      async (error, userVium) => {
        if (error) return BloomBot.handlerror(BloomBot, mags, error);
        if (!userVium) {
          new BloomBot.premium({
            Id: mags.sender,
            Limits: 30,
            currTime: Date.now(),
            permTime: 86400000, //3600000
          })
            .save()
            .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
          return await require("@/System/library")(
            BloomBot,
            mags,
            update,
            store
          );
        }
        if (userVium.Limits < 1) {
          if (userVium.permTime - (Date.now() - userVium.currTime) > 0) {
            const clock = BloomBot.ms(
              userVium.permTime - (Date.now() - userVium.currTime)
            );
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*Dear* _${BloomBot.pushname || BloomBot.Tname}_
> You have used up all your free commands for the day.
*💵Limit:* ${userVium.Limits - 1}/30
*💵Renew:* ${clock.hours}h ${clock.minutes}m ${clock.seconds}s`,
              BloomBot.display
            );
          }
        } else {
          await BloomBot.sendMessage(mags.chat, {
            react: {
              text: "🌻",
              key: mags.key,
            },
          });
          userVium.currTime = Date.now();
          userVium.Limits = userVium.Limits - 1;
          userVium
            .save()
            .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
          return await require("@/System/library")(
            BloomBot,
            mags,
            update,
            store
          );
        }
      }
    );
};
