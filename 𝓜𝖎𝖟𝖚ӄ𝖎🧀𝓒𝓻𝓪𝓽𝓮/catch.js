// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const vers = require(`../package.json`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `_𝐌𝐢𝐳𝐮𝐤𝐢™_

⚠️𝗘𝗿𝗿𝗼𝗿
${ℓαвєяяσя}

🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
      },
    }
  );
  // ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    `_𝐌𝐢𝐳𝐮𝐤𝐢™_


•@${ꜱᴇɴᴅᴇʀeceived},*Please try Again!*
_There Was temporary erorr in that command._`,
    MessageType.text, {
    contextInfo: {
      mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
    },
  }
  );
  //   await ӄʀǟӄɨռʐ.sendMessage(
  //     𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
  //     {
  //       url: _𝔏𝔞𝔟_.ERROR,
  //     },
  //     MessageType.image,
  //     {
  //       mimetype: Mimetype.png,
  //       contextInfo: {
  //         mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
  //       },
  //       caption: `_𝐌𝐢𝐳𝐮𝐤𝐢™_

  // •@${ꜱᴇɴᴅᴇʀeceived},
  // Please try Again!There Was temporary erorr in that command.`,
  //     }
  //   );
};
// ⚡•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[🐙  𝐌𝐢𝐳𝐮𝐤𝐢™   🐙]──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⚡
