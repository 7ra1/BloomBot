`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const postDb = require(`./postDb`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
require(`python-format-js`);
var ᴛᴡᴇʟ = [
  `just joined the server!`,
  `just joined. Everyone,look busy!`,
  `just joined!`,
  `joined the party!`,
  `welcome, we were expecting you to join!`,
  `welcome, we hope you bought pizza for us!`,
  `welcome, leave your weapons by the door!`,
  `Swooosh! Just landed.`,
  `just joined. Hide your bananas!`,
  `just joined. Seems OP, please nerf!`,
  `just slid into the server!`,
  `has spawned in the server!`,
  `just showed up in the server!`,
];
var Flower = ["💐", "🌻", "🌼", "🌹", "🌸", "💮"];
var People = ["👮", "👳", "🤱", "🤰", "💂"];
console.clear();
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
exports.welbuts = async (
  ӄʀǟӄɨռʐ,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum
) => {
  var ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ = await postDb.getMessage(GroupID, `setwelcome`);
  const ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
  const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
  const PeopleWel = People[Math.floor(Math.random() * People.length)];
  var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.substring(0, MemNum.length - 15);
  `🐙============================================================================================================================<⚡>`;
  `   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
  `🐙============================================================================================================================<⚡>`;
  try {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
  } catch {
    𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/3wfrmmpB/NoPP.jpg`;
  }
  `🐙============================================================================================================================<⚡>`;
  `   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
  `🐙============================================================================================================================<⚡>`;
  try {
    const downloader = await new Downloader({
      url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
      directory: `./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️`,
      fileName: `${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`,
      cloneFiles: false,
    });
    await downloader.download();
    let content = fs.readFileSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`);
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      GroupID,
      content,
      MessageType.image,
      {
        mimetype: Mimetype.png || Mimetype.jpeg,
      }
    );
    await ӄʀǟӄɨռʐ
      .sendMessage(
        GroupID,
        {
          contentText: `*⚡@${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}* ${ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ}

*<⚡>*
${FlowerWel}𝗕𝗶𝗼: ${GroupMemBio.status}
${PeopleWel}𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
💡𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}
*<⚡>*

${ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ.message}`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™*`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
            {
              buttonId: `${ᴋᴇɪ}menu`,
              buttonText: { displayText: `${ᴋᴇɪ}menu` },
              type: 1,
            },
            {
              buttonId: `${ᴋᴇɪ}getdesc`,
              buttonText: { displayText: `${ᴋᴇɪ}getdesc` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          contextInfo: { mentionedJid: [MemNum] },
        }
      )
      .then(fs.unlinkSync(`./🗑️𝓜𝖎𝖟𝖚ӄ𝖎🗑️/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`));
  } catch (e) {
    console.log(e);
  }
};
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
