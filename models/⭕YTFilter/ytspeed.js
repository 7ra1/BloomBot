//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var path = require("path");
var fileName = path.basename(__filename);
var functionName = fileName.slice(0, -3).toLowerCase();

module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    var query = whatsbot.args.join(" ");
    if (
      !query ||
      (query.includes("youtube") && !whatsbot.TubeRegex.test(query))
    ) {
      await whatsbot.sendMessage(whatschat.chat, {
        react: { text: "❌", key: whatschat.key },
      });
      return whatschat.reply(
        `*😥 Apologies:* ${whatsbot.pushname || whatsbot.Tname}
*❌ Error* 
> _No query provided!_

*⚡ Usage* 
> _${whatsbot.prefix}${functionName} song/link_`
      );
    }
    var response = await whatsbot.magfetch(
      whatsbot,
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    console.log(response.response);
    var searchData = response.data.youtube_search[0];
    var musicResponse = await whatsbot.magfetch(
      whatsbot,
      `https://magneum.vercel.app/api/youtube_dl?q=${searchData.TITLE}&quality=music`
    );
    var musicData = musicResponse.data[0];
    var audioFilename = `${whatsbot.between(3000, 4000)}${musicData.YT_Id}.mp3`;
    await whatsbot.exec(
      `${whatsbot.pathFFmpeg} -i ${musicData.quick_dl} -af 'bass=g=10,dynaudnorm=f=150' ${audioFilename}`
    );
    var audioFile = whatsbot.fs.readFileSync(`./${audioFilename}`);
    var thumbnail = await whatsbot.getBuffer(searchData.HQ_IMAGE);
    var mediaUrl = searchData.LINK || "Not available";
    var authorName = searchData.AUTHOR_NAME || "Not available";
    var description = searchData.DESCRIPTION || "No description available";
    var message = `
*🔖 Here's the information for ${functionName} requested by ${
      whatsbot.pushname || whatsbot.Tname
    }:*
*🎵 Title:* ${searchData.TITLE}
*👁️ Views:* ${searchData.VIEWS}  
*⏱️ Duration:* ${searchData.DURATION_FULL}
*🔗 Link:* ${mediaUrl}
*✍️ Author:* ${authorName}

*📜 Description:*
${description}`;
    await whatsbot.sendMessage(whatschat.chat, {
      text: message,
      options: {
        contextInfo: {
          externalAdReply: {
            title: searchData.TITLE,
            body: "This result is powered by magneum's YT-Filter.",
            renderLargerThumbnail: true,
            thumbnailUrl: searchData.HQ_IMAGE,
            mediaUrl,
            mediaType: 1,
            thumbnail,
            sourceUrl: "https://bit.ly/magneum",
          },
        },
      },
    });
    await whatsbot.sendMessage(whatschat.chat, {
      audio: audioFile,
      mimetype: "audio/mpeg",
      fileName: `${searchData.TITLE}.mp3`,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: searchData.TITLE,
          body: "This result is powered by magneum's YT-Filter.",
          renderLargerThumbnail: true,
          thumbnailUrl: searchData.HQ_IMAGE,
          mediaUrl,
          mediaType: 1,
          thumbnail,
          sourceUrl: "https://bit.ly/magneum",
        },
      },
    });
    whatsbot.fs.unlinkSync(`./${audioFilename}`);
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
