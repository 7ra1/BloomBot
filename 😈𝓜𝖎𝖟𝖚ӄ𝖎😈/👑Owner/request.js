`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `request`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}request <your group link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `🐙============================================================================================================================<⚡>`;
      if (arg.length === 0) {
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
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://chat.whatsapp.com/`)) {
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
      let content = fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        content,
        MessageType.video,
        {
          mimetype: `video/gif`,
        }
      );
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            contentText: `•@${ꜱᴇɴᴅᴇʀeceived},
*Thank you for Requesting to add 爪𝖎𝖟𝖚ӄ𝖎™ in your group!*
Go Check Your Group Now!`,
            footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      `🐙============================================================================================================================<⚡>`;
      let members = [];
      for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
        members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
      }
      await ӄʀǟӄɨռʐ.sendMessage(
        "120363039360979234@g.us",
        fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mentionedJid: members,
          mimetype: "video/gif",
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${arg.join(" ")}`,
        }
      );
      `🐙============================================================================================================================<⚡>`;
      await ӄʀǟӄɨռʐ.sendMessage(
        "918250889325@s.whatsapp.net",
        fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${arg.join(" ")}`,
        }
      );
      `🐙============================================================================================================================<⚡>`;
      await ӄʀǟӄɨռʐ.sendMessage(
        "918436686758@s.whatsapp.net",
        fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${arg.join(" ")}`,
        }
      );
      `🐙============================================================================================================================<⚡>`;
      await ӄʀǟӄɨռʐ.sendMessage(
        "989035024059@s.whatsapp.net",
        fs.readFileSync(`./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
        MessageType.video,
        {
          mimetype: "video/gif",
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

⚡𝐓𝐨𝐩𝐢𝐜: *${FinalName}*
🤩𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${arg.join(" ")}`,
        }
      );
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
