`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../Sakura🛰️Server/BanList`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const motor = require(`../../Sakura🛰️Server/motor`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `*❌ Owner Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        let ᴀᴅᴅʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
        BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, ``);
        return Sakura_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐁𝐚𝐧: _Banlisted from using the bot!_
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
          `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
        );
        `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      } else {
        if (Needs.length > 0) {
          let ᴀᴅᴅʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
          if (ᴀᴅᴅʙᴀɴ === undefined) return;
          ᴀᴅᴅʙᴀɴ += `@s.whatsapp.net`;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === ᴀᴅᴅʙᴀɴ) {
            return Sakura_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `*❌ Owner Only | You Are Not Allowed! ❌*`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐁𝐚𝐧: _Banlisted from using the bot in this group!_
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          let ᴀᴅᴅʙᴀɴ = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === ᴀᴅᴅʙᴀɴ) {
            return Sakura_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `*❌ Owner Only | You Are Not Allowed! ❌*`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐁𝐚𝐧: _Banlisted from using the bot in this group!_
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
        } else {
          BanList.addBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🛑𝐆𝐫𝐨𝐮𝐩 𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
║🛡️𝐒𝐮𝐝𝐨 𝐁𝐚𝐧: _Bot has been disabled for the group!_
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
          );
        }
      }
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
