`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const speed = require(`performance-now`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
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
  name: `new`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      let members = [];
      for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
        members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
      }
      `🐙============================================================================================================================<⚡>`;
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO
      ) {
        let content = await fs.readFileSync(_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          {
            mimetype: Mimetype.png,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `@${ꜱᴇɴᴅᴇʀeceived}, ❌ You Are Not Allowed!`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            buttonMessage,
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
      timestampe = speed();
      latensie = speed() - timestampe;
      `🐙============================================================================================================================<⚡>`;
      𝓜𝓮𝓮s = await ӄʀǟӄɨռʐ.chats.all();
      for (let _ of 𝓜𝓮𝓮s) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            _.jid,
            {
              url: `./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`,
            },
            MessageType.video,
            {
              quoted: chat,
              mimetype: "video/gif",
              contextInfo: {
                mentionedJid: members,
                forwardingScore: 999,
                isForwarded: true,
              },
              sendEphemeral: true,
              caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 *EVERYONE!,*
_ʏᴏᴜʀ ᴀꜱꜱɪꜱꜱᴛᴀɴᴛ ꜰᴏʀ ᴍᴀᴋɪɴɢ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ ᴀ ʙᴇᴛᴛᴇʀ ᴀᴅᴠᴀɴᴄᴇ ᴀᴘᴘ!_

┌────⭓ 𝐍𝐞𝐰 𝐏𝐮𝐛𝐥𝐢𝐜-𝐁𝐞𝐭𝐚 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬
│🍹 *${ᴋᴇɪ}bugreport* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}getdesc* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}getdp* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}play* _(ɴᴇᴡ)_
│🍹 *${ᴋᴇɪ}google* _(ᴜᴘᴅᴀᴛᴇᴅ)_
│🍹 *${ᴋᴇɪ}ytaudio* _(ᴜᴘᴅᴀᴛᴇᴅ)_
│🍹 *${ᴋᴇɪ}ytvideo* _(ᴜᴘᴅᴀᴛᴇᴅ)_
└────────⭓

┌────⭓ 
│🍍 *New GIF for Mizuki* _(ɢɪꜰ)_
│🍍 *New Welcome UI* _(ʙʀᴀɴᴅ)_
│🍍 *New Help UI* _(ʙʀᴀɴᴅ)_
└────────⭓

🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
*☣️ 𝕷𝖎𝖈𝖊𝖓𝖘𝖊*
Apache License Version 2.0, January 2004 http://www.apache.org/licenses
—••÷[🎮ᴍɪᴢᴜᴋɪ]÷••— 
𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵has been licensed under Apache License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
