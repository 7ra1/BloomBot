require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/sfw?q=${currFile.slice(1)}`,
    ).then(async (response) => {
      const mgdata = response.data;
      

      return await BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📚Topic:* ${mgdata.meta.topic}
*❓Query*: ${mgdata.meta.query}`,
        mgdata.meta.url,
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
