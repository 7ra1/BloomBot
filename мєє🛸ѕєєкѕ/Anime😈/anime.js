// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const malScraper = require(`mal-scraper`);
var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
// ⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡
module.exports = {
  name: `anime`,
  commandType: "Anime😈",
  description: `Get Anime Informations From MyAnimeList`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    var str = ᴍᴇᴇ6.sender;
    var newString = str.substring(0, str.length - 15);
    //     if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
    //       return await υℓтяσηℓιєηт
    //         .sendMessage(
    //           ᴍᴇᴇ6.chatId,
    //           {
    //             url: ꜱɪɢɴ.ERROR,
    //           },
    //           MessageType.image,
    //           {
    //             mimetype: Mimetype.png,
    //             contextInfo: { mentionedJid: [ᴍᴇᴇ6.sender] },
    //             caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
    // 𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 𝗠𝗼𝘀𝘁 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

    // *❗Dҽαɾ @${newString}, ᴀʟʟ ᴍᴇᴇ6 ʙᴏᴛꜱ ᴀʀᴇ ᴅɪꜱᴀʙʟᴇᴅ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ*
    // 👇🏽‍𝗔𝗹𝗹𝗼𝘄𝗲𝗱-𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀
    //   *⬡${Mee6f}uptime*
    //   *⬡${Mee6f}ping*
    //   *⬡${Mee6f}help*
    //   *⬡${Mee6f}alive*
    //   *⬡${Mee6f}update*
    // *⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
    //           }
    //         )
    //         .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    //     }
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Anime name!*

*Usage Example*
${ꜱɪɢɴ.Mee6IX} <anime name>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    const name = Arc.join(` `);
    malScraper.getInfoFromName(name).then(async (data) => {
      const AnimeInfos = `💡𝐓𝐢𝐭𝐥𝐞: *${data.title}*
🧀𝗣𝗿𝗲𝗺𝗶𝗲𝗿𝗲𝗱: _${data.premiered}_
😈𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁: _${data.broadcast}_
❓𝗚𝗲𝗻𝗿𝗲𝘀: _${data.genres}_
📜𝗘𝗻𝗴𝗹𝗶𝘀𝗵𝗧𝗶𝘁𝗹𝗲: _${data.englishTitle}_
🈶𝗝𝗮𝗽𝗮𝗻𝗲𝘀𝗲𝗧𝗶𝘁𝗹𝗲: _${data.japaneseTitle}_
🫒𝗧𝘆𝗽𝗲: _${data.type}_
👀𝗘𝗽𝗶𝘀𝗼𝗱𝗲𝘀: _${data.episodes}_
🔥𝗥𝗮𝘁𝗶𝗻𝗴: _${data.rating}_
🛰️𝗔𝗶𝗿𝗲𝗱: _${data.aired}_
💯𝗦𝗰𝗼𝗿𝗲: _${data.score}_
⭐𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲𝘀: _${data.favorites}_
🏅𝗥𝗮𝗻𝗸𝗲𝗱: _${data.ranked}_
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: _${data.duration}_
🛸𝗦𝘁𝘂𝗱𝗶𝗼𝘀: _${data.studios}_
🥳𝗣𝗼𝗽𝘂𝗹𝗮𝗿𝗶𝘁𝘆: _${data.popularity}_
🥷𝗠𝗲𝗺𝗯𝗲𝗿𝘀: _${data.members}_
👌🏽‍𝗦𝗰𝗼𝗿𝗲𝗦𝘁𝗮𝘁𝘀: _${data.scoreStats}_
🫐𝗦𝗼𝘂𝗿𝗰𝗲: _${data.source}_
🔎𝗦𝘆𝗻𝗼𝗻𝘆𝗺𝘀: _${data.synonyms}_
🕸️𝗦𝘁𝗮𝘁𝘂𝘀: _${data.status}_
🎯𝗜𝗱: _${data.id}_
📥𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱: _${data.url}_`;
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: data.picture,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: AnimeInfos,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    });
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
