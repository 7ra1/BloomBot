//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const ytdl = require("ytdl-secktor");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    if (!ꪜᴏxʙᴏᴛ.args) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} song-name_`
      );
    }
    ꪜᴏxʙᴏᴛ.magfetch(
      ꪜᴏxʙᴏᴛ,
      "https://magneum.vercel.app/api/youtube_sr?q=" + ꪜᴏxʙᴏᴛ.args.join(" ")
    ).then(async (response) => {
      var mData = response.data;
      console.log(mData);

      return await ꪜᴏxʙᴏᴛ.sendMessage(
        ᴠᴏxᴄ.chat,
        {
          image: { url: mData.youtube_search[0].HQ_IMAGE },
          caption: `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
          footer:
            "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
              buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Help`,
              buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [ᴠᴏxᴄ.sender],
        },
        {
          contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender] },
          quoted: ᴠᴏxᴄ,
        }
      );

      await ꪜᴏxʙᴏᴛ.imgB(
        ꪜᴏxʙᴏᴛ,
        ᴠᴏxᴄ,
        `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
        mData.youtube_search[0].HQ_IMAGE
      );
      return;
      const stream = ytdl(mData.youtube_search[0].LINK, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      }).pipe(ꪜᴏxʙᴏᴛ.fs.createWriteStream(`./${mData.uuid}`));
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
      await ꪜᴏxʙᴏᴛ.sendMessage(
        ᴠᴏxᴄ.chat,
        {
          audio: ꪜᴏxʙᴏᴛ.fs.readFileSync(`./${mData.uuid}`),
          mimetype: "audio/mpeg",
          fileName: mData.youtube_search[0].TITLE + ".mp3",
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: mData.youtube_search[0].TITLE,
              body: "⭕made by voxbot",
              renderLargerThumbnail: true,
              thumbnailUrl: mData.youtube_search[0].THUMB,
              mediaUrl: mData.youtube_search[0].LINK,
              mediaType: 1,
              thumbnail: await ꪜᴏxʙᴏᴛ.getBuffer(
                mData.youtube_search[0].HQ_IMAGE
              ),
              sourceUrl: "https://bit.ly/magneum",
            },
          },
        },
        { quoted: ᴠᴏxᴄ }
      ).then(ꪜᴏxʙᴏᴛ.fs.unlinkSync(`./${mData.uuid}`));
    });
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
