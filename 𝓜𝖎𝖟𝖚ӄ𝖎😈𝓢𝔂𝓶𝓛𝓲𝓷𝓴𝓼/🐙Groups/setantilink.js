// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const PostDataBase = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/postDb`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
            `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
            `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isDEV) {
        if (arg.length == 0) {
          var enabled = await PostDataBase.checkSettings(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `antilink`
          );
          var Msg = await PostDataBase.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          try {
            if (enabled === false || enabled === undefined) {
              ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 
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
              // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
            } else if (enabled === `OFF`) {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
            // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        } else {
          if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
            switched = `OFF`;
            await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
            switched = `ON`;
            await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
            ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          if (arg[0] === `delete`) {
            var Msg = await PostDataBase.deleteMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `setantilink`
            );
            if (Msg === false || Msg === undefined) {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
            // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
            // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          } else {
            await PostDataBase.deleteMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
            await PostDataBase.setAntilink(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

•──────[ Dev Bypass Command Registered  ]──────• 

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
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
              mimetype: Mimetype.png || Mimetype.jpeg,
              caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

This is not a group`,
          MessageType.text,
          { quoted: chat }
        );
        return;
      }
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      if (arg.length == 0) {
        var enabled = await PostDataBase.checkSettings(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `antilink`
        );
        var Msg = await PostDataBase.getMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        try {
          if (enabled === false || enabled === undefined) {
            ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
            // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          } else if (enabled === `OFF`) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
      } else {
        if (arg[0] === `OFF` || arg[0] === `off` || arg[0] === `Off`) {
          switched = `OFF`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (arg[0] === `ON` || arg[0] === `on` || arg[0] === `On`) {
          switched = `ON`;
          await PostDataBase.changeSettings(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, switched);
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        if (arg[0] === `delete`) {
          var Msg = await PostDataBase.deleteMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `setantilink`
          );
          if (Msg === false || Msg === undefined) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
        // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
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
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
          // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
        } else {
          await PostDataBase.deleteMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `setantilink`);
          await PostDataBase.setAntilink(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, text);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

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
      // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
