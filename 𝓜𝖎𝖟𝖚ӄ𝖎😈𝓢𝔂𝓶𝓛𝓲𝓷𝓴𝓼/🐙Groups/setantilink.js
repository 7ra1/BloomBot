// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const PostDataBase = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/postDb`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
module.exports = {
  name: `setantilink`,
  description: `ʀᴇᴍᴏᴠᴇ ᴀɴʏᴏɴᴇ ɪɴ ɢʀᴏᴜᴘ ᴡʜᴏ ꜱᴇɴᴅꜱ ᴀɴʏ ʟɪɴᴋꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}setantilink* <message>
*${ᴋᴇɪ}setantilink*  <on>
*${ᴋᴇɪ}setantilink*  <off>
*${ᴋᴇɪ}setantilink*  <delete>
Do note, the setantilink option is still enabled after you use the delete option.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // ⚡••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⚡
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        (!𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin || !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO)
      ) {
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
          contentText: `❌ @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},  *You Are Not Allowed!*

_❗In Groups This Command allowed to Admins & Developers!_`,
          footerText: `_𝐌𝐢𝐳𝐮𝐤𝐢™_`,
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
      // ⚡••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••[  𝐌𝐢𝐳𝐮𝐤𝐢™   ]••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••⚡
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
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `_𝐌𝐢𝐳𝐮𝐤𝐢™_

This is not a group`,
          MessageType.text,
          { quoted: chat }
        );
        return;
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      if (arg.length == 0) {
        var enabled = await PostDataBase.checkSettings(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `antilink`
        );
        var Msg = await PostDataBase.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        try {
          if (enabled === false || enabled === undefined) {
            ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_𝐌𝐢𝐳𝐮𝐤𝐢™_

Set an Antilink message first.`,
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
            // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
          } else if (enabled === `OFF`) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink are not enabled!`,
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
          // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink are enabled!`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        } catch (ℓαвєяяσя) {
          throw ℓαвєяяσя;
        }
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
      } else {
        if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
          switched = `OFF`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink messsage has been disabled.`,
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
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
          switched = `ON`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink messsage has been enabled.`,
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
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        if (arg[0] === `delete`) {
          var Msg = await PostDataBase.deleteMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `setantilink`
          );
          if (Msg === false || Msg === undefined) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Set a Antilink message first.`,
                MessageType.text,
                {
                  quoted: chat,
                  contextInfo: {
                    mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                  },
                }
              )
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
            console.log(Msg);
            return;
          }
          // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink messsage deleted.`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          console.log(Msg);
          return;
        }
        // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        text = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
          𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
          ``
        );
        var Msg = await PostDataBase.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
        if (Msg === false || Msg === undefined) {
          await PostDataBase.setAntilink(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink messsage updated and enabled.`,
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
          // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
        } else {
          await PostDataBase.deleteMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
          await PostDataBase.setAntilink(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_𝐌𝐢𝐳𝐮𝐤𝐢™_

@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Antilink messsage updated and enabled.`,
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
      }
      // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
