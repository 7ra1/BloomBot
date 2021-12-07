const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const got = require(`got`);
module.exports = {
  name: `github`,
  commandType: "Fun⚡",
  description: `Get the github profile by command  *${ꜱɪɢɴ.Mee6IX}github <user>*  
or replying  *${ꜱɪɢɴ.Mee6IX}github* .`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    try {
      let user_name = ``;
      if (ᴍᴇᴇ6.isReply) {
        user_name = ᴍᴇᴇ6.replyMessage;
      } else {
        if (Arc.length === 0) {
          return await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId, {
                url: ꜱɪɢɴ.ARC,
              },
              MessageType.image, {
                mimetype: Mimetype.jpeg,
                caption: `*⚠️Seems like someone forgot to give Github Account name!*
  
  *Usage Example*
  ${ꜱɪɢɴ.Mee6IX}github <account name>`,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
        }
        user_name = Arc[0];
      }
      let userResponse = await got(`https://api.github.com/users/` + user_name);
      let user = JSON.parse(userResponse.body);
      Object.keys(user).forEach(function (key) {
        if (user[key] === null || user[key] === ``) {
          user[key] = `N/A`;
        }
      });
      let caption =
        `*👤 Name :* ` +
        user.name +
        `\n*💻 Link :* ` +
        user.html_url +
        `\n*🔧 Type :* ` +
        user.type +
        `\n*🏢 Company :* ` +
        user.company +
        `\n*🔭 Blog :* ` +
        user.blog +
        `\n*📍 Location :* ` +
        user.location +
        `\n*📝 Bio :* ` +
        user.bio +
        `\n*❤️ Followers :* ` +
        user.followers +
        `\n*👁️ Following :* ` +
        user.following +
        `\n*📊 Public Repos :* ` +
        user.public_repos +
        `\n*📄 Public Gists :* ` +
        user.public_gists +
        `\n*🔗 Profile Created :* ` +
        user.created_at +
        `\n*✏️ Profile Updated :* ` +
        user.updated_at;
      if (user.public_repos > 0) {
        let reposResponse = await got(user.repos_url);
        let reposData = JSON.parse(reposResponse.body);
        repos = reposData[0].name;
        for (let i = 1; i < reposData.length && i < 5; i++) {
          repos += ` | ` + reposData[i].name;
        }
        caption += `\n*🔍 Some Repos :* ` + repos;
      }
      try {
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId, {
              url: user.avatar_url,
            },
            MessageType.image, {
              mimetype: Mimetype.png,
              caption: caption,
              thumbnail: null,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      } catch (cᴇʀʀᴏʀ) {
        υℓтяσηℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, caption, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ACCOUNT NOT FOUND
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================