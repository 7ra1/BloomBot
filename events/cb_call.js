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
module.exports = async (BloomBot, store, logger) => {
  BloomBot.ws.on("CB:call", async (update) => {
    return await BloomBot.Anticall.findOne(
      {
        Id: mags.sender,
      },
      async (error, server) => {
        if (error) return BloomBot.handlerror(BloomBot, mags, error);
        if (!server) return;
        const callerId = update.content[0].attrs["call-creator"];
        let person = await BloomBot.sendContact(callerId, global.owner);

        const welcomeMessage = `🌻 *Hello, ${
          BloomBot.pushname || BloomBot.Tname
        }!*

Thank you for reaching out to me. I'm BloomBot, your personal assistant.

⚠️ *Anticall: On*
This feature has been enabled by the owner for their privacy. As a result, I am unable to accept your call at the moment. I apologize for any inconvenience caused.
If you need any assistance or have any questions, please join our support group for further help.


*ⒸBloomBot (md) by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum`;

        await BloomBot.sendMessage(
          callerId,
          {
            text: welcomeMessage,
          },
          { quoted: person },
        );
        // const sleep = async (ms) => { return new Promise((resolve) => setTimeout(resolve, ms))};
        // await sleep(4000);
        return await BloomBot.updateBlockStatus(callerId, "block");
      },
    );
  });
  return BloomBot;
};