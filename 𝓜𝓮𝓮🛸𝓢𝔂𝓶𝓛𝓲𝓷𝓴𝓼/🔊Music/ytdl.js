const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const getVideoId = require("get-video-id");
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const ffmpeg = require(`fluent-ffmpeg`);
const ytdl = require(`ytdl-core`);
const yts = require(`yt-search`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
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

// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `ytdl`,
  description: `Use this command to download audio of your choice either by specifying a YouTube link or the name of the song.`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 𝓜𝓮𝓮git.fetch();
    var Sender = 𝓜𝓮𝓮6.sender;
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.logGroup,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (𝓜𝓮𝓮6.chatId === "120363025343298860@g.us" && !𝓜𝓮𝓮6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      if (arg.length === 0) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give URL!*

*Usage Example*
${ᴋᴇɪ}ytdl <URL>

*NOTE:*
You Can Get URL by using ${ᴋᴇɪ}yts <song-name>`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
          });
      }
      if (!Regex.VideoURL.test(arg[0])) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like ${arg[0]} is not YouTube Link or not YouTube Single Video Link!*

*Usage Example*
${ᴋᴇɪ}ytdl <video-link>

*NOTE:*
You Can Get URL by using ${ᴋᴇɪ}yts <song-name>`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
          });
      }
      // Task starts here
      var Id = ` `;
      if (arg[0].includes(`youtu`)) {
        Id = arg[0];
        try {
          if (arg[0].includes(`watch?v=`)) {
            var songId = arg[0].split(`watch?v=`)[1];
          } else {
            var songId = arg[0].split(`/`)[3];
          }
          await yts({
            videoId: songId,
          });
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        var song = await yts(arg.join(` `));
        song = song.all;
        if (song.length < 1) {
          ʍɛɛℓιєηт
            .sendMessage(
              𝓜𝓮𝓮6.chatId,
              `Could not find the song you entered. Check whether the link or keyword entered is correct.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
          return;
        }
        Id = song[0].url;
      }
      try {
        var stream = ytdl(Id, {
          quality: `highestaudio`,
        });

        const FetchedLink = await yts(arg.join(` `));
        const videos = FetchedLink.videos.slice(0, 1);
        videos.forEach(function (youfound) {
          Fetched = `*⛖𝐘𝐨𝐮𝐫 𝐌𝐮𝐬𝐢𝐜 𝐈𝐬 𝐍𝐨𝐰 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠⛖*
_📥𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘛𝘪𝘮𝘦 𝘥𝘦𝘱𝘦𝘯𝘥𝘴 𝘰𝘯 𝘔𝘶𝘴𝘪𝘤 𝘓𝘦𝘯𝘨𝘵𝘩_

🍻—••÷ 𝐓𝐢𝐭𝐥𝐞 ÷••— 
⪢ ${youfound.title}

🙈—••÷ 𝐕𝐢𝐞𝐰𝐬 ÷••—
⪢ ${youfound.views}

⏰—••÷ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 ÷••—
⪢ ${youfound.timestamp}

✒️—••÷ 𝐀𝐮𝐭𝐡𝐨𝐫 ÷••—
⪢ ${youfound.author.name}

🔗—••÷ 𝐋𝐢𝐧𝐤 ÷••—
⪢ ${youfound.url}

🛸—••÷ 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 ÷••—
⪢ ʏᴏᴜᴛᴜʙᴇ⭕ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ`;
        });
        const { id } = getVideoId(arg.join(` `));
        await ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            {
              url: "http://img.youtube.com/vi/" + id + "/0.jpg",
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: Fetched,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
        ffmpeg(stream)
          .audioBitrate(320)
          .toFormat(`ipod`)
          .saveToFile(`./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/${chat.key.id}.mp3`)
          .on(`end`, async () => {
            await ʍɛɛℓιєηт
              .sendMessage(𝓜𝓮𝓮6.chatId, `Uploading song...`, MessageType.text)
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
              });
            await ʍɛɛℓιєηт
              .sendMessage(
                𝓜𝓮𝓮6.chatId,
                fs.readFileSync(`./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/${chat.key.id}.mp3`),
                MessageType.audio,
                {
                  mimetype: Mimetype.mp4Audio,
                }
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
              });
            fs.unlink(`./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/${chat.key.id}.mp3`, (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log("Deleted!");
              }
            });
          });
      } catch (cᴇʀʀᴏʀ) {
        await ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      }
    }
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
