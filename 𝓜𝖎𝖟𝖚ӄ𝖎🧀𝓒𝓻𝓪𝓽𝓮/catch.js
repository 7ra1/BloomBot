//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${ℓαвєяяσя}

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
      },
    }
  );
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      url: _𝔏𝔞𝔟_.ERROR,
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      contextInfo: {
        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
      },
      caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 ʙʏ ᴋʀᴀᴋɪɴᴢ_


•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Please try Again!There Was temporary erorr in that command.`,
    }
  );
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
