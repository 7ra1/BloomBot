`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { pinterest } = require(`../../Sakura🛰️Server/scraper`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}pinterest* <search>`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      const Bagde = require("../../Sakura🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: ֆǟӄʊʀǟ.sender,
        },
        async (err, userBadge) => {
          // return userBadge.delete();
          if (err) return console.log(err);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: ֆǟӄʊʀǟ.sender,
              Badge: "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ",
              value: "True",
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            newUser.save();
          } else {
            var clock =
              userBadge.PermanentLimitTime -
              (Date.now() - userBadge.CurrentLimitTime);
            if (clock > 0 && userBadge.Limits == 0) {
              userBadge.value = "False";
              userBadge.save();
            }
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = "True";
              userBadge.save();
            }
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === "🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === "🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === "🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === "💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = "True";
              userBadge.save();
            }
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          const jsoncool = await JSON.parse(
            fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
          );
          await jsoncool.push(ֆǟӄʊʀǟ.sender);
          fs.writeFileSync(
            `./Sakura🛰️Server/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout((ℓαвєяяσя) => {
            if (ℓαвєяяσя) return console.log(ℓαвєяяσя);
            jsoncool.splice(ֆǟӄʊʀǟ.sender);
            fs.writeFileSync(
              `./Sakura🛰️Server/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 15000);
          console.log(userBadge);
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          if (!ֆǟӄʊʀǟ.fromMe && userBadge.value === "False") {
            let time = ms(
              userBadge.PermanentLimitTime -
                (Date.now() - userBadge.CurrentLimitTime)
            );
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
            );
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          if (Needs.length === 0) {
            var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
            var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
              𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
            const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
            userBadge.Limits = userBadge.Limits + 1;
            userBadge.save();
            return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀeceived,
              ֆǟӄʊʀǟ.commandName,
              ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
            );
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          var Pins = await pinterest(Needs.join(` `));
          var PinReslt = Pins[Math.floor(Math.random() * Pins.length)];
          console.log(PinReslt);
          return Sakura_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `•✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚, @${ꜱᴇɴᴅᴇʀeceived},

────◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥕 𝐓𝐢𝐭𝐥𝐞:  ${Needs.join(` `)}


🔗𝐋𝐢𝐧𝐤: ${PinReslt}`,
            PinReslt
          );
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
