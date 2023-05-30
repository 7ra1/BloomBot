//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var path = require("path");
var fileName = path.basename(__filename);
var feeling = fileName.slice(0, -3).toLowerCase();
module.exports = async (Nekobot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    // Fetch emotion data from the API
    var response = await Nekobot.magfetch(
      Nekobot,
      `https://magneum.vercel.app/api/emotions?q=${feeling}`
    );
    var magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      // Handle API error
      await Nekobot.sendMessage(Nekos.chat, {
        react: { text: "❌", key: Nekos.key },
      });
      return Nekos.reply(
        `*😥 Apologies:* _${Nekobot.pushname || Nekobot.Tname}_
*❌ Error*
> An API error has occurred. Please try again later.`
      );
    }
    var resultFilename = magData.resp.id + ".mp4";
    await Nekobot.ffmpeg
      .input(magData.meta.url)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .output(resultFilename)
      .on("end", async () => {
        var mentionedUser = "";
        if (Nekobot.args[0] && Nekobot.args[0].startsWith("@")) {
          // Check if a user is mentioned in the command arguments
          var mention = Nekobot.mentionByTag;
          mentionedUser =
            (await mention[0]) || Nekos.msg.contextInfo.participant;
        } else if (Nekobot.mentionByReply) {
          // Check if a user is mentioned by replying to their message
          mentionedUser =
            Nekos.mtype === "extendedTextMessage" &&
            Nekos.message.extendedTextMessage.contextInfo != null
              ? Nekos.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
        var message = `*Nekobot by magneum*
*💻HomePage:* https://bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${Nekobot.pushname}
*⚡for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
        // Send the generated video and caption to the chat
        await Nekobot.sendMessage(
          Nekos.chat,
          {
            gifPlayback: true,
            video: Nekobot.fs.readFileSync(resultFilename),
            caption: message,
            mentions: [mentionedUser, Nekos.sender],
          },
          { quoted: Nekos }
        );
        // Remove the generated video file
        Nekobot.fs.unlinkSync(resultFilename);
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    // Handle any errors that occur during the process
    return Nekobot.handlerror(Nekobot, Nekos, error);
  }
};
