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
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: newScpt,
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
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        return Mizuki_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│❌ _𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!_
└───────〇`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        let ᴀᴅᴅʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
        BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, ``);
        return Mizuki_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _Banlisted from using the bot!_
└───────〇`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
      } else {
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (Needs.length > 0) {
          let ᴀᴅᴅʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          if (ᴀᴅᴅʙᴀɴ === undefined) return;
          ᴀᴅᴅʙᴀɴ += `@s.whatsapp.net`;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === ᴀᴅᴅʙᴀɴ) {
            return Mizuki_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│❌ _𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!_
└───────〇`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _Banlisted from using the bot in this group!_
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          let ᴀᴅᴅʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === ᴀᴅᴅʙᴀɴ) {
            return Mizuki_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│❌ _𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!_
└───────〇`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _Banlisted from using the bot in this group!_
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else {
          BanList.addBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Mizuki_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
│
│🛑𝐆𝐫𝐨𝐮𝐩 𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ: _Bot has been disabled for the group!_
└───────〇`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
      }
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
