`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const MizuNeko = require(`nekobin`);
const fs = require(`fs`);
`🐙============================================================================================================================<⚡>`;
module.exports = {
  name: `nekobin`,
  description: `Use this module to paste your text to (NEKOBIN).`,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}nekobin* <text>
or reply *${ᴋᴇɪ}nekobin* to any text.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
        var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
        return nahargs
          .nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
      if (arg.length === 0 && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
        const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
        return nahargs
          .nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply && 𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
        const MizuBin = {
          content: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage.replace(
            𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
            ``
          ),
        };
        const filename = ꜱᴇɴᴅᴇʀɪᴅ + "_" + Date.now();
        await fs.writeFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`, MizuBin.content);
        var data = await fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`, "utf8");
        console.log(data.toString());
        MizuNeko.nekobin(data.toString()).then(async (data) => {
          console.log(data);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*
              
•@${ꜱᴇɴᴅᴇʀeceived}, Here Is Your pasted link👇🏽‍
${data.url}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .then(async () => {
              try {
                await fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`);
              } catch (ℓαвєяяσя) {
                console.log(ℓαвєяяσя);
              }
            });
        });
      }
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && 𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
        const MizuBin = {
          content: 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
            𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
            ``
          ),
        };
        const filename = ꜱᴇɴᴅᴇʀɪᴅ + "_" + Date.now();
        await fs.writeFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`, MizuBin.content);
        var data = await fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`, "utf8");
        console.log(data.toString());
        MizuNeko.nekobin(data.toString()).then(async (data) => {
          console.log(data);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived}, Here Is Your pasted link👇🏽‍
${data.url}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .then(async () => {
              try {
                await fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${filename}`);
              } catch (ℓαвєяяσя) {
                console.log(ℓαвєяяσя);
              }
            });
        });
      }
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
