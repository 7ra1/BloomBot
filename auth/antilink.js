// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../global.js");
exports.noLink = async (ѕуηтнσяiα, νℓкhat) => {
  let FetchCurrentGroupLink = await ѕуηтнσяiα.groupInviteCode(νℓкhat.chat);
  let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
  let isGroupLink = GroupLinkRegex.exec(ѕуηтнσяiα.budy);
  let PresentGroupLink = new RegExp(
    `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
    "i"
  );
  let isCurrentGroupLink = PresentGroupLink.test(ѕуηтнσяiα.budy);
  if (isGroupLink && !isCurrentGroupLink) {
    await ѕуηтнσяiα
      .groupParticipantsUpdate(νℓкhat.chat, [ѕуηтнσяiα.sender], "remove")
      .catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${ѕуηтнσяiα.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: ѕуηтнσяiα.quoted.id,
        participant: ѕуηтнσяiα.quoted.sender,
      },
    });
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (
    ѕуηтнσяiα.budy.includes("https://t.me/") &&
    ѕуηтнσяiα.budy.includes("discord.gg") &&
    ѕуηтнσяiα.budy.includes("discord.com") &&
    ѕуηтнσяiα.budy.includes("/t.me/") &&
    ѕуηтнσяiα.budy.includes("wa.me/") &&
    ѕуηтнσяiα.budy.includes("www.")
  ) {
    await ѕуηтнσяiα
      .groupParticipantsUpdate(νℓкhat.chat, [ѕуηтнσяiα.sender], "remove")
      .catch((error) => ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error));
    await νℓкhat.reply(
      `*😥Sorry:* _${ѕуηтнσяiα.pushname}_
*KryZen❌Anti-Link*
> _Kicked! One Less MoFo!_`
    );
    return await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
      delete: {
        remoteJid: νℓкhat.chat,
        fromMe: false,
        id: ѕуηтнσяiα.quoted.id,
        participant: ѕуηтнσяiα.quoted.sender,
      },
    });
  } else {
  }
};
