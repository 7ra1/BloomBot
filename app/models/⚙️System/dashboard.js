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
  participants
) => {
  try {
    await BloomBot.sendMessage(chatkey.chat, {
      react: {
        text: "❌",
        key: chatkey.key,
      },
    });
    switch (true) {
      case isAdmin:
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          
*❌Error:* 
> _This Command is not yet ready for public usage!_`
        );
      case !isAdmin:
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
          
*❌Error:* 
> _You are not authorized to use this command!_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
