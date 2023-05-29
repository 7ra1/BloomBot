//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var ytdl = require("ytdl-secktor");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  Voxbot,
  Voxchat,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!Voxbot.args) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} song-name_`
      );
    }
    Voxbot.magfetch(
      Voxbot,
      "https://magneum.vercel.app/api/youtube_sr?q=" + Voxbot.args.join(" ")
    ).then(async (response) => {
      var fetchedata = response.data;
      console.log(fetchedata);

      return await Voxbot.sendMessage(
        Voxchat.chat,
        {
          image: { url: fetchedata.youtube_search[0].HQ_IMAGE },
          caption: `*🔖Here, ${finalname} for ${Voxbot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
          footer: "*Voxbot™ by magneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${Voxbot.prefix}Dashboard`,
              buttonText: { displayText: `${Voxbot.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${Voxbot.prefix}Help`,
              buttonText: { displayText: `${Voxbot.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [Voxchat.sender],
        },
        {
          contextInfo: { mentionedJid: [Voxchat.sender] },
          quoted: Voxchat,
        }
      );

      await Voxbot.imagebutton(
        Voxbot,
        Voxchat,
        `*🔖Here, ${finalname} for ${Voxbot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
        fetchedata.youtube_search[0].HQ_IMAGE
      );
      return;
      var stream = ytdl(fetchedata.youtube_search[0].LINK, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      }).pipe(Voxbot.fs.createWriteStream(`./${fetchedata.uuid}`));
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
      await Voxbot.sendMessage(
        Voxchat.chat,
        {
          audio: Voxbot.fs.readFileSync(`./${fetchedata.uuid}`),
          mimetype: "audio/mpeg",
          fileName: fetchedata.youtube_search[0].TITLE + ".mp3",
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: fetchedata.youtube_search[0].TITLE,
              body: "⭕made by Voxbot",
              renderLargerThumbnail: true,
              thumbnailUrl: fetchedata.youtube_search[0].THUMB,
              mediaUrl: fetchedata.youtube_search[0].LINK,
              mediaType: 1,
              thumbnail: await Voxbot.getBuffer(
                fetchedata.youtube_search[0].HQ_IMAGE
              ),
              sourceUrl: "https://bit.ly/magneum",
            },
          },
        },
        { quoted: Voxchat }
      ).then(Voxbot.fs.unlinkSync(`./${fetchedata.uuid}`));
    });
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat, error);
  }
};
