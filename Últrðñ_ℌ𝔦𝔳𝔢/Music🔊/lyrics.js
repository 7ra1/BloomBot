const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const got = require(`got`);
module.exports = {
  name: `lyrics`,
  description: `Module to find lyrics of song`,
  ƈʏɮօʀɢʍօʀɛ: `Use this module to find the lyrics of a song by using  *${config.ULTRONIX}lyrics*  command.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      var song = ``;
      if (Últrðñ.isReply) {
        song = Últrðñ.replyMessage;
      } else if (arguments.length == 0) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Please enter the song name.`,
          MessageType.text
        );
        return;
      } else {
        song = arguments.join(` `);
      }
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `Searching. Please wait....`,
        MessageType.text
      );
      let API = await got(`https://some-random-api.ml/lyrics/?title=${song}`);
      let APIData = JSON.parse(API.body);
      let caption =
        `*Title :* ` +
        APIData.title +
        `\n*Author :* ` +
        APIData.author +
        `\n*Lyrics :*\n` +
        APIData.lyrics;

      try {
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          { url: APIData.thumbnail.genius },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: caption,
          }
        );
      } catch (cᴇʀʀᴏʀ) {
        ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, caption, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
SONG NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
        MessageType.text
      );
    }
  },
};
