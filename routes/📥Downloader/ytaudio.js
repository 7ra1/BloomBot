//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var ytdl = require("ytdl-secktor");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _No query provided!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} song-name_`
      );
    } else
      BloomBot.magfetch(
        BloomBot,
        "https://magneum.vercel.app/api/youtube_sr?q=" + BloomBot.args.join(" ")
      ).then(async (response) => {
        var mgdata = response.data;
        console.log(mgdata);
        await BloomBot.sendMessage(
          mags.chat,
          {
            image: { url: mgdata.youtube_search[0].HQ_IMAGE },
            caption: `*🌻Here, ${fpth} for ${BloomBot.pushname}:*
*🍻Title:* ${mgdata.youtube_search[0].TITLE}
*🙈Views:* ${mgdata.youtube_search[0].VIEWS}
*🔗Link:* ${mgdata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mgdata.youtube_search[0].DURATION_FULL}
*📜Description:* ${mgdata.youtube_search[0].DESCRIPTION}`,
            footer:
              "*BloomBot™ by Magneum™*\n*💻HomePage:* https://bit.ly/magneum",
            buttons: [
              {
                buttonId: `${BloomBot.prefix}Dashboard`,
                buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Help`,
                buttonText: { displayText: `${BloomBot.prefix}Help` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [mags.sender],
          },
          {
            contextInfo: { mentionedJid: [mags.sender] },
            quoted: mags,
          }
        );

        var stream = ytdl(mgdata.youtube_search[0].LINK, {
          filter: (info) =>
            info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(BloomBot.fs.createWriteStream(`./${mgdata.uuid}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        await BloomBot.sendMessage(
          mags.chat,
          {
            audio: BloomBot.fs.readFileSync(`./${mgdata.uuid}`),
            mimetype: "audio/mpeg",
            fileName: mgdata.youtube_search[0].TITLE + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: mgdata.youtube_search[0].TITLE,
                body: "ⒸBloomBot by Magneum™",
                renderLargerThumbnail: true,
                thumbnailUrl: mgdata.youtube_search[0].THUMB,
                mediaUrl: mgdata.youtube_search[0].LINK,
                mediaType: 1,
                thumbnail: await BloomBot.getBuffer(
                  mgdata.youtube_search[0].HQ_IMAGE
                ),
                sourceUrl: "https://bit.ly/magneum",
              },
            },
          },
          { quoted: mags }
        ).then(BloomBot.fs.unlinkSync(`./${mgdata.uuid}`));
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [
  "yt_audio_extract",
  "yt_audio_track",
  "audio_from_yt",
  "yt_audio_file",
  "yt_soundtrack",
  "youtube_audio",
  "yt_soundbite",
  "yt_sound",
  "yt_music",
  "yt_mp3",
  "music",
  "play",
  "song",
  "audio",
  "gaana",
  "tune",
  "sound",
  "track",
  "audio_track",
  "music_extract",
  "sound_extract",
  "play_music",
  "song_extract",
  "yt_extract",
  "yt_music_extract",
  "yt_sound_extract",
  "yt_audio",
  "audio_player",
  "music_player",
  "sound_player",
  "audio_stream",
  "sound_stream",
  "music_stream",
  "yt_audio_stream",
  "yt_sound_stream",
  "yt_music_stream",
  "yt_audio_play",
  "yt_sound_play",
  "yt_music_play",
  "audio_clip",
  "sound_clip",
  "music_clip",
  "yt_audio_clip",
  "yt_sound_clip",
  "yt_music_clip",
  "audio_file",
  "sound_file",
  "music_file",
  "yt_audio_file",
  "yt_sound_file",
  "yt_music_file",
  "yt_mp3_extract",
  "audio_extract",
  "sound_extract",
  "music_extract",
  "yt_mp3_track",
  "audio_track",
  "sound_track",
  "music_track",
  "yt_mp3_extract",
  "yt_track",
  "yt_soundbite_extract",
  "yt_audio_download",
  "yt_sound_download",
  "yt_music_download",
  "audio_download",
  "sound_download",
  "music_download",
  "gaana_extract",
  "gaana_track",
  "gaana_music",
  "gaana_audio",
  "gaana_download",
];
