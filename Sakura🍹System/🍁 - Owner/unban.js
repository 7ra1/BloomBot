`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
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
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      if (!ֆǟӄʊʀǟ.fromMe && !ֆǟӄʊʀǟ.isSenderDev) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Owner Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      if (ֆǟӄʊʀǟ.isPm && ֆǟӄʊʀǟ.fromMe) {
        let ʀᴍʙᴀɴ = ֆǟӄʊʀǟ.chatId;
        if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ``))) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
        //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
        BanList.removeBanlistUser(ʀᴍʙᴀɴ, ``);
        return Sakura_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: removed from BanList for all the chats.
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
        );
        //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      } else {
        if (Needs.length > 0) {
          let ʀᴍʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ);
          if (ʀᴍʙᴀɴ === undefined) return;
          ʀᴍʙᴀɴ += `@s.whatsapp.net`;
          if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          BanList.removeBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: has been removed from the BanList for this group.
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
        } else if (ֆǟӄʊʀǟ.isReply) {
          let ʀᴍʙᴀɴ = ֆǟӄʊʀǟ.replyParticipant;
          if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          BanList.removeBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: has been removed from the BanList for this group.
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
        } else {
          if (!(await BanList.getBanlistUser(``, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽 ${ֆǟӄʊʀǟ.groupName}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          BanList.removeBanlistUser(``, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived} 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║👌🏽𝐆𝐫𝐨𝐮𝐩 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ֆǟӄʊʀǟ.groupName}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: Bot has been enabled for the group
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      }
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;