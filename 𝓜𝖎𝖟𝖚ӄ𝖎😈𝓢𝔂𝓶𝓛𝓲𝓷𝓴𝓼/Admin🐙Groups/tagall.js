// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
module.exports = {
  name: `tagall`,
  description: `command to tag evryone in a group.`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this command to tag everyone in the group by either replying to a message or simply using  *${ᴋᴇɪ}tagall*  command.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}tagall <text> or <no-text>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `*© Mïzµkï* _${vers.vers}_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*© Mïzµkï* _${vers.vers}_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: _𝔏𝔞𝔟_.ERROR,
            },
            MessageType.image,
            {
              quoted: chat,
              mimetype: Mimetype.jpeg,
              caption: `*⚠️ONLY IN GROUPS!*`,
            }
          )
          .catch((ℓαвєяяσя) => {
            ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: _𝔏𝔞𝔟_.ERROR,
            },
            MessageType.image,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
              mimetype: Mimetype.png,
              caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
      let members = [];
      for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
        members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
      }
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*Attention Here Everyone In the Group!*`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                stanzaId: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessageId,
                participant: 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant,
                quotedMessage: {
                  conversation: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage,
                },
                mentionedJid: members,
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      if (arg.length) {
        ӄʀǟӄɨռʐ
          .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arg.join(` `), MessageType.text, {
            uoted: chat,
            contextInfo: {
              mentionedJid: members,
            },
          })
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*Attention Here Everyone In the Group!*`,
          MessageType.text,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: members,
            },
          }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      return;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
