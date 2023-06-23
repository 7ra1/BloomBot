require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    switch (true) {
      case !Sockey.isGroup:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*  
• _This command can only be used in groups!_`
        );

      case !(isAdmin || BloomBot.isSudo):
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _This is an admin/sudo-only command!_`
        );

      default:
        let imåge = "./app/public/mention.png";
        let buffer = Buffer.isBuffer(imåge)
          ? imåge
          : /^data:.*?\/.*?;base64,/i.test(imåge)
          ? Buffer.from(imåge.split(",")[1], "base64")
          : /^https?:\/\//.test(imåge)
          ? await BloomBot.getBuffer(imåge)
          : BloomBot.fs.existsSync(imåge)
          ? BloomBot.fs.readFileSync(imåge)
          : Buffer.alloc(0);

        let message = BloomBot.args
          ? BloomBot.args.join(" ")
          : "Attention Everyone";
        let caption = `*📢 Chat Id:* ${Sockey.chat}
*💫 Pinged By:* ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
*🕛 Time:* ${BloomBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
*📌 Message:* \n${message}`;

        await BloomBot.sendMessage(Sockey.chat, {
          image: buffer,
          caption,
          mentions: await participants.map((a) => a.id),
        }).catch((e) => console.log(e));
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = [
  "tagalls",
  "callall",
  "alltag",
  "allping",
  "groupall",
  "notifall",
  "massping",
  "crowdtag",
  "teamall",
  "groupmsg",
];
