//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const logger = require("./logger");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
require("./global.js");
var {
  default: νℓкуяє_вσт,
  DisconnectReason,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  makeInMemoryStore,
  MessageRetryMap,
  jidDecode,
  proto,
} = require("@adiwajshing/baileys");
var fs = require("fs");
var path = require("path");
var pino = require("pino");
var express = require("express");
var monGoose = require("mongoose");
const git = require("simple-git")();
var { Boom } = require("@hapi/boom");
var bodyParser = require("body-parser");
var dboard = require("./database/dashboard");
let PhoneNumber = require("awesome-phonenumber");
var { useRemoteFileAuthState } = require("./auth/Database");
var { νkmake, fetchJson, getBuffer, getSizeMedia } = require("./server/myfunc");

async function mågneum() {
  await monGoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((error) => {
      logger.error("❌: Unable to Connect with Mongoose.");
      logger.error(error);
    })
    .then(logger.info("🐲: Connected with Mongoose."));
  var νℓpage = express();
  var sequelize = DATABASE;
  var store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  var getVersionWaweb = () => {
    var version;
    try {
      var a = fetchJson(
        "https://web.whatsapp.com/check-update?version=1&platform=web"
      );
      version = [a.currentVersion.replace(/[.]/g, ", ")];
    } catch {
      version = [2, 2204, 13];
    }
    return version;
  };
  var msgRetryCounterMap = MessageRetryMap;
  const gitPull = async () => {
    await git.fetch();
    let newCommits = await git.log(["magneum..origin/magneum"]);
    if (newCommits.total) {
      logger.info("🐲: Auto Updating...");
      require("child_process").exec(
        "git stash push --include-untracked && git stash drop"
      );
      await git.pull("origin", "magneum", (err, update) => {
        if (update && update.summary.changes) {
          if (update.files.includes("package.json"))
            require("child_process")
              .exec("yarn install --ignore-engines")
              .stderr.pipe(process.stderr);
          console.clear();
          logger.info("🐲: Updated the bot with latest changes.");
          logger.info(
            "🐲: Please restart the bot manually if it doesn't auto-restart."
          );
          process.exit(0);
        } else if (err) {
          logger.error("❌: Could not pull latest changes!");
          logger.info(err);
        }
      });
    }
  };

  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  νℓpage.engine("html", require("ejs").renderFile);
  νℓpage.use(express.static("./views"));
  νℓpage.set("view engine", "html");
  νℓpage.set("views", __dirname);
  νℓpage.get("/", (request, response) => {
    response.redirect("https://bit.ly/magneum");
  });
  νℓpage.get("/voxbot", (request, response) => {
    response.sendFile("views/voxbot.html", { root: __dirname });
  });
  νℓpage.post("/voxbot", urlencodedParser, (request, response) => {
    var phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        ID: phoneNum + "@s.whatsapp.net",
      },
      async (error, uBoard) => {
        if (error) return logger.error("❌:", error);
        if (!uBoard) return response.sendFile(__dirname + "/views/nodb.html");
        response.render(__dirname + "/views/dashboard.html", {
          uBoard: uBoard,
        });
      }
    );
  });
  νℓpage.listen(PORT, logger.info("VLKYRE: started at port: " + PORT));

  await sequelize.sync();
  const { state, saveCreds } = await useRemoteFileAuthState();
  var ꪜᴏxʙᴏᴛ = νℓкуяє_вσт({
    auth: state,
    msgRetryCounterMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: [process.env.deployer || "voxbot-by-magneum", "Chrome", "4.0.0"],
    version: getVersionWaweb() || [2, 2242, 6],
    fireInitQueries: false,
    downloadHistory: false,
    syncFullHistory: false,
    shouldSyncHistoryMessage: false,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return {
        conversation: "An Error Occurred, Repeat Command!",
      };
    },
  });
  store.bind(ꪜᴏxʙᴏᴛ.ev);

  // ꪜᴏxʙᴏᴛ.ev.on("creds.update", (update) =>
  // require("./events/creds.update")(update)
  // );
  // ꪜᴏxʙᴏᴛ.ev.on("connection.update", (update) =>
  // require("./events/connection.update")(ꪜᴏxʙᴏᴛ, update, store, mågneum)
  // );
  // ꪜᴏxʙᴏᴛ.ev.on("messages.upsert", (update) =>
  // require("./events/messages.upsert")(ꪜᴏxʙᴏᴛ, update, store)
  // );
  // ꪜᴏxʙᴏᴛ.ev.on("group-participants.update", (update) =>
  // require("./events/group-participants.update")(ꪜᴏxʙᴏᴛ, update, store)
  // );
  // ꪜᴏxʙᴏᴛ.ev.on("contacts.update", (update) =>
  // require("./events/contacts.update")(ꪜᴏxʙᴏᴛ, update, store)
  // );
  // ꪜᴏxʙᴏᴛ.ws.on("CB:call", (update) =>
  // require("./events/cb_call")(ꪜᴏxʙᴏᴛ, update, store)
  // );

  ꪜᴏxʙᴏᴛ.ev.on("creds.update", async (update) => await saveCreds());
  ꪜᴏxʙᴏᴛ.ev.on("connection.update", async (update) => {
    const {
      lastDisconnect,
      connection,
      isNewLogin,
      isOnline,
      qr,
      receivedPendingNotifications,
    } = update;
    if (connection == "connecting")
      logger.info("🐲: Connecting to WhatsApp...▶");
    else if (connection == "open") logger.info("🐲: Login successful! ▶");
    else if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        logger.error(
          `❌: Bad Session File, Please Delete Session and Scan Again`
        );
        ꪜᴏxʙᴏᴛ.logout();
      } else if (reason === DisconnectReason.connectionClosed) {
        logger.error("❌: Connection closed, reconnecting....");
        await mågneum();
      } else if (reason === DisconnectReason.connectionLost) {
        logger.error("❌: Connection Lost from Server, reconnecting...");
        await mågneum();
      } else if (reason === DisconnectReason.connectionReplaced) {
        logger.error(
          "❌: Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
        ꪜᴏxʙᴏᴛ.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        logger.error(`❌: Device Logged Out, Please Scan Again And Run.`);
        process.exit(0);
      } else if (reason === DisconnectReason.restartRequired) {
        logger.error("❌: Restart Required, Restarting...");
        await mågneum();
      } else if (reason === DisconnectReason.timedOut) {
        logger.error("❌: Connection TimedOut, Reconnecting...");
        await mågneum();
      } else
        ꪜᴏxʙᴏᴛ.end(
          logger.error(`❌: Unknown DisconnectReason: ${reason}|${connection}`)
        );
    } else if (isOnline === true) logger.debug("🐲: Online.");
    else if (isOnline === false) logger.error("🐲: Offine.");
    else if (receivedPendingNotifications === true)
      logger.debug("🐲: Received Pending Notifications.");
    else if (receivedPendingNotifications === false)
      logger.error("🐲: Not Received Pending Notifications.");
    else if (isNewLogin === true) logger.debug("🐲: New Login.");
    else if (isNewLogin === false) logger.error("🐲: Not New Login.");
    else if (qr) logger.info("Qr: "), console.log(qr);
    else logger.info("🐲: Connection...", update);
  });

  ꪜᴏxʙᴏᴛ.ev.on("messages.upsert", async (update) => {
    νTēxt = update.messages[0];
    if (!νTēxt.message) return;
    νTēxt.message =
      Object.keys(νTēxt.message)[0] === "ephemeralMessage"
        ? νTēxt.message.ephemeralMessage.message
        : νTēxt.message;
    if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
    if (!ꪜᴏxʙᴏᴛ.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    ᴠᴏxᴄ = await νkmake(ꪜᴏxʙᴏᴛ, νTēxt, store);
    await require("./server/router.js")(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store);
  });

  ꪜᴏxʙᴏᴛ.ev.on("group-participants.update", async (update) => {
    let metadata = await ꪜᴏxʙᴏᴛ.groupMetadata(update.id);
    let participants = update.participants;
    logger.info(update);
    for (let sperson of participants) {
      var imåge;
      try {
        imåge = await ꪜᴏxʙᴏᴛ.profilePictureUrl(sperson, "image");
      } catch {
        imåge = "./src/ꪜᴏxʙᴏᴛ.jpg";
      }

      if (update.action == "add") {
        return await ꪜᴏxʙᴏᴛ
          .sendMessage(
            update.id,
            {
              image: { url: imåge },
              caption: `*🕊️You:* @${sperson.replace(/['@s whatsapp.net']/g, "")}
  *📢ID:* ${update.id}

  > Firstly Welcome.
  > I am Synthia Whatsapp Bot.
  > To Start using type .help or press below buttons.`,
              footer:
                "*VLkyre™ By xhadr*\n*💻HomePage:* https://bit.ly/magneum",
              buttons: [
                {
                  buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard`,
                  buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Dashboard` },
                  type: 1,
                },
                {
                  buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Synthia`,
                  buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}Synthia` },
                  type: 1,
                },
              ],
              headerType: 4,
              mentions: [sperson],
            },
            {
              contextInfo: { mentionedJid: [sperson] },
            }
          )
          .catch((error) => logger.error(error));
      } else if (update.action == "remove") {
        return;
      } else {
        return;
      }
    }
  });

  ꪜᴏxʙᴏᴛ.ws.on("CB:call", async (update) => {
    const sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    var callerId = update.content[0].attrs["call-creator"];
    let person = await ꪜᴏxʙᴏᴛ.sendContact(callerId, global.owner);
    ꪜᴏxʙᴏᴛ.sendMessage(
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
    await ꪜᴏxʙᴏᴛ.updateBlockStatus(callerId, "block");
  });

  ꪜᴏxʙᴏᴛ.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = ꪜᴏxʙᴏᴛ.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });

  ꪜᴏxʙᴏᴛ.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  ꪜᴏxʙᴏᴛ.getName = (jid, withoutContact = false) => {
    id = ꪜᴏxʙᴏᴛ.decodeJid(jid);
    withoutContact = ꪜᴏxʙᴏᴛ.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = ꪜᴏxʙᴏᴛ.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === ꪜᴏxʙᴏᴛ.decodeJid(ꪜᴏxʙᴏᴛ.user.id)
          ? ꪜᴏxʙᴏᴛ.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  ꪜᴏxʙᴏᴛ.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await ꪜᴏxʙᴏᴛ.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ꪜᴏxʙᴏᴛ.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await ꪜᴏxʙᴏᴛ.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  ꪜᴏxʙᴏᴛ.public = true;
  ꪜᴏxʙᴏᴛ.serializeM = (ᴠᴏxᴄ) => νkmake(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, store);

  ꪜᴏxʙᴏᴛ.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: ꪜᴏxʙᴏᴛ.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      ᴠᴏxᴄ.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    ꪜᴏxʙᴏᴛ.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  ꪜᴏxʙᴏᴛ.sendButtonText = (
    jid,
    buttons = [],
    text,
    footer,
    quoted = "",
    options = {}
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
    ꪜᴏxʙᴏᴛ.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  ꪜᴏxʙᴏᴛ.sendText = (jid, text, quoted = "", options) =>
    ꪜᴏxʙᴏᴛ.sendMessage(jid, { text: text, ...options }, { quoted });

  ꪜᴏxʙᴏᴛ.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  ꪜᴏxʙᴏᴛ.sendVideo = async (
    jid,
    path,
    caption = "",
    quoted = "",
    gif = false,
    options
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  ꪜᴏxʙᴏᴛ.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  ꪜᴏxʙᴏᴛ.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

  ꪜᴏxʙᴏᴛ.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }

    await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  ꪜᴏxʙᴏᴛ.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }

    await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  ꪜᴏxʙᴏᴛ.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    var stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (var chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  ꪜᴏxʙᴏᴛ.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    var stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (var chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
  };

  ꪜᴏxʙᴏᴛ.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await ꪜᴏxʙᴏᴛ.getFile(path, true);
    let { mime, ext, response, data, filename } = types;
    if ((response && response.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require("./server/exif");
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await ꪜᴏxʙᴏᴛ.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  ꪜᴏxʙᴏᴛ.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {}
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }

    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    var waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await ꪜᴏxʙᴏᴛ.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  ꪜᴏxʙᴏᴛ.cMod = (
    jid,
    copy,
    text = "",
    sender = ꪜᴏxʙᴏᴛ.user.id,
    options = {}
  ) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral
      ? copy.message.ephemeralMessage.message
      : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === ꪜᴏxʙᴏᴛ.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  ꪜᴏxʙᴏᴛ.getFile = async (PATH, save) => {
    let response;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (response = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".Bin",
    };
    filename = path.join(
      __filename,
      "../Bin/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      response,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  setInterval(async () => {
    var _Type = [
      "🎭designer",
      "🌏inventor",
      "🎨creator",
      "🎉founder",
      "🐞innovator",
      "🏗️builder",
      "🖊️author",
      "💡maker",
    ];
    var __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
    await ꪜᴏxʙᴏᴛ.updateProfileStatus(
      "Feeling: " + __Feeling + "  :voxbot by magneum"
    );
    await gitPull();
  }, 1000 * 10);
}
mågneum().catch((error) => logger.error(error));
