// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
exports.catch = async (error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓 = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var 𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰 = 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.substring(0, 𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓.length - 15);
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⚠️𝗘𝗿𝗿𝗼𝗿⚠️
${error}

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓],
      },
    }
  );
  await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    {
      url: _𝔏𝔞𝔟_.ERROR,
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      contextInfo: {
        mentionedJid: [𝓢𝓮𝓷𝓭𝓮𝓻𝓘𝓓],
      },
      caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_


𝗔𝗵𝗺 •@${𝓢𝓮𝓷𝓭𝓮𝓻𝓒𝓸𝓷𝓯𝓲𝓰},
Please try Again!There Was temporary erorr in that command.

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    }
  );
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
