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
    ѕуηтнσяiα
      .axios({
        method: "get",
        url: "https://magneum.vercel.app/api/emotions?q=" + pfname,
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then(async (response) => {
        var mData = response.data;
        console.log(mData);
        if (!mData.meta.url) {
          await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
            react: {
              text: "❌",
              key: νℓкhat.key,
            },
          });
          return νℓкhat.reply(
            `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌ Error* 
> There has been an API Error. Please try again later.`
          );
        }
        resp = mData.resp.id + ".mp4";
        ѕуηтнσяiα.ffmpeg
          .input(mData.meta.url)
          .outputOptions([
            "-pix_fmt yuv420p",
            "-c:v libx264",
            "-movflags +faststart",
            "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
          ])
          .output(resp)
          .on("end", async () => {
            if (ѕуηтнσяiα.args[0] && ѕуηтнσяiα.args[0].startsWith("@")) {
              let mention = ѕуηтнσяiα.mentionByTag;
              let dataFor =
                (await mention[0]) || νℓкhat.msg.contextInfo.participant;
              return await ѕуηтнσяiα
                .sendMessage(
                  νℓкhat.chat,
                  {
                    gifPlayback: true,
                    video: ѕуηтнσяiα.fs.readFileSync(resp),
                    caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*🎋Feeling:* ${pfname}
*📢From:* ${ѕуηтнσяiα.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
                    mentions: [dataFor, νℓкhat.sender],
                  },
                  { quoted: νℓкhat }
                )
                .then(ѕуηтнσяiα.fs.unlinkSync(resp));
            } else if (ѕуηтнσяiα.mentionByReply) {
              let dataFor =
                νℓкhat.mtype == "extendedTextMessage" &&
                νℓкhat.message.extendedTextMessage.contextInfo != null
                  ? νℓкhat.message.extendedTextMessage.contextInfo
                      .participant || ""
                  : "";
              return await ѕуηтнσяiα
                .sendMessage(
                  νℓкhat.chat,
                  {
                    gifPlayback: true,
                    video: ѕуηтнσяiα.fs.readFileSync(resp),
                    caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*🎋Feeling:* ${pfname}
*📢From:* ${ѕуηтнσяiα.pushname}
*⚡For:* @${dataFor.split("@")[0] || ""}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
                    mentions: [dataFor, νℓкhat.sender],
                  },
                  { quoted: νℓкhat }
                )
                .then(ѕуηтнσяiα.fs.unlinkSync(resp));
            } else {
              return await ѕуηтнσяiα
                .sendMessage(
                  νℓкhat.chat,
                  {
                    gifPlayback: true,
                    video: ѕуηтнσяiα.fs.readFileSync(resp),
                    caption: `*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/xhadr\n\n
*⚡For:* ${ѕуηтнσяiα.pushname}
*🎋Feeling:* ${pfname}
> *Api Fetch Url:* https://magneum.vercel.app/api/emotions`,
                  },
                  { quoted: νℓкhat }
                )
                .then(ѕуηтнσяiα.fs.unlinkSync(resp));
            }
          })
          .on("error", (error) => console.log(error))
          .run();
      });
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
