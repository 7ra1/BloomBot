const Heroku = require("heroku-client");
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var heroku = new Heroku({
  token: ꜱɪɢɴ.HEROKU_API
});
module.exports = {
  name: `update`,
  commandType: "Mee6💻System",
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    var str = ᴍᴇᴇ6.sender;
    var newString = str.substring(0, str.length - 15);
    if (!ᴍᴇᴇ6.fromMe) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [ᴍᴇᴇ6.sender]
            },
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 𝗠𝗼𝘀𝘁 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

*❗Dҽαɾ @${newString},*
⚠️hahaha Nice Try! Only My Owner Can use that command!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } else {
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.UPT,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [ᴍᴇᴇ6.sender]
            },
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 𝗠𝗼𝘀𝘁 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

*❗Dҽαɾ @${newString},*
❗𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍❗
ʏᴏᴜʀ ᴍᴇᴇ6 ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ...
ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐞𝐞𝟔™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      heroku
        .delete("/apps/" + ꜱɪɢɴ.HEROKU_BOT_NAME + "/dynos/" + "worker")
        .then((x) => console.log(x));
    }
  },
};