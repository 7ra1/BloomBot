// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const ℓιєηт = require("../../ULTƦON/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `add`,
  commandType: "Administration🐙",
  description: `command to add a person to a group.
Add new people to a group by entering their mobile number as per the format mentioned below.
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example -
*${ꜱɪɢɴ.ULTRONIX}add 9861212121*
`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      if (!ULTƦON.isGroup) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `command only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (!ULTƦON.isBotGroupAdmin) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Sorry, don't have permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (Arc.length === 0) {
        await υℓтяσηℓιєηт.sendMessage(ULTƦON.chatId, "❌", MessageType.text);
        await υℓтяσηℓιєηт.sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/5tb40s6w/Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        );
        return;
      }
      let number;
      if (isNaN(Arc[0]) || Arc[0][0] === `+` || Arc[0].length < 10) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Valid formats -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-\n*${ꜱɪɢɴ.ULTRONIX}add 9861212121*\n*${ꜱɪɢɴ.ULTRONIX}add 919861212121*`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      if (Arc[0].length == 10 && !isNaN(Arc[0])) {
        number = `91` + Arc[0];
      } else {
        number = Arc[0];
      }
      const exists = await υℓтяσηℓιєηт.isOnWhatsApp(number + `@s.whatsapp.net`);
      if (!exists) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `The number you're trying to add isn't available on WhatsApp.\nPlease verify the number again.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      const request = υℓтяσηℓιєηт.groupAdd(ULTƦON.chatId, [
        ULTƦON.owner,
        number + `@s.whatsapp.net`,
      ]);
      const response = await request;

      if (response[number + `@c.us`] == 408) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `The number entered cannot be added back before 24 hours.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      } else if (response[number + `@c.us`] == 409) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `The number entered is already a member of this group.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        return;
      }
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        ` ` + number + ` added successfully!` + ``,
        MessageType.text
      );
    } catch (cᴇʀʀᴏʀ) {
      if (cᴇʀʀᴏʀ.status == 400) {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
VERIFY NUMBER \  NOT IN WHATSAPP!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ULTƦON.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ULTƦON.isPm}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
