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
  await BloomBot.imagebutton(
    BloomBot,
    Sockey,
    `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*🤖Hello, I am BloomBot User-bot🤖*
• ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *📼${currFile.toUpperCase()}📼* 』
│║• ${BloomBot.prefix}carbon
│║• ${BloomBot.prefix}ship
│║• ${BloomBot.prefix}sticker
│║• ${BloomBot.prefix}tinyurl
│║• ${BloomBot.prefix}tourl
│║• ${BloomBot.prefix}tts
┕╚═══════⋑`,
    BloomBot.display
  );
};
