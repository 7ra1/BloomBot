`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
    const jsoncool = await JSON.parse(
      fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
    );
    await jsoncool.push(ֆǟӄʊʀǟ.sender);
    await fs.writeFileSync(
      `./Sakura🛰️Server/Coolist.json`,
      JSON.stringify(jsoncool)
    );
    setTimeout(async (error) => {
      if (error) console.log(error);
      await jsoncool.splice(ֆǟӄʊʀǟ.sender);
      await fs.writeFileSync(
        `./Sakura🛰️Server/Coolist.json`,
        JSON.stringify(jsoncool)
      );
    }, 15000);
    //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
    if (!ֆǟӄʊʀǟ.fromMe && !ֆǟӄʊʀǟ.isSenderDev) {
      return Sakura_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `*❌ Owner Only | You Are Not Allowed! ❌*`,
        _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
      );
    }
    if (Needs.length === 0) {
      var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
      var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ = 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
      const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        ꜱᴇɴᴅᴇʀɪᴅ,
        ꜱᴇɴᴅᴇʀeceived,
        ֆǟӄʊʀǟ.commandName,
        ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
      );
    } else {
      let members = [];
      for (var i = 0; i < ֆǟӄʊʀǟ.groupMembers.length; i++) {
        members[i] = ֆǟӄʊʀǟ.groupMembers[i].jid;
      }
      let 𝖟𝖚ӄ𝖎 = ӄʀǟӄɨռʐ.chats
        .all()
        .filter((v) => v.jid.endsWith("g.us"))
        .map((v) => v.jid);
      for (let _ of 𝖟𝖚ӄ𝖎) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            _.jid,
            { url: `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              quoted: chat,
              contextInfo: {
                mentionedJid: members,
                stanzaId: ֆǟӄʊʀǟ.replyMessageId,
                participant: ֆǟӄʊʀǟ.replyParticipant,
                quotedMessage: {
                  conversation: ֆǟӄʊʀǟ.replyMessage,
                },
              },
              caption: `˜”*°•| 𝐇𝐞𝐚𝐫 𝐘𝐚 𝐇𝐞𝐚𝐫 𝐘𝐚 |•°*”˜

           
╔═══════★ 🗣️𝐒𝐩𝐞𝐜𝐢𝐚𝐥_𝐁𝐫𝐨𝐚𝐝𝐂𝐚𝐬𝐭🗣️
║🍁𝐌𝐢𝐳𝐮𝐤𝐢 𝐈𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 
║𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
║
║${ֆǟӄʊʀǟ.body.replace(ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + " ", "")}
╚════════════╝`,
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
      }
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;