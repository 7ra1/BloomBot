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
  • _${BloomBot.prefix}${currFile} text_`
        );
    }

    BloomBot.axios({
      method: "get",
      url:
        "https://magneum.vercel.app/api/shorten?q=" + BloomBot.args.join(" "),
      headers: {
        accept: "🚀/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }).then(async (response) => {
      const mgdata = response.data;

      await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
  • ${mgdata.meta.url}`,
        await BloomBot.akaneko.nsfw.ass()
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
