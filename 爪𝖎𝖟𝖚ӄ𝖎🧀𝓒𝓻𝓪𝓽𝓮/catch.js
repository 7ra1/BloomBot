// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
require("python-format-js");
exports.catch = async (error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎) => {
  var str = 爪𝖎𝖟𝖚ӄ𝖎.sender;
  var newString = str.substring(0, str.length - 15);
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    爪𝖎𝖟𝖚ӄ𝖎.logGroup,
    `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${error}

シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓*https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
      },
    }
  );
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    爪𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      url: ꜱɪɢɴ.ERROR,
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      contextInfo: {
        mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
      },
      caption: `_☆ ӄʀǟӄɨռʐʟǟɮ ɛռɢɨռɛ ☆_
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*


*•@${newString}*,𝙏𝙝𝙚𝙧𝙚 𝙒𝙖𝙨 𝘼𝙣 𝙀𝙧𝙧𝙤𝙧.𝙋𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝘼𝙜𝙖𝙞𝙣 𝙇𝙖𝙩𝙚𝙧!
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓*https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
    }
  );
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
