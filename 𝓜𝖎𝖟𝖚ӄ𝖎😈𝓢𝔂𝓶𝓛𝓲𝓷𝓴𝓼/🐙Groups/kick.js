// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const anime = require(`anime-actions`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
module.exports = {
  name: `kick`,
  description: `Use this command to kick people from a group by tagging them  *${ᴋᴇɪ}kick @<person-to-kick>*  or replying to them  *${ᴋᴇɪ}kick*`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}kick <tag> or <reply to person's text>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_𝐌𝐢𝐳𝐮𝐤𝐢™_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_𝐌𝐢𝐳𝐮𝐤𝐢™_

•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
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
      // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        let content = fs.readFileSync(_𝔏𝔞𝔟_.MINAN);
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
          contentText: `@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
          footerText: `(c)𝐌𝐢𝐳𝐮𝐤𝐢`,
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
              contextInfo: { mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
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
              mimetype: Mimetype.png || Mimetype.jpeg,
              caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ need ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ᴀᴅᴍɪɴ ꜰɪʀꜱᴛ*`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `command only applicable in a group chat.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      let owner = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId.split(`-`)[0];
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        let PersonToRemove =
          chat.message.extendedTextMessage.contextInfo.participant;
        if (PersonToRemove === owner + `@s.whatsapp.net`) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (PersonToRemove === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        var isMember = async (chatId, groupMembers) => {
          var isMember = false;
          if (!(chatId === undefined)) {
            for (const index in groupMembers) {
              if (chatId == groupMembers[index].jid.split(`@`)[0]) {
                isMember = true;
              }
            }
            return isMember;
          } else {
            return isMember;
          }
        };
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (!isMember) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*ᴘᴇʀꜱᴏɴ ɪꜱ ɴᴏᴛ ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        try {
          if (PersonToRemove) {
            if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
              var Receiver =
                chat.message.extendedTextMessage.contextInfo.participant;
              var personreceived = Receiver.substring(0, Receiver.length - 15);

              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    url: await anime.kick(),
                  },
                  MessageType.image,
                  {
                    quoted: chat,
                    mimetype: Mimetype.jpeg || Mimetype.png,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`,
                  }
                )
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));

              await ӄʀǟӄɨռʐ
                .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [PersonToRemove])
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));

              return;
              // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
            } else {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    url: await anime.kick(),
                  },
                  MessageType.image,
                  {
                    quoted: chat,
                    mimetype: Mimetype.jpeg || Mimetype.png,
                    contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                    caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`,
                  }
                )
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));

              await ӄʀǟӄɨռʐ
                .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [PersonToRemove])
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));

              return;
            }
          }
        } catch (ℓαвєяяσя) {
          throw ℓαвєяяσя;
        }
        return;
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (!arg[0]) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (arg[0][0] == `@`) {
        const number = arg[0].substring(1);
        if (isNaN(number)) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (number + `@s.whatsapp.net` === 𝓜𝖎𝖟𝖚ӄ𝖎.owner) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (!(number === owner)) {
          if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && 𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
            var Receiver =
              chat.message.extendedTextMessage.contextInfo.participant;
            var personreceived = Receiver.substring(0, Receiver.length - 15);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                {
                  url: await anime.kick(),
                },
                MessageType.image,
                {
                  quoted: chat,
                  mimetype: Mimetype.jpeg || Mimetype.png,
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, Receiver] },
                  caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`,
                }
              )
              .then(
                await ӄʀǟӄɨռʐ.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
                  number + `@s.whatsapp.net`,
                ])
              )
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            return;
            // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          } else {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                {
                  url: await anime.kick(),
                },
                MessageType.image,
                {
                  quoted: chat,
                  mimetype: Mimetype.jpeg || Mimetype.png,
                  contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                  caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`,
                }
              )
              .then(
                await ӄʀǟӄɨռʐ.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
                  number + `@s.whatsapp.net`,
                ])
              )
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            return;
          }
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        } else {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*` + owner + ` ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
          return;
        }
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      await ӄʀǟӄɨռʐ
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
          MessageType.text,
          { quoted: chat }
        )
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
