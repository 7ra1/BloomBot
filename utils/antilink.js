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
module.exports = async (BloomBot, mags) => {
  const FetchCurrentGroupLink = await BloomBot.groupInviteCode(mags.chat);
  const GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  const isGroupLink = GroupLinkRegex.exec(BloomBot.budy);
  const PresentGroupLink = new RegExp(
    `chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  const isCurrentGroupLink = PresentGroupLink.test(BloomBot.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await BloomBot.groupParticipantsUpdate(
      mags.chat,
      [BloomBot.sender],
      "remove"
    ).catch((error) => BloomBot.handlerror(BloomBot, mags, error));
    await mags.reply(
      `*😥Apologies:* _${BloomBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await BloomBot.sendMessage(mags.chat, {
      delete: {
        remoteJid: mags.chat,
        fromMe: false,
        id: BloomBot.quoted.id,
        participant: BloomBot.quoted.sender,
      },
    });
  } else if (
    BloomBot.budy.includes("t.me/") &&
    BloomBot.budy.includes("discord.gg") &&
    BloomBot.budy.includes("discord.com") &&
    BloomBot.budy.includes("/t.me/") &&
    BloomBot.budy.includes("wa.me/") &&
    BloomBot.budy.includes("www.")
  ) {
    await BloomBot.groupParticipantsUpdate(
      mags.chat,
      [BloomBot.sender],
      "remove"
    ).catch((error) => BloomBot.handlerror(BloomBot, mags, error));
    await mags.reply(
      `*😥Apologies:* _${BloomBot.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await BloomBot.sendMessage(mags.chat, {
      delete: {
        remoteJid: mags.chat,
        fromMe: false,
        id: BloomBot.quoted.id,
        participant: BloomBot.quoted.sender,
      },
    });
  } else {
  }
};
