const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `kick`,
  description: `Use this command to kick people from a group by tagging them  *${ᴋᴇɪ}kick @<person-to-kick>*  or replying to them  *${ᴋᴇɪ}kick*`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎6.sender;
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.logGroup,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (爪𝖎𝖟𝖚ӄ𝖎6.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎6.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (!爪𝖎𝖟𝖚ӄ𝖎6.isSenderGroupAdmin) {
      return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
    }
    if (!爪𝖎𝖟𝖚ӄ𝖎6.isGroup) {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
    }
    let owner = 爪𝖎𝖟𝖚ӄ𝖎6.chatId.split(`-`)[0];
    if (爪𝖎𝖟𝖚ӄ𝖎6.isReply) {
      let PersonToRemove =
        chat.message.extendedTextMessage.contextInfo.participant;
      if (PersonToRemove === owner + `@s.whatsapp.net`) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      }
      if (PersonToRemove === 爪𝖎𝖟𝖚ӄ𝖎6.owner) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      }
      var isMember = async (chatId, groupMembers) => {
        var isMember = false;
        if (!(chatId === undefined)) {
          for (const index in groupMembers) {
            if (chatId == groupMembers[index].jid.split(`@`)[0]) {
              isMember = true;
            }
          }
          return isMember;
        } else {
          return isMember;
        }
      };
      if (!isMember) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `*person is not in the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
      }
      try {
        if (PersonToRemove) {
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .groupRemove(爪𝖎𝖟𝖚ӄ𝖎6.chatId, [PersonToRemove])
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
            });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
      return;
    }
    if (!arg[0]) {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
    }
    if (arg[0][0] == `@`) {
      const number = arg[0].substring(1);
      if (isNaN(number)) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      }

      if (number + `@s.whatsapp.net` === 爪𝖎𝖟𝖚ӄ𝖎6.owner) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      }

      if (!(number === owner)) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .groupRemove(爪𝖎𝖟𝖚ӄ𝖎6.chatId, [number + `@s.whatsapp.net`])
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      } else {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃
          .sendMessage(
            爪𝖎𝖟𝖚ӄ𝖎6.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          });
        return;
      }
    }
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(
        爪𝖎𝖟𝖚ӄ𝖎6.chatId,
        `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
  },
};
// ===============================================================================
// 🎮爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
