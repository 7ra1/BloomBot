// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/BanList`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `unban`,
  𝓜𝓮𝓮6ʍօʀɛ: `Remove people or group from blacklist.`,
  async handle(
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    Needs,
    ꜱɪᴛʀᴀᴘ,
    Clock,
    Ping,
    Timers,
    version
  ) {
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    console.log(`🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
      return Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────▶ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│❌ _𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!_
└───────〇`,
        _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
      );
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
      let ʀᴍʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
      if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ``))) {
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      BanList.removeBanlistUser(ʀᴍʙᴀɴ, ``);
      return Mizuki_Static.MGS(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _removed from BanList for all the chats._
└───────〇`,
        `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
      );
    } else {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (Needs.length > 0) {
        let ʀᴍʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
        if (ʀᴍʙᴀɴ === undefined) return;
        ʀᴍʙᴀɴ += `@s.whatsapp.net`;
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId))) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        BanList.removeBanlistUser(ʀᴍʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _has been removed from the BanList for this group._
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        let ʀᴍʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
        if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId))) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        BanList.removeBanlistUser(ʀᴍʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _has been removed from the BanList for this group._
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
      } else {
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (!(await BanList.getBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId))) {
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽 ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        BanList.removeBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭
│
│👌🏽𝐆𝐫𝐨𝐮𝐩 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _Bot has been enabled for the group_
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
      }
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
