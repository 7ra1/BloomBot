// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    var JworkR = ѕуηтнσяiα.Jwork[Math.floor(Math.random() * ѕуηтнσяiα.Jwork.length)];
    ѕуηтнσяiα.Economy.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
        }

        if (!userEco) {
          new ѕуηтнσяiα.Economy({
            ID: νℓкhat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: Date.now(),
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
            });
          return await ѕуηтнσяiα.imgB(
            ѕуηтнσяiα,
            νℓкhat,
            `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
            "./src/synthoria.jpg"
          );
        } else {
          if (userEco.worktimeout - (Date.now() - userEco.workdone) > 0) {
            let time = ѕуηтнσяiα.ms(
              userEco.worktimeout - (Date.now() - userEco.workdone)
            );
            return await ѕуηтнσяiα.imgB(
              ѕуηтнσяiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
❌ 𝗘𝗿𝗿𝗼𝗿: _You have already worked recently._ 
🕐 𝗪𝗼𝗿𝗸_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              "./src/synthoria.jpg"
            );
          } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            userEco.money = userEco.money + amount;
            userEco.workdone = Date.now();
            userEco.worktimeout = 900000;
            userEco.save().catch((error) => {
              return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
            });
            return await ѕуηтнσяiα.imgB(
              ѕуηтнσяiα,
              νℓкhat,
              `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
👔𝗪𝗼𝗿𝗸_𝗦𝘁𝗮𝘁𝘂𝘀: ${JworkR}.
🪙𝗘𝗮𝗿𝗻𝗲𝗱: ${amount}`,
              "./src/synthoria.jpg"
            );
          }
        }
      }
    );
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
