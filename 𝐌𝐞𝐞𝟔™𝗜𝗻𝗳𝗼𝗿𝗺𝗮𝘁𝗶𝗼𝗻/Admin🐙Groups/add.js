const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `add`,
  commandType: "Admin🐙Groups",
  description: `Add new people to a group by entering their mobile number as per the format mentioned below.
Example -
${ꜱɪɢɴ.Mee6IX}add <country-code>8250889325*
${ꜱɪɢɴ.Mee6IX}add 918250889325*`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    try {
      if (!arg[0]) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Enter the number you want to add.
For instance,  
*${ᴋᴇɪ}add <NUMBER>* .`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }
      let NUM;
      if (isNaN(arg[0]) || arg[0][0] === `+` || arg[0].length < 10) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Valid formats -

Example -
*${ᴋᴇɪ}add <country-code>8250889325*
*${ᴋᴇɪ}add 918250889325*`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }
      if (arg[0].length == 10 && !isNaN(arg[0])) {
        NUM = `91` + arg[0];
      } else {
        NUM = arg[0];
      }
      const exists = await ʍɛɛℓιєηт.isOnWhatsApp(NUM + `@s.whatsapp.net`);
      if (!exists) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.

Example -
*${ᴋᴇɪ}add <country-code>8250889325*
*${ᴋᴇɪ}add 918250889325*`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }
      NUM = `${arg[0].replace(/ /g, "")}@s.whatsapp.net`;
      const request = ʍɛɛℓιєηт.groupAdd(ᴍᴇᴇ6.chatId, [NUM]);
      const response = await request;

      if (response[NUM + `@c.us`] == 408) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `The number entered cannot be added back before 24 hours.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      } else if (response[NUM + `@c.us`] == 409) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `The number entered is already a member of this group.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }
      ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          ` ` + NUM + ` added successfully!` + ``,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } catch (error) {
      if (error.status == 400) {
        ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
      await ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6);
    }
    return;
  },
};
