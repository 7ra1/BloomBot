`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
require(`python-format-js`);
const fs = require(`fs`);
`🐙============================================================================================================================<⚡>`;
exports.catch = async (ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat) => {
  await ӄʀǟӄɨռʐ
    .sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `_𝐌𝐢𝐳𝐮𝐤𝐢™_

*🐙Please try Again Later!*
There Was temporary erorr in that command.`,
      MessageType.text,
      {
        quoted: chat,
        contextInfo: {
          mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
        },
      }
    )
    .then(console.log(ℓαвєяяσя));
};
`🐙============================================================================================================================<⚡>`;
