// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
require("python-format-js");
exports.catch = async (error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6) => {
  var str = 𝓜𝓮𝓮6.sender;
  var newString = str.substring(0, str.length - 15);
  await ʍɛɛℓιєηт.sendMessage(
    𝓜𝓮𝓮6.logGroup,
    `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${error}

シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓*https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [𝓜𝓮𝓮6.sender],
      },
    }
  );
  await ʍɛɛℓιєηт.sendMessage(
    𝓜𝓮𝓮6.chatId,
    {
      url: ꜱɪɢɴ.ERROR,
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      contextInfo: {
        mentionedJid: [𝓜𝓮𝓮6.sender],
      },
      caption: `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*


*•@${newString}*,𝙏𝙝𝙚𝙧𝙚 𝙒𝙖𝙨 𝘼𝙣 𝙀𝙧𝙧𝙤𝙧.𝙋𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝘼𝙜𝙖𝙞𝙣 𝙇𝙖𝙩𝙚𝙧!
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓*https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
    }
  );
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
