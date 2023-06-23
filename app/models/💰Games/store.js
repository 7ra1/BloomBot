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
    await BloomBot.imagebutton(
      BloomBot,
      Sockey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
┌『 *Games💰Category* 』
│║> ⚔️ *sword:* _1000gold/robbery_
│║> 💻 *laptop:* _4000gold/robbery_
│║> 🔮 *charm:* _6000gold/robbery_
┕╚═══════⋑

┌『 *Badges🍯Category* 』
│║> 🧵 *Basic:* 10 Commands
│║> 🥉 *Bronze:* 20 Commands
│║> 🥈 *Silver:* 40 Commands
│║> 🥇 *Golden:* 60 Commands
│║> 💍 *Platinum:* 80 Commands
│║> 💎 *Diamond:* 100 Commands
┕╚═══════⋑`,
      BloomBot.display
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
