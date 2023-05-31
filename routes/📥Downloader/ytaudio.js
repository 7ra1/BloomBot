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
  "yt_audx",
  "yt_audtr",
  "aud_f_yt",
  "yt_audfl",
  "yt_sndtr",
  "ytbaudio",
  "yt_sndbt",
  "yt_sound",
  "yt_music",
  "yt_mp3",
  "musix",
  "yt_play",
  "yt_song",
  "audio",
  "gaana",
  "tune",
  "sound",
  "music",
  "track",
  "aud_trk",
  "musxtrct",
  "sndxtrct",
  "play_mus",
  "song_xtr",
  "yt_xtrct",
  "yt_muxtr",
  "yt_snd_x",
  "play",
  "yt_audio",
  "audio_pl",
  "music_pl",
  "sound_pl",
  "audio_st",
  "sound_st",
  "music_st",
  "yt_audst",
  "yt_sndst",
  "yt_mustm",
  "yt_audpl",
  "yt_sndpl",
  "yt_muspl",
  "aud_clip",
  "snd_clip",
  "mus_clip",
  "yt_audcl",
  "yt_sndcl",
  "yt_muscl",
  "aud_file",
  "snd_file",
  "mus_file",
  "yt_audfl",
  "yt_sndfl",
  "yt_musfl",
  "yt_mp3ex",
  "aud_extr",
  "snd_extr",
  "mus_extr",
  "yt_mp3tr",
  "aud_trck",
  "snd_trck",
  "mus_trck",
  "yt_mp3ex",
  "yt_track",
  "yt_sbtex",
  "yt_auddl",
  "yt_snddl",
  "yt_musdl",
  "aud_dl",
  "snd_dl",
  "mus_dl",
  "gaana_ex",
  "gaana_tr",
  "gaana_mu",
  "gaana_aud",
  "gaana_dl",
];
