try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const Mizuki_Buttons = require(`./Mizuki_Buttons`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const ꜰᴜᴄᴋ = require(`./oShit`);
  const fs = require(`fs`);
  const moment = require(`moment-timezone`);
  require(`python-format-js`);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  const time2 = moment().tz(`Asia/Kolkata`).format(`HH:mm:ss`);
  if (time2 < `24:59:00`) {
    var Timers = `𝐍𝐢𝐠𝐡𝐭😴`;
  }
  if (time2 < `19:00:00`) {
    var Timers = `𝐄𝐯𝐞𝐧𝐢𝐧𝐠🌞`;
  }
  if (time2 < `18:00:00`) {
    var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧🌄`;
  }
  if (time2 < `15:00:00`) {
    var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧☀️`;
  }
  if (time2 < `11:00:00`) {
    var Timers = `𝐌𝐨𝐫𝐧𝐢𝐧𝐠🌅`;
  }
  if (time2 < `05:00:00`) {
    var Timers = `𝐍𝐢𝐠𝐡𝐭💤`;
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = async (
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    ꜱᴇɴᴅᴇʀɪᴅ,
    ꜱᴇɴᴅᴇʀeceived,
    commandName,
    needs
  ) => {
    try {
      return Mizuki_Buttons.MTB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},  

┌────────▶ ⚠️𝐑𝐄𝐀𝐃 𝐇𝐎𝐖 𝐓𝐎 𝐔𝐒𝐄
│
│❗ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${commandName}
│❓ 𝐔𝐬𝐚𝐠𝐞: ${needs === undefined ? `null` : needs}`
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
    }
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
