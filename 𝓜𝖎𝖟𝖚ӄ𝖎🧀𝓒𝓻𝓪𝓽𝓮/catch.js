// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const vers = require(`../package.json`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
    `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

⚠️𝗘𝗿𝗿𝗼𝗿
${ℓαвєяяσя}

シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
    MessageType.text,
    {
      contextInfo: {
        mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
      },
    }
  );
  // ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
  await ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_


•@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Please try Again!There Was temporary erorr in that command.`,
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
  //       caption: `_(c)𝐌𝐢𝐳𝐮𝐤𝐢 ${vers.vers}_

  // •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
  // Please try Again!There Was temporary erorr in that command.`,
  //     }
  //   );
};
// ⦿•=•=•=•=•=•=•=•=•=•=•=•=•=•──────[]  𝐌𝐢𝐳𝐮𝐤𝐢™   []──────•=•=•=•=•=•=•=•=•=•=•=•=•=•⦿
