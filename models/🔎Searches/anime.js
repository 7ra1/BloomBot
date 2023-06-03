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
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} manga-name_`
      );
    }

    BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/anime?q=${fpth}`
    ).then(async (response) => {
      const mgdata = response.data;
      BloomBot.logger.info(mgdata);
      BloomBot.imagebutton(
        BloomBot,
        mags,
        `🌻 *Here's some information about ${
          BloomBot.pushname || BloomBot.tagname
        }:*

*🔍 MAL Id:* ${mgdata.meta.id_mal}
*🎬 Title:* ${mgdata.meta.title}
*🌐 English Title:* ${mgdata.meta.en_title}
*🎌 Japanese Title:* ${mgdata.meta.jp_title}
*📷 Image:* ${mgdata.meta.image}
*📅 Premiered:* ${mgdata.meta.premiered}
*🌐 Webpage:* ${mgdata.meta.webpage}
*📺 Broadcast:* ${mgdata.meta.broadcast}
*🎭 Genres:* ${mgdata.meta.genres}
*🔖 Type:* ${mgdata.meta.type}
*📺 Episodes:* ${mgdata.meta.episodes}
*⭐ Rating:* ${mgdata.meta.rating}
*📅 Aired:* ${mgdata.meta.aired}
*📈 Score:* ${mgdata.meta.score}
*❤️ Favorites:* ${mgdata.meta.favorites}
*🔢 Rank:* ${mgdata.meta.rank}
*⏳ Duration:* ${mgdata.meta.duration}
*🏢 Studios:* ${mgdata.meta.studios}
*🎬 Producers:* ${mgdata.meta.producers}
*🔥 Popularity:* ${mgdata.meta.popularity}
*👥 Total Members:* ${mgdata.meta.members}
*⚖️ Score Status:* ${mgdata.meta.scores}
*🎬 Source:* ${mgdata.meta.source}
*📚 Synonyms:* ${mgdata.meta.synonyms}
*📖 Synopsis:* ${mgdata.meta.synopsis}
*👥 Characters:* ${mgdata.meta.characters}
*👥 Staff:* ${mgdata.meta.staffs}`,
        mgdata.meta.image
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
