//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `sticker`,
  description: `command to convert image to sticker`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}sticker (gif/image/video) _<tag> or <reply>_`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱 = require(`simple-git`)();
      await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.fetch();
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓 = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.substring(0, 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.length - 15);
      var 𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜 = await 𝓜𝖎𝖟𝖚ӄ𝖎𝔊𝔦𝔱.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝙵𝚎𝚝𝚌𝚑𝙼𝚒𝚣𝚞𝚔𝚒𝙽𝚎𝚜𝚜.total != 0) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      } else {
        const convertToSticker = async (imageId, replyChat) => {
          const filePath = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .downloadAndSaveMediaMessage(
              replyChat,
              `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/ct-` + imageId
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          const stickerPath = `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/st-` + imageId + `.webp`;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.type === `image` || 𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
            ffmpeg(filePath)
              .outputOptions([`-y`, `-vcodec libwebp`])
              .videoFilters(
                `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .save(stickerPath)
              .on(`end`, async () => {
                await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    fs.readFileSync(stickerPath),
                    MessageType.sticker,
                    { quoted: chat }
                  )
                  .catch((ℓαвєяяσя) => {
                    ℓιєηт.catch((ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                  });
                fs.unlink(filePath, (ℓαвєяяσя) => {
                  if (ℓαвєяяσя) {
                    console.log(ℓαвєяяσя);
                  } else {
                    console.log(`Deleted!`);
                  }
                });
                fs.unlink(stickerPath, (ℓαвєяяσя) => {
                  if (ℓαвєяяσя) {
                    console.log(ℓαвєяяσя);
                  } else {
                    console.log(`Deleted!`);
                  }
                });
              })
              .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
                ℓιєηт.catch((ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
              });
            return;
          }
          ffmpeg(filePath)
            .duration(8)
            .outputOptions([
              `-y`,
              `-vcodec libwebp`,
              `-lossless 1`,
              `-qscale 1`,
              `-preset default`,
              `-loop 0`,
              `-an`,
              `-vsync 0`,
              `-s 600x600`,
            ])
            .videoFilters(
              `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker,
                  { quoted: chat }
                )
                .catch((ℓαвєяяσя) => {
                  ℓιєηт.catch((ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
                });
              fs.unlink(filePath, (ℓαвєяяσя) => {
                if (ℓαвєяяσя) {
                  console.log(ℓαвєяяσя);
                } else {
                  console.log(`Deleted!`);
                }
              });
              fs.unlink(stickerPath, (ℓαвєяяσя) => {
                if (ℓαвєяяσя) {
                  console.log(ℓαвєяяσя);
                } else {
                  console.log(`Deleted!`);
                }
              });
            })
            .on(`ℓαвєяяσя`, async (ℓαвєяяσя) => {
              return ℓιєηт.catch((ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
        };

        if (𝓜𝖎𝖟𝖚ӄ𝖎.isImage || 𝓜𝖎𝖟𝖚ӄ𝖎.isGIF || 𝓜𝖎𝖟𝖚ӄ𝖎.isVideo) {
          var replyChatObject = {
            message: chat.message,
          };
          var imageId = chat.key.id;
          convertToSticker(imageId, replyChatObject);
        } else if (
          𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage ||
          𝓜𝖎𝖟𝖚ӄ𝖎.isReplyGIF ||
          𝓜𝖎𝖟𝖚ӄ𝖎.isReplyVideo
        ) {
          var replyChatObject = {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          };
          var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
          convertToSticker(imageId, replyChatObject);
        } else {
          var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
          𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
          const nahargs = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/nahargs`);
          return nahargs.nahargs(
            𝓚𝓻𝓪𝓴𝓲𝓷𝔃,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓,
            𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          );
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
