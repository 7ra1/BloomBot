require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    const wall = new BloomBot.AnimeWallpaper();
    const wallpaper = await wall.getAnimeWall4({
      title: BloomBot.args.join(" "),
      type: "sfw",
      page: [1, 2, 3, 4],
    });
    if (!wallpaper) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> Couldn't find any results on ${BloomBot.args.join(" ")}_`,
      );
    }

    await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}`,
      wallpaper[Math.floor(Math.random() * wallpaper.length)].image,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
