const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `sad`,
  commandType: "Conversation🎙️",
  description: `I know you like anime sad`,
  ᴜʟᴛʀᴏɴʍօʀɛ: `I know you like anime sad`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, args) {
    try {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          url: await anime.sad(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `*☢️ᴜʟᴛʀᴏɴ ⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!*

Genre: Anime-Conversation
NSFW: No`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
