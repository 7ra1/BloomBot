`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Robbery = require(`../../Cortana🍃Goose/robbery`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
      const defaultnm = ƈօʀȶǟռǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
        .substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
        .replace(/[+ ]/g, "");
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
      if (!ƈօʀȶǟռǟ.isGroup) {
        return Cortana_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ƈօʀȶǟռǟ,
          `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
        );
      }
      `|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
      const hold = require(`../../Cortana🛰️Server/Hold`);
      await hold.Hold(ƈօʀȶǟռǟ);
      `|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
      if (ƈօʀȶǟռǟ.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
        await Robbery.findOne(
          {
            ID: Receiver,
          },
          async (Error, userRob) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
            if (!userRob) {
              var newUser = new Robbery({
                ID: Receiver,
                lock: 0,
                sword: 0,
                laptop: 0,
                charm: 0,
                CurrentRobberyTime: 0,
                PermanentRobberyTime: 480000,
              });
              await newUser
                .save()
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
              return Cortana_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                ƈօʀȶǟռǟ,
                `*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
                `./Cortana☣️Reactor/Cortana_Mongo.png`
              );
            } else {
              return Cortana_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                ƈօʀȶǟռǟ,
                `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔◇══════════════◇╗
┊   💼𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲💼
┊
╚══◇║🤠𝗔𝗰𝗰𝗼𝘂𝗻𝘁: @${քɛʀֆօռɢօȶռʊʍ}
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║
║🔒 *lock:* _${userRob.padlock}_
║⚔️ *sword:* _${userRob.sword}_
║💻 *laptop:* _${userRob.laptop}_
║🔮 *charm:* _${userRob.charm}_
╚════════════╝`,
                "./Cortana☣️Reactor/Cortana_Univ.png"
              );
            }
          }
        );
      } else if (Needs[0]) {
        var TagPerson = Needs[0].replace(/[^0-9]/g, "");
        var TagMention = TagPerson + "@s.whatsapp.net";
        await Robbery.findOne(
          {
            ID: TagMention,
          },
          async (Error, userRob) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
            if (!userRob) {
              var newUser = new Robbery({
                ID: TagMention,
                lock: 0,
                sword: 0,
                laptop: 0,
                charm: 0,
                CurrentRobberyTime: 0,
                PermanentRobberyTime: 480000,
              });
              await newUser
                .save()
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));

              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ƈօʀȶǟռǟ.chatId,
                { url: "./Cortana☣️Reactor/Cortana_Mongo.png" },
                MessageType.image,
                { mimetype: Mimetype.png }
              );
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  ƈօʀȶǟռǟ.chatId,
                  {
                    contentText: `*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *@${TagPerson} Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
                    footerText: `⎿ ©𝐂𝐨𝐫𝐭𝐚𝐧𝐚 • 𝐄𝐧𝐕𝐞𝐫: ${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}help`,
                        buttonText: { displayText: `${ᴋᴇɪ}help` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}faq`,
                        buttonText: { displayText: `${ᴋᴇɪ}faq` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: {
                      mentionedJid: [աɦօֆɛռȶɦǟȶ, TagMention],
                    },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
            } else {
              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ƈօʀȶǟռǟ.chatId,
                { url: "./Cortana☣️Reactor/Cortana_Univ.png" },
                MessageType.image,
                { mimetype: Mimetype.png }
              );
              return await ӄʀǟӄɨռʐ
                .sendMessage(
                  ƈօʀȶǟռǟ.chatId,
                  {
                    contentText: `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔◇══════════════◇╗
┊   💼𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲💼
┊
╚══◇║🤠𝗔𝗰𝗰𝗼𝘂𝗻𝘁: @${քɛʀֆօռɢօȶռʊʍ}
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║
║🔒 *lock:* _${userRob.padlock}_
║⚔️ *sword:* _${userRob.sword}_
║💻 *laptop:* _${userRob.laptop}_
║🔮 *charm:* _${userRob.charm}_
╚════════════╝`,
                    footerText: `⎿ ©𝐂𝐨𝐫𝐭𝐚𝐧𝐚 • 𝐄𝐧𝐕𝐞𝐫: ${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}help`,
                        buttonText: { displayText: `${ᴋᴇɪ}help` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}faq`,
                        buttonText: { displayText: `${ᴋᴇɪ}faq` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: {
                      mentionedJid: [աɦօֆɛռȶɦǟȶ, TagMention],
                    },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
            }
          }
        );

        `|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
      } else {
        await Robbery.findOne(
          {
            ID: աɦօֆɛռȶɦǟȶ,
          },
          async (Error, userRob) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
            if (!userRob) {
              var newUser = new Robbery({
                ID: աɦօֆɛռȶɦǟȶ,
                lock: 0,
                sword: 0,
                laptop: 0,
                charm: 0,
                CurrentRobberyTime: 0,
                PermanentRobberyTime: 480000,
              });
              await newUser
                .save()
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
              return Cortana_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                ƈօʀȶǟռǟ,
                `*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
                `./Cortana☣️Reactor/Cortana_Mongo.png`
              );
            } else {
              return Cortana_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                ƈօʀȶǟռǟ,
                `🪶 𝐇𝐞𝐲:

╔◇══════════════◇╗
┊   💼𝐈𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲💼
┊
╚══◇║🤠𝗔𝗰𝗰𝗼𝘂𝗻𝘁: @${աɦօֆɛռȶɦǟȶռʊʍ}, 
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║
║🔒 *lock:* _${userRob.padlock}_
║⚔️ *sword:* _${userRob.sword}_
║💻 *laptop:* _${userRob.laptop}_
║🔮 *charm:* _${userRob.charm}_
╚════════════╝`,
                "./Cortana☣️Reactor/Cortana_Univ.png"
              );
            }
          }
        );
      }
      `|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
