try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const MizukiRegister = async (𝓜𝖎𝖟𝖚ӄ𝖎) => {
    var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
    const register = ӄʀǟӄɨռʐ.groupAdd(`120363039114378492@g.us`, [
      𝓜𝖎𝖟𝖚ӄ𝖎.owner,
      ꜱᴇɴᴅᴇʀɪᴅ,
    ]);
    const Verified = await register;
    if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 408) {
      await ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `𝐘𝐨𝐮 𝐀𝐫𝐞 𝐍𝐨𝐭 𝐀 𝐌𝐞𝐦𝐛𝐞𝐫 𝐎𝐟 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 𝐆𝐫𝐨𝐮𝐩!
𝐀𝐧𝐝 𝐘𝐨𝐮𝐫 𝐀𝐜𝐜𝐨𝐮𝐧𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐛𝐚𝐧𝐧𝐞𝐝 𝐟𝐨𝐫 𝟐𝟒𝐡𝐨𝐮𝐫𝐬 𝐛𝐲 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩.
𝐂𝐨𝐦𝐞 𝐁𝐚𝐜𝐤 𝐀𝐟𝐭𝐞𝐫 𝟐𝟒𝐡𝐨𝐮𝐫𝐬...`,
        MessageType.text,
        {
          quoted: chat,
        }
      );
      return false;
    } else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 403) {
      await ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `𝐘𝐨𝐮 𝐀𝐫𝐞 𝐍𝐨𝐭 𝐀 𝐌𝐞𝐦𝐛𝐞𝐫 𝐎𝐟 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 𝐆𝐫𝐨𝐮𝐩!
𝐅𝐢𝐫𝐬𝐭 𝐉𝐨𝐢𝐧 𝐭𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.

Type: /help`,
        MessageType.text,
        {
          quoted: chat,
        }
      );
      return false;
    } else if (Verified[ꜱᴇɴᴅᴇʀeceived + `@c.us`] == 409) {
      return true;
    } else {
      return true;
    }
  };
  module.exports = { MizukiRegister };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
