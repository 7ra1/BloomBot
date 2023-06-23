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
  participants
) => {
  try {
    switch (true) {
      case !BloomBot.args.join(" "):
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
• _${BloomBot.prefix}${currFile} user Id_`
        );

      default:
        try {
          fids = await BloomBot.axios.get(
            `api.popcat.xyz/instagram?user=${BloomBot.args.join(" ")}`
          );
          await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname} 
*🀄Username:* ${fids.data.username}
*📃Name:* ${fids.data.full_name}
*🗣Private:* ${fids.data.private}
*✔Verified:* ${fids.data.verified}
*🗻Followers:* ${fids.data.followers}
*🍃Following:* ${fids.data.following}
*🎛 Post:* ${fids.data.posts}
*🧑🏻reels:* ${fids.data.reels}
*📖Bio:* ${fids.data.biography}`,
            fids.data.profile_pic
          );
        } catch {
          await BloomBot.sendMessage(Sockey.chat, {
            react: {
              text: "❌",
              key: Sockey.key,
            },
          });
          return Sockey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Please provide a valid instagram Id!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} user Id_`
          );
        }
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = [];
