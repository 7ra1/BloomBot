//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { yta } = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/youmaker`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
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
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `ytaudio`,
  description: `ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ ᴀᴜᴅɪᴏ ᴜɴᴅᴇʀ 100ᴍʙ ꜱɪᴢᴇ.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}ytaudio <link>`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
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
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      } else {
        if (arg.length === 0) {
          var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
          𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
          const nahargs = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/nahargs`);
          return nahargs
            .nahargs(
              𝓚𝓻𝓪𝓴𝓲𝓷𝔃,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀᴄᴏɴꜰ,
              𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
              𝓜𝓮𝓮ʍօʀɛ
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        const FetchedLink1 = await yts(arg.join(` `));
        const FetchedLink = await yts(arg.join(` `));
        const YouFetchers = async (
          filename,
          to,
          url,
          text = ``,
          mention = []
        ) => {
          if (mention.length > 0) {
            text = normalizeMention(to, text, mention);
          }
          var Download_Video = function (uri, filename, callback) {
            request.head(uri, function (ℓαвєяяσя, gotResp, body) {
              mime = gotResp.headers[`content-type`];
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on(`close`, callback);
            });
          };
          Download_Video(url, filename, async function () {
            let media = fs.readFileSync(filename);
            let type = mime.split(`/`)[0] + `Message`;
            if (mime === `image/gif`) {
              type = MessageType.video;
              mime = Mimetype.gif;
            }
            if (mime.split(`/`)[0] === `audio`) {
              mime = Mimetype.mp4Audio;
            }
            await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
              .sendMessage(to, media, type, {
                quoted: chat,
                mimetype: mime,
                caption: text,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              })
              .then(() => {
                fs.unlinkSync(filename);
              })
              .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
          });
        };
        const { id } = getVideoId(arg[0]);
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        const Regex = {
          VideoID: /^[a-zA-Z0-9-_]{11}$/,
          VideoURL:
            /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
          PlaylistID: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
          PlaylistURL:
            /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
          SCTrack:
            /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
          SCPlaylist:
            /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
          Spotify: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
        };
        if (!Regex.VideoURL.test(arg[0])) {
          return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.ARC,
              },
              MessageType.image,
              {
                quoted: chat,
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like ${arg[0]} is not YouTube Link or not YouTube Single Video Link!*

*Usage Example*
${ᴋᴇɪ}ytaudio <youtubelink>

*NOTE:*
You Can Get URL by using ${ᴋᴇɪ}yts <song-name>`,
              }
            )
            .catch((ℓαвєяяσя) => {
              ℓιєηт.catch((ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
            });
        }
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
          const videos1 = FetchedLink1.videos.slice(0, 1);
          const filename = `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${now}_ytaudiosprivate_${nowbyk.toString()}${ꜱᴇɴᴅᴇʀɪᴅ}${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}`;
          yta(arg[0]).then(async (gotResp) => {
            const { dl_link, thumb, title, filesize } = gotResp;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((alpha) => {
                if (Number(filesize) >= 100000) {
                  return 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                    .sendMessage(
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
                        mimetype: Mimetype.png,
                        content: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
                      }
                    )
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                } else {
                  videos1.forEach(function (youfound) {
                    Fetched = `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`;
                  });
                  //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
                  𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                    .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Fetched, MessageType.text, {
                      quoted: chat,
                      contextInfo: {
                        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                      },
                    })
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                  //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
                  videos1.forEach(function (youfound) {
                    Fetched = `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`;
                    YouFetchers(filename, ꜱᴇɴᴅᴇʀɪᴅ, dl_link, Fetched);
                  });
                  //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
                }
              });
          });
        }
        //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
          const videos = FetchedLink.videos.slice(0, 1);
          const filename = `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/${now}ytaudiosgroups_${nowbyk.toString()}${ꜱᴇɴᴅᴇʀɪᴅ}${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}`;
          yta(arg[0]).then(async (gotResp) => {
            const { dl_link, thumb, title, filesize } = gotResp;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((alpha) => {
                if (Number(filesize) >= 100000) {
                  return 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                    .sendMessage(
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
                        mimetype: Mimetype.png,
                        content: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗼𝗼𝘀𝗲 𝗦𝗺𝗮𝗹𝗹𝗲𝗿 𝗙𝗶𝗹𝗲. 𝗠𝗮𝘅 𝗟𝗶𝗺𝗶𝘁 (𝟭𝟬𝟬𝗺𝗯)!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`,
                      }
                    )
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                } else {
                  videos.forEach(function (youfound) {
                    Fetched = `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`;
                  });
                  //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
                  𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                    .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Fetched, MessageType.text, {
                      quoted: chat,
                      contextInfo: {
                        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                      },
                    })
                    .catch((ℓαвєяяσя) =>
                      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎)
                    );
                  //⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;

                  videos.forEach(function (youfound) {
                    Fetched = `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⭕𝗔𝘂𝗱𝗶𝗼
•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, 𝗣𝗹𝗲𝗮𝘀𝗲 𝗖𝗵𝗲𝗰𝗸 𝗬𝗼𝘂𝗿 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝘆 𝗼𝗳 𝗔𝘂𝗱𝗶𝗼!

🍻𝐓𝐢𝐭𝐥𝐞⤞ ${title}
🙈𝐕𝐢𝐞𝐰𝐬⤞ ${youfound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧⤞ ${youfound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫⤞ ${youfound.author.name}
🔗𝐋𝐢𝐧𝐤⤞ ${youfound.url}
📥𝐖𝐞𝐛-𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝⤞ https://www.youtubepp.com/watch?v=${id}`;
                    YouFetchers(filename, ꜱᴇɴᴅᴇʀɪᴅ, dl_link, Fetched);
                  });
                }
              });
          });
        }
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
