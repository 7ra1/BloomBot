// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { GroupSettingChange, MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `mute`,
  commandType: "Admin🐙Groups",
  description: `Mute non-admin members of a group. 
You can even specify the duration using s, m or h.
For example:
*${ꜱɪɢɴ.Mee6IX}mute 15 m*
will change chat permissions to admin-only for 15 minutes.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞!
⧪ 𝙰𝚍𝚟𝚊𝚗𝚌𝚎 𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚄𝚜𝚎𝚛𝚋𝚘𝚝 ⧪



*↱ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲 ↰*
  *⬡${ꜱɪɢɴ.Mee6IX}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
  *⬡${ꜱɪɢɴ.Mee6IX}alive*  ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}update*  ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*${ꜱɪɢɴ.Mee6IX}mute*  command is only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (!ᴍᴇᴇ6.isBotGroupAdmin) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Sorry, dont have the permission to do so since I am not an admin.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (Arc.length === 0) {
      await υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Chat permissions changed to  *admin only*${ꜱɪɢɴ.Mee6IX}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    } else if (isNaN(Arc[0])) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Please mention how long you want to mute the chat. For example,\n*${ꜱɪɢɴ.Mee6IX}mute 10 s*  to mute for 10 seconds.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }

    var duration;
    var type = `minutes`;
    if (Arc[1] === `s`) {
      duration = Arc[0] * 1000;
      type = `seconds`;
    } else if (Arc[1] === `m`) {
      duration = Arc[0] * 60 * 1000;
      type = `seconds`;
    } else if (Arc[1] === `h`) {
      duration = Arc[0] * 60 * 60 * 1000;
      type = `seconds`;
    } else {
      duration = Arc[0] * 60 * 1000;
    }

    υℓтяσηℓιєηт
      .groupSettingChange(ᴍᴇᴇ6.chatId, GroupSettingChange.messageSend, true)
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        `Chat permissions changed to  *admin only*  for ` +
          Arc[0] +
          ` ` +
          type +
          `.`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    setTimeout(() => {
      υℓтяσηℓιєηт
        .groupSettingChange(ᴍᴇᴇ6.chatId, GroupSettingChange.messageSend, false)
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Chat permissions changed to  *all group members*${ꜱɪɢɴ.Mee6IX}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }, duration);
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
