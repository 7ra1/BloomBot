`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { yta } = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const getVideoId = require(`get-video-id`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const request = require("request");
const nowbyk = Date.now() / 10000;
const yts = require(`yt-search`);
const axios = require(`axios`);
const fs = require(`fs`);
const now = Date.now();
let mime = ``;
const ytIdRegex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
`🐙============================================================================================================================<⚡>`;
module.exports = {
  name: `ytaudio`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytaudio <link>`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
    `🐙============================================================================================================================<⚡>`;
    if (arg.length === 0) {
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
      `🐙============================================================================================================================<⚡>`;
    } else if (!ytIdRegex.test(arg[0])) {
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
      `🐙============================================================================================================================<⚡>`;
    } else {
      const FetchedLink = await yts(arg.join(` `));
      const YouFetchers = async (
        Filename,
        to,
        url,
        text = ``,
        mention = []
      ) => {
        if (mention.length > 0) {
          text = normalizeMention(to, text, mention);
        }
        var Download_Video = function (uri, Filename, callback) {
          request.head(uri, function (gotResp) {
            mime = gotResp.headers[`content-type`];
            request(uri)
              .pipe(fs.createWriteStream(Filename))
              .on(`close`, callback);
          });
        };
        Download_Video(url, Filename, async function () {
          let media = fs.readFileSync(Filename);
          let type = mime.split(`/`)[0] + `Message`;
          if (mime === `image/gif`) {
            type = MessageType.video;
            mime = Mimetype.gif;
          }
          if (mime.split(`/`)[0] === `audio`) {
            mime = Mimetype.mp4Audio;
          }
          await ӄʀǟӄɨռʐ
            .sendMessage(to, media, type, {
              quoted: chat,
              mimetype: mime,
              caption: text,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            })
            .then(() => {
              fs.unlinkSync(Filename);
            })
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        });
      };
      const { id } = getVideoId(arg[0]);
      const videos = FetchedLink.videos.slice(0, 1);
      const Filename = `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${now}ytaudios_${nowbyk.toString()}_${ꜱᴇɴᴅᴇʀɪᴅ}`;
      try {
        yta(arg[0]).then(async (gotResp) => {
          const { Dloader, thumb, title, Filesize } = gotResp;
          await axios
            .get(`https://tinyurl.com/api-create.php?url=${Dloader}`)
            .then(async () => {
              if (Number(Filesize) >= 100000) {
                return await ӄʀǟӄɨռʐ.sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  {
                    caption: thumb,
                  },
                  MessageType.image,
                  {
                    quoted: chat,
                    contextInfo: {
                      mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                    },
                    mimetype: Mimetype.png || Mimetype.jpeg,
                    content: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
                  }
                );
              } else {
                await videos.forEach(async function (youfound) {
                  var Fetched = `_𝐌𝐢𝐳𝐮𝐤𝐢™_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀeceived}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`;
                  await YouFetchers(Filename, ꜱᴇɴᴅᴇʀɪᴅ, Dloader, Fetched);
                });
              }
            });
        });
      } catch (ℓαвєяяσя) {
        ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        console.log(ℓαвєяяσя);
      }
    }
  },
};
`🐙============================================================================================================================<⚡>`;
