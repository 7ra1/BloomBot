const Heroku = require("heroku-client");
const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var heroku = new Heroku({
  token: ꜱɪɢɴ.HEROKU_API,
});
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `update`,
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    var Sender = 𝓜𝓮𝓮6.sender;
    var personsending = Sender.substring(0, Sender.length - 15);
    if (!𝓜𝓮𝓮6.fromMe) {
      return await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
            caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*•@${personsending}*,⚠️𝙉𝙞𝙘𝙚 𝙏𝙧𝙮 𝘽𝙪𝙩 𝙊𝙣𝙡𝙮 𝙈𝙮 𝙊𝙬𝙣𝙚𝙧 𝘾𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙖𝙩 𝙘𝙤𝙢𝙢𝙖𝙣𝙙!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    await ʍɛɛℓιєηт
      .sendMessage(
        𝓜𝓮𝓮6.chatId,
        {
          url: ꜱɪɢɴ.UPT,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [𝓜𝓮𝓮6.sender],
          },
          caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*•@${personsending}*,ʏᴏᴜʀ 𝓜𝓮𝓮6 ʙᴏᴛ ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ.ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ

⚠️𝗜𝗳 𝗶𝘁 𝘄𝗮𝘀 𝗮 𝗕𝗜𝗚 ⚡𝐌𝐞𝐞𝟔™ 𝘂𝗽𝗱𝗮𝘁𝗲,
𝘁𝗵𝗲𝗻 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    heroku
      .delete("/apps/" + ꜱɪɢɴ.HEROKU_BOT_NAME + "/dynos/" + "worker")
      .then((x) => console.log(x));
  },
};
