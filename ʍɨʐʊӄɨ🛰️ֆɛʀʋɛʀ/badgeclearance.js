`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`./Mizuki_Buttons`);
const Mizuki_Static = require(`./Mizuki_Static`);
const Bagde = require(`../Mizuki🍃Goose/Badge`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const ms = require("parse-ms");
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const clearance = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
  Bagde.findOne(
    {
      ID: ꜱᴇɴᴅᴇʀeceived,
    },
    async (err, user) => {
      if (err) console.log(err);
      if (!user) {
        var newUser = new Bagde({
          ID: ꜱᴇɴᴅᴇʀeceived,
          Badge: "🧵ʙᴀꜱɪᴄ",
          Limits: 10,
          CurrentLimitTime: Date.now(),
          PermanentLimitTime: 60000,
        });
        newUser.save();
        Mizuki_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `
╔════════════╗
║⚔️ 𝗕𝗮𝗱𝗴𝗲: _🧵ʙᴀꜱɪᴄ_
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: _10 commands_
╚════════════╝`
        );
        return true;
      } else {
        console.log(user);
        var clock =
          user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime);
        let time = ms(
          user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime)
        );
        console.log(clock);
        console.log(time);
        if (clock > 0 && user.Limits == 0) {
          Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: _${user.Badge}_
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: _${user.Limits}commands_
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: _${time.hours}h|${time.minutes}m|${time.seconds}s|${time.milliseconds}ms_
╚════════════╝`
          );
          return false;
        }
        if (clock > 0 && !user.Limits == 0) {
          user.Limits = user.Limits - 1;
          user.save();
          Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `
╔════════════╗
║⚔️ 𝗕𝗮𝗱𝗴𝗲: _${user.Badge}_
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: _${user.Limits}commands_
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: _${time.hours}h|${time.minutes}m|${time.seconds}s|${time.milliseconds}ms_
╚════════════╝`
          );
          return true;
        }
        if (clock < 0 && user.Limits == 0) {
          if (user.Badge === "🧵ʙᴀꜱɪᴄ") {
            user.Limits = 10;
          } else if (user.Badge === "🥉ʙʀᴏɴᴢᴇ") {
            user.Limits = 20;
          } else if (user.Badge === "🥈ꜱɪʟᴠᴇʀ") {
            user.Limits = 40;
          } else if (user.Badge === "🥇ɢᴏʟᴅ") {
            user.Limits = 60;
          } else if (user.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ") {
            user.Limits = 80;
          } else if (user.Badge === "💎ᴅɪᴀᴍᴏɴᴅ") {
            user.Limits = 100;
          }
          user.CurrentLimitTime = Date.now();
          user.save();
          Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `
╔════════════╗
║⚔️ 𝗕𝗮𝗱𝗴𝗲: _${user.Badge}_
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: _${user.Limits}commands_
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: _${time.hours}h|${time.minutes}m|${time.seconds}s|${time.milliseconds}ms_
╚════════════╝`
          );
          return true;
        }
      }
    }
  );
};
module.exports = clearance;
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
