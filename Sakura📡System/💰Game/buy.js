`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Economy = require(`../../Sakura🍃Goose/economy`);
const Robbery = require(`../../Sakura🍃Goose/robbery`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const Bagde = require(`../../Sakura🍃Goose/badge`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}buy* _item name_`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require(`../../Sakura🛰️Server/Hold`);
      await hold.Hold(ֆǟӄʊʀǟ);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      var Item;
      var NewLimit;
      var ItemPrice;
      const BadgeCatelog = [
        `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`,
        `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`,
        `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`,
        `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`,
        `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`,
      ];
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      var ItemRob;
      var ItemRobPrice;
      const RobCatelog = ["padlock", "sword", "laptop", "charm"];
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (Needs.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          աɦօֆɛռȶɦǟȶռʊʍ,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (RobCatelog.includes(Needs[0])) {
        if (Needs[0] === `Padlock` || Needs[0] === `padlock`) {
          ItemRob = "padlock";
          ItemRobPrice = 5000;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `charm` || Needs[0] === `Charm`) {
          ItemRob = "charm";
          ItemRobPrice = 18000;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `sword` || Needs[0] === `Sword`) {
          ItemRob = "sword";
          ItemRobPrice = 8000;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `laptop` || Needs[0] === `laptop`) {
          ItemRob = "laptop";
          ItemRobPrice = 12000;
        } else {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, Items Available in shop are below!*

╔═══⬡ 🏷️𝐁𝐚𝐝𝐠𝐞
║ 🧵Basic
║ 🥉Bronze
║ 🥈Silver
║ 🥇Gold
║ 💍Platinum
║ 💎Diamond
╚════════════╝

╔═══⬡ 𝗚𝗮𝗺𝗲𝘀💰𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲
║ 🔒Padlock
║ ⚔️Sword 
║ 💻Laptop
║ 🔮Charm
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ_shop.png`
          );
        }
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        await Robbery.findOne(
          {
            ID: աɦօֆɛռȶɦǟȶ,
          },
          async (Error, userRob) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
            if (!userRob) {
              var newUser = new Robbery({
                ID: աɦօֆɛռȶɦǟȶ,
                padlock: 0,
                sword: 0,
                laptop: 0,
                charm: 0,
                CurrentRobberyTime: 0,
                PermanentRobberyTime: 3600000,
              });
              await newUser
                .save()
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              return Sakura_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
                `./Sakura☣️Reactor/Sakura_Mongo.png`
              );
            } else {
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
              if (userRob.padlock === 1) {
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
╚════════════╝`
                );
              }
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
              if (userRob.sword === 1) {
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
╚════════════╝`
                );
              }
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
              if (userRob.laptop === 1) {
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
╚════════════╝`
                );
              }
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
              if (userRob.charm === 1) {
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
╚════════════╝`
                );
              }
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
              Economy.findOne(
                {
                  ID: աɦօֆɛռȶɦǟȶ,
                },
                async (Error, userEco) => {
                  if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
                  if (!userEco) {
                    var newUser = new Economy({
                      ID: աɦօֆɛռȶɦǟȶ,
                      money: 0,
                      daily: 0,
                      timeout: 86400000,
                      fishdone: 0,
                      fishtimeout: 1800000,
                      workdone: 0,
                      worktimeout: 900000,
                    });
                    await newUser
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_ 
║💼 𝗘𝗮𝗿𝗻: _read ${ᴋᴇɪ}ecomenu._
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_
╚════════════╝`
                    );
                    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  } else {
                    if (userEco.money < ItemRobPrice) {
                      return Sakura_Buttons.MTB(
                        ӄʀǟӄɨռʐ,
                        chat,
                        ֆǟӄʊʀǟ,
                        `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
║💼 𝗘𝗮𝗿𝗻: _read ${ᴋᴇɪ}ecomenu._
║🧀 𝗜𝘁𝗲𝗺: _${ItemRob}_
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemRobPrice} gold_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_
╚════════════╝`
                      );
                    }
                    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                    if (userEco.money > ItemRobPrice) {
                      if (ItemRob === "padlock") {
                        userRob.padlock = 1;
                        await userRob
                          .save()
                          .catch((Error) =>
                            ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                          );
                      } else if (ItemRob === "laptop") {
                        userRob.laptop = 1;
                        await userRob
                          .save()
                          .catch((Error) =>
                            ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                          );
                      } else if (ItemRob === "charm") {
                        userRob.charm = 1;
                        await userRob
                          .save()
                          .catch((Error) =>
                            ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                          );
                      } else if (ItemRob === "sword") {
                        userRob.sword = 1;
                        await userRob
                          .save()
                          .catch((Error) =>
                            ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                          );
                      }
                      userEco.money = userEco.money - ItemRobPrice;
                      await userEco
                        .save()
                        .catch((Error) =>
                          ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                        );
                      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                      return Sakura_Buttons.MTB(
                        ӄʀǟӄɨռʐ,
                        chat,
                        ֆǟӄʊʀǟ,
                        `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🥳 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
║🧀 𝗜𝘁𝗲𝗺: _${ItemRob}_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_
╚════════════╝`
                      );
                    }
                  }
                }
              );
            }
          }
        );
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      } else if (BadgeCatelog.includes(Needs[0])) {
        if (Needs[0] === `basic` || Needs[0] === `Basic`) {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: That item is Free!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${աɦօֆɛռȶɦǟȶռʊʍ} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨
╚════════════╝`
          );
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `bronze` || Needs[0] === `Bronze`) {
          Item = `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`;
          ItemPrice = 20000;
          NewLimit = 20;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `silver` || Needs[0] === `Silver`) {
          Item = `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`;
          ItemPrice = 40000;
          NewLimit = 40;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `gold` || Needs[0] === `Gold`) {
          Item = `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`;
          ItemPrice = 60000;
          NewLimit = 60;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `platinum` || Needs[0] === `Platinum`) {
          Item = `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`;
          ItemPrice = 80000;
          NewLimit = 80;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (Needs[0] === `diamond` || Needs[0] === `Diamond`) {
          Item = `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`;
          ItemPrice = 100000;
          NewLimit = 100;
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, Items Available in shop are below!*

╔═══⬡ 🏷️𝐁𝐚𝐝𝐠𝐞
║ 🧵Basic
║ 🥉Bronze
║ 🥈Silver
║ 🥇Gold
║ 💍Platinum
║ 💎Diamond
╚════════════╝

╔═══⬡ 𝗚𝗮𝗺𝗲𝘀💰𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲
║ 🔒Padlock
║ ⚔️Sword 
║ 💻Laptop
║ 🔮Charm
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ_shop.png`
          );
        }
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        await Economy.findOne(
          {
            ID: աɦօֆɛռȶɦǟȶ,
          },
          async (Error, userEco) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
            `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
            await Bagde.findOne(
              {
                ID: աɦօֆɛռȶɦǟȶ,
              },
              async (Error, userBadge) => {
                if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
                if (!userEco) {
                  var newEcoUser = new Economy({
                    ID: աɦօֆɛռȶɦǟȶ,
                    money: 0,
                    daily: 0,
                    timeout: 86400000,
                    fishdone: 0,
                    fishtimeout: 1800000,
                    workdone: 0,
                    worktimeout: 900000,
                  });
                  newEcoUser
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
║💼 𝗘𝗮𝗿𝗻: _read ${ᴋᴇɪ}ecomenu._
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_
╚════════════╝`
                  );
                }
                `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                if (!userBadge) {
                  var newBagdeUser = new Bagde({
                    ID: աɦօֆɛռȶɦǟȶ,
                    Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
                    value: `True`,
                    Limits: 10,
                    CurrentLimitTime: 0,
                    PermanentLimitTime: 0,
                  });
                  newBagdeUser
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
║💼 𝗘𝗮𝗿𝗻: _read ${ᴋᴇɪ}ecomenu._
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_
╚════════════╝`
                  );
                }
                `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                if (userEco.money < ItemPrice) {
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
║💼 𝗘𝗮𝗿𝗻: _read ${ᴋᴇɪ}ecomenu._
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_
╚════════════╝`
                  );
                }
                `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                if (userBadge.Badge === Item) {
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║❌ 𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
╚════════════╝`
                  );
                }
                `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                if (
                  userEco.money > ItemPrice &&
                  BadgeCatelog.includes(Item) &&
                  NewLimit > 0
                ) {
                  userEco.money = userEco.money - ItemPrice;
                  userBadge.Limits = NewLimit;
                  userBadge.Badge = Item;
                  await userEco
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  await userBadge
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
┊
╚══◇║
╔══◇║🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║
║🥳 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
║🧀 𝗜𝘁𝗲𝗺: _${Item}_
║🍯 𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_
╚════════════╝`
                  );
                }
              }
            );
          }
        );
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      } else {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, Items Available in shop are below!*

╔═══⬡ 🏷️𝐁𝐚𝐝𝐠𝐞
║ 🧵Basic
║ 🥉Bronze
║ 🥈Silver
║ 🥇Gold
║ 💍Platinum
║ 💎Diamond
╚════════════╝

╔═══⬡ 𝗚𝗮𝗺𝗲𝘀💰𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲
║ 🔒Padlock
║ ⚔️Sword 
║ 💻Laptop
║ 🔮Charm
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟ_shop.png`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
