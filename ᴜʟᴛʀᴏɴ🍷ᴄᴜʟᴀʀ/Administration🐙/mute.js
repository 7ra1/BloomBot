// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { GroupSettingChange, MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴜʟᴛʀᴏɴ/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `mute`,
  commandType: "Administration🐙",
  description: `Mute non-admin members of a group. 
You can even specify the duration using s, m or h.
For example:
*${ꜱɪɢɴ.ULTRONIX}mute 15 m*
will change chat permissions to admin-only for 15 minutes.`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    try {
      if (!ᴜʟᴛʀᴏɴ.isGroup) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `*${ꜱɪɢɴ.ULTRONIX}mute*  command is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      }
      if (!ᴜʟᴛʀᴏɴ.isBotGroupAdmin) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `Sorry, dont have the permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      }
      if (Arc.length === 0) {
        await υℓтяσηℓιєηт.sendMessage(ᴜʟᴛʀᴏɴ.chatId, "❌", MessageType.text);
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
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
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `Chat permissions changed to  *admin only*${ꜱɪɢɴ.ULTRONIX}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        return;
      } else if (isNaN(Arc[0])) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `Please mention how long you want to mute the chat. For example,\n*${ꜱɪɢɴ.ULTRONIX}mute 10 s*  to mute for 10 seconds.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
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
        .groupSettingChange(ᴜʟᴛʀᴏɴ.chatId, GroupSettingChange.messageSend, true)
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `Chat permissions changed to  *admin only*  for ` +
          Arc[0] +
          ` ` +
          type +
          `.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      setTimeout(() => {
        υℓтяσηℓιєηт
          .groupSettingChange(
            ᴜʟᴛʀᴏɴ.chatId,
            GroupSettingChange.messageSend,
            false
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `Chat permissions changed to  *all group members*${ꜱɪɢɴ.ULTRONIX}`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      }, duration);
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `*🎮ᴜʟᴛʀᴏɴ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
