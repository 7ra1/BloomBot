const Heroku = require(`heroku-client`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var heroku = new Heroku({
  token: _𝔏𝔞𝔟_.HEROKU_API,
});
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `update`,
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      return await ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ,
        },
        MessageType.image,
        {
          quoted: chat,
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
          },
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
Nice Try But Only My *Owner* Can Use *OWNER_ONLY* Commands!`,
        }
      );
      `🐙============================================================================================================================<⚡>`;
    } else {
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.UPT,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
            caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
ʏᴏᴜʀ *🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}* ɪꜱ ɴᴏᴡ ᴜᴘᴅᴀᴛɪɴɢ.ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ꜰᴏʀ 30-60ꜱᴇᴄ`,
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      heroku
        .delete(`/apps/` + _𝔏𝔞𝔟_.HEROKU_BOT_NAME + `/dynos/` + `worker`)
        .then((x) => console.log(x));
    }
  },
};
