//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
let { proto, getContentType } = require("@adiwajshing/baileys");
let { sizeFormatter } = require("human-readable");
let child_process = require("child_process");
let moment = require("moment-timezone");
let { unlink } = require("fs").promises;
let chalk = require("chalk");
let axios = require("axios");
let util = require("util");
let fs = require("fs");

let unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
  let tag = (0, exports.unixTimestampSeconds)().toString();
  if (epoch) tag += ".--" + epoch;
  return tag;
};

exports.processTime = (timestamp, now) => {
  return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.getBuffer = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.fetchJson = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.runtime = function (seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let ᴠᴏxᴄ = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);
  let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  let mDisplay =
    ᴠᴏxᴄ > 0 ? ᴠᴏxᴄ + (ᴠᴏxᴄ == 1 ? " minute, " : " minutes, ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  let ᴠᴏxᴄ = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, ᴠᴏxᴄ, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

exports.sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
};

exports.getTime = (format, date) => {
  if (date) {
    return moment(date).locale("id").format(format);
  } else {
    return moment.tz("Asia/Jakarta").locale("id").format(format);
  }
};

exports.formatDate = (n, locale = "id") => {
  let d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

exports.formatp = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2);
};

function format(...args) {
  return util.format(...args);
}

exports.logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

exports.generateProfilePicture = async (buffer) => {
  let jimp = await jimp_1.read(buffer);
  let min = jimp.getWidth();
  let max = jimp.getHeight();
  let cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};

exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  let k = 1024;
  let dm = decimals < 0 ? 0 : decimals;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        let length = parseInt(res.headers["content-length"]);
        let size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      let length = Buffer.byteLength(path);
      let size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};

exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};

exports.GIFBufferToVideoBuffer = async (image) => {
  let filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./Bin/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Bin/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Bin/${filename}.mp4`
  );
  await sleep(4000);

  let buffer5 = await fs.readFileSync(`./Bin/${filename}.mp4`);
  Promise.all([
    unlink(`./Bin/${filename}.mp4`),
    unlink(`./Bin/${filename}.gif`),
  ]);
  return buffer5;
};

exports.νkmake = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, store) => {
  if (!ᴠᴏxᴄ) return ᴠᴏxᴄ;
  let νproto = proto.WebMessageInfo;
  if (ᴠᴏxᴄ.key) {
    ᴠᴏxᴄ.id = ᴠᴏxᴄ.key.id;
    ᴠᴏxᴄ.isBaileys = ᴠᴏxᴄ.id.startsWith("BAE5") && ᴠᴏxᴄ.id.length === 16;
    ᴠᴏxᴄ.chat = ᴠᴏxᴄ.key.remoteJid;
    ᴠᴏxᴄ.fromMe = ᴠᴏxᴄ.key.fromMe;
    ᴠᴏxᴄ.isGroup = ᴠᴏxᴄ.chat.endsWith("@g.us");
    ᴠᴏxᴄ.sender = ꪜᴏxʙᴏᴛ.decodeJid(
      (ᴠᴏxᴄ.fromMe && ꪜᴏxʙᴏᴛ.user.id) ||
        ᴠᴏxᴄ.participant ||
        ᴠᴏxᴄ.key.participant ||
        ᴠᴏxᴄ.chat ||
        ""
    );
    if (ᴠᴏxᴄ.isGroup)
      ᴠᴏxᴄ.participant = ꪜᴏxʙᴏᴛ.decodeJid(ᴠᴏxᴄ.key.participant) || "";
  }
  if (ᴠᴏxᴄ.message) {
    ᴠᴏxᴄ.mtype = getContentType(ᴠᴏxᴄ.message);
    ᴠᴏxᴄ.msg =
      ᴠᴏxᴄ.mtype == "viewOnceMessage"
        ? ᴠᴏxᴄ.message[ᴠᴏxᴄ.mtype].message[
            getContentType(ᴠᴏxᴄ.message[ᴠᴏxᴄ.mtype].message)
          ]
        : ᴠᴏxᴄ.message[ᴠᴏxᴄ.mtype];
    ᴠᴏxᴄ.body =
      ᴠᴏxᴄ.message.conversation ||
      ᴠᴏxᴄ.msg.caption ||
      ᴠᴏxᴄ.msg.text ||
      (ᴠᴏxᴄ.mtype == "listResponseMessage" &&
        ᴠᴏxᴄ.msg.singleSelectReply.selectedRowId) ||
      (ᴠᴏxᴄ.mtype == "buttonsResponseMessage" && ᴠᴏxᴄ.msg.selectedButtonId) ||
      (ᴠᴏxᴄ.mtype == "viewOnceMessage" && ᴠᴏxᴄ.msg.caption) ||
      ᴠᴏxᴄ.text;
    let quoted = (ᴠᴏxᴄ.quoted = ᴠᴏxᴄ.msg.contextInfo
      ? ᴠᴏxᴄ.msg.contextInfo.quotedMessage
      : null);
    ᴠᴏxᴄ.mentionedJid = ᴠᴏxᴄ.msg.contextInfo
      ? ᴠᴏxᴄ.msg.contextInfo.mentionedJid
      : [];
    if (ᴠᴏxᴄ.quoted) {
      let type = getContentType(quoted);
      ᴠᴏxᴄ.quoted = ᴠᴏxᴄ.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(ᴠᴏxᴄ.quoted);
        ᴠᴏxᴄ.quoted = ᴠᴏxᴄ.quoted[type];
      }
      if (typeof ᴠᴏxᴄ.quoted === "string")
        ᴠᴏxᴄ.quoted = {
          text: ᴠᴏxᴄ.quoted,
        };
      ᴠᴏxᴄ.quoted.mtype = type;
      ᴠᴏxᴄ.quoted.id = ᴠᴏxᴄ.msg.contextInfo.stanzaId;
      ᴠᴏxᴄ.quoted.chat = ᴠᴏxᴄ.msg.contextInfo.remoteJid || ᴠᴏxᴄ.chat;
      ᴠᴏxᴄ.quoted.isBaileys = ᴠᴏxᴄ.quoted.id
        ? ᴠᴏxᴄ.quoted.id.startsWith("BAE5") && ᴠᴏxᴄ.quoted.id.length === 16
        : false;
      ᴠᴏxᴄ.quoted.sender = ꪜᴏxʙᴏᴛ.decodeJid(ᴠᴏxᴄ.msg.contextInfo.participant);
      ᴠᴏxᴄ.quoted.fromMe =
        ᴠᴏxᴄ.quoted.sender === (ꪜᴏxʙᴏᴛ.user && ꪜᴏxʙᴏᴛ.user.id);
      ᴠᴏxᴄ.quoted.text =
        ᴠᴏxᴄ.quoted.text ||
        ᴠᴏxᴄ.quoted.caption ||
        ᴠᴏxᴄ.quoted.conversation ||
        ᴠᴏxᴄ.quoted.contentText ||
        ᴠᴏxᴄ.quoted.selectedDisplayText ||
        ᴠᴏxᴄ.quoted.title ||
        "";
      ᴠᴏxᴄ.quoted.mentionedJid = ᴠᴏxᴄ.msg.contextInfo
        ? ᴠᴏxᴄ.msg.contextInfo.mentionedJid
        : [];
      ᴠᴏxᴄ.getQuotedObj = ᴠᴏxᴄ.getQuotedMessage = async () => {
        if (!ᴠᴏxᴄ.quoted.id) return false;
        let q = await store.loadMessage(ᴠᴏxᴄ.chat, ᴠᴏxᴄ.quoted.id, ꪜᴏxʙᴏᴛ);
        return exports.νkmake(ꪜᴏxʙᴏᴛ, q, store);
      };
      let vM = (ᴠᴏxᴄ.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: ᴠᴏxᴄ.quoted.chat,
          fromMe: ᴠᴏxᴄ.quoted.fromMe,
          id: ᴠᴏxᴄ.quoted.id,
        },
        message: quoted,
        ...(ᴠᴏxᴄ.isGroup ? { participant: ᴠᴏxᴄ.quoted.sender } : {}),
      }));
      ᴠᴏxᴄ.quoted.delete = () =>
        ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.quoted.chat, { delete: vM.key });
      ᴠᴏxᴄ.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        ꪜᴏxʙᴏᴛ.copyNForward(jid, vM, forceForward, options);
      ᴠᴏxᴄ.quoted.download = () => ꪜᴏxʙᴏᴛ.downloadMediaMessage(ᴠᴏxᴄ.quoted);
    }
  }

  if (ᴠᴏxᴄ.msg.url) ᴠᴏxᴄ.download = () => ꪜᴏxʙᴏᴛ.downloadMediaMessage(ᴠᴏxᴄ.msg);
  ᴠᴏxᴄ.text =
    ᴠᴏxᴄ.msg.text ||
    ᴠᴏxᴄ.msg.caption ||
    ᴠᴏxᴄ.message.conversation ||
    ᴠᴏxᴄ.msg.contentText ||
    ᴠᴏxᴄ.msg.selectedDisplayText ||
    ᴠᴏxᴄ.msg.title ||
    "";
  ᴠᴏxᴄ.reply = (text, chatId = ᴠᴏxᴄ.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? ꪜᴏxʙᴏᴛ.sendMedia(chatId, text, "file", "", ᴠᴏxᴄ, { ...options })
      : ꪜᴏxʙᴏᴛ.sendText(chatId, text, ᴠᴏxᴄ, { ...options });
  ᴠᴏxᴄ.copy = () =>
    exports.νkmake(ꪜᴏxʙᴏᴛ, νproto.fromObject(νproto.toObject(ᴠᴏxᴄ)));
  ᴠᴏxᴄ.copyNForward = (jid = ᴠᴏxᴄ.chat, forceForward = false, options = {}) =>
    ꪜᴏxʙᴏᴛ.copyNForward(jid, ᴠᴏxᴄ, forceForward, options);

  return ᴠᴏxᴄ;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
