"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  await BloomBot.imagebutton(
    BloomBot,
    mags,
    `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*🤖Hello, I am BloomBot User-bot🤖*
> ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *🦄${fpth.toUpperCase()}🦄* 』
│║⦁ ${BloomBot.prefix}waifu
│║⦁ ${BloomBot.prefix}swaifu
│║⦁ ${BloomBot.prefix}whats
│║⦁ ${BloomBot.prefix}swhats
│║⦁ ${BloomBot.prefix}shinobu
│║⦁ ${BloomBot.prefix}sshinobu
│║⦁ ${BloomBot.prefix}megumin
│║⦁ ${BloomBot.prefix}smegumin
│║⦁ ${BloomBot.prefix}awoo
│║⦁ ${BloomBot.prefix}sawoo
│║⦁ ${BloomBot.prefix}glomp
│║⦁ ${BloomBot.prefix}sglomp
│║⦁ ${BloomBot.prefix}handhold
│║⦁ ${BloomBot.prefix}shandhold
│║⦁
│║⦁ ${BloomBot.prefix}sbully
│║⦁ ${BloomBot.prefix}scuddle
│║⦁ ${BloomBot.prefix}scry
│║⦁ ${BloomBot.prefix}shug
│║⦁ ${BloomBot.prefix}skiss
│║⦁ ${BloomBot.prefix}slick
│║⦁ ${BloomBot.prefix}spat
│║⦁ ${BloomBot.prefix}ssmug
│║⦁ ${BloomBot.prefix}sbonk
│║⦁ ${BloomBot.prefix}syeet
│║⦁ ${BloomBot.prefix}sblush
│║⦁ ${BloomBot.prefix}ssmile
│║⦁ ${BloomBot.prefix}swave
│║⦁ ${BloomBot.prefix}shighfive
│║⦁ ${BloomBot.prefix}snom
│║⦁ ${BloomBot.prefix}sbite
│║⦁ ${BloomBot.prefix}sslap
│║⦁ ${BloomBot.prefix}skill
│║⦁ ${BloomBot.prefix}skick
│║⦁ ${BloomBot.prefix}shappy
│║⦁ ${BloomBot.prefix}swink
│║⦁ ${BloomBot.prefix}spoke
│║⦁ ${BloomBot.prefix}sdance
│║⦁ ${BloomBot.prefix}scringe
┕╚═══════⋑`,
    BloomBot.display
  );
};
