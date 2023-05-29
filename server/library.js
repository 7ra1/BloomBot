//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (Foxbot, Foxchat, update, store) => {
  var gmeta = Foxchat.isGroup
    ? await Foxbot.groupMetadata(Foxchat.chat).catch((error) => {})
    : "";
  var groupName = Foxchat.isGroup ? gmeta.subject : "";
  var participants = Foxchat.isGroup ? await gmeta.participants : "";
  var groupAdmins = Foxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  var groupOwner = Foxchat.isGroup ? gmeta.owner : "";
  var isbotAdmin = Foxchat.isGroup
    ? groupAdmins.includes(await Foxbot.decodeJid(Foxbot.user.id))
    : false;
  var isAdmin = Foxchat.isGroup ? groupAdmins.includes(Foxchat.sender) : false;

  var vbody =
    Foxchat.mtype === "conversation"
      ? Foxchat.message.conversation
      : Foxchat.mtype == "imageMessage"
      ? Foxchat.message.imageMessage.caption
      : Foxchat.mtype == "videoMessage"
      ? Foxchat.message.videoMessage.caption
      : Foxchat.mtype == "extendedTextMessage"
      ? Foxchat.message.extendedTextMessage.text
      : Foxchat.mtype == "buttonsResponseMessage"
      ? Foxchat.message.buttonsResponseMessage.selectedButtonId
      : Foxchat.mtype == "listResponseMessage"
      ? Foxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Foxchat.mtype == "templateButtonReplyMessage"
      ? Foxchat.message.templateButtonReplyMessage.selectedId
      : Foxchat.mtype === "messageContextInfo"
      ? Foxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Foxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Foxchat.text
      : "";
  var vcommand = vbody
    .replace(Foxbot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();
  console.log(
    "\n◎✕———————————————————————✕ Foxbot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    Foxbot.chalk.blueBright("🖊️COMMANDS: "),
    Foxbot.chalk.green(vcommand)
  );
  console.log(
    Foxbot.chalk.blueBright("🖊️MESSAGE: "),
    Foxbot.chalk.green(vbody)
  );
  console.log(
    Foxbot.chalk.blueBright("❣️USER_NAME: "),
    Foxbot.chalk.green(Foxbot.pushname)
  );
  console.log(
    Foxbot.chalk.blueBright("📱USER_NUMBER: "),
    Foxbot.chalk.green(Foxchat.sender)
  );
  console.log(
    Foxbot.chalk.blueBright("💬CHAT_Id: "),
    Foxbot.chalk.green(Foxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ Foxbot by magneum ✕———————————————————————✕◎\n"
  );
  switch (vcommand) {
    case "help":
    case "list":
    case "list":
    case "Help":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.list = updatedb.list + 1;
        require("../models/⚙️System/help")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "dashboard":
    case "Dashboard":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.dashboard = updatedb.dashboard + 1;
        require("../models/⚙️System/dashboard")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "yta":
    case "play":
    case "song":
    case "sing":
    case "ytmp3":
    case "music":
    case "ytplay":
    case "ytaudio":
    case "ytmusic":
    case "youtubemusic":
    case "ytv":
    case "watch":
    case "stream":
    case "ytmp4":
    case "video":
    case "ytwatch":
    case "ytvideo":
    case "youtubevideo":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytaudio = updatedb.ytaudio + 1;
        require("../models/📥Downloader/ytaudio")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bite":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bite = updatedb.bite + 1;
        require("../models/🐉Emotions/bite")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "blush":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.blush = updatedb.blush + 1;
        require("../models/🐉Emotions/blush")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bonk":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bonk = updatedb.bonk + 1;
        require("../models/🐉Emotions/bonk")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bored":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bored = updatedb.bored + 1;
        require("../models/🐉Emotions/bored")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "confused":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.confused = updatedb.confused + 1;
        require("../models/🐉Emotions/confused")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "cry":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.cry = updatedb.cry + 1;
        require("../models/🐉Emotions/cry")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "cuddle":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.cuddle = updatedb.cuddle + 1;
        require("../models/🐉Emotions/cuddle")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "dance":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.dance = updatedb.dance + 1;
        require("../models/🐉Emotions/dance")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "goodnight":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.goodnight = updatedb.goodnight + 1;
        require("../models/🐉Emotions/goodnight")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "happy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.happy = updatedb.happy + 1;
        require("../models/🐉Emotions/happy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "highfive":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.highfive = updatedb.highfive + 1;
        require("../models/🐉Emotions/highfive")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "hug":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.hug = updatedb.hug + 1;
        require("../models/🐉Emotions/hug")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "kill":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.kill = updatedb.kill + 1;
        require("../models/🐉Emotions/kill")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "kiss":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.kiss = updatedb.kiss + 1;
        require("../models/🐉Emotions/kiss")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nervous":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nervous = updatedb.nervous + 1;
        require("../models/🐉Emotions/nervous")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pat":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pat = updatedb.pat + 1;
        require("../models/🐉Emotions/pat")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "poke":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.poke = updatedb.poke + 1;
        require("../models/🐉Emotions/poke")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "punch":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.punch = updatedb.punch + 1;
        require("../models/🐉Emotions/punch")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sad":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sad = updatedb.sad + 1;
        require("../models/🐉Emotions/sad")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "scream":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.scream = updatedb.scream + 1;
        require("../models/🐉Emotions/scream")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "slap":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.slap = updatedb.slap + 1;
        require("../models/🐉Emotions/slap")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "smile":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.smile = updatedb.smile + 1;
        require("../models/🐉Emotions/smile")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "stare":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.stare = updatedb.stare + 1;
        require("../models/🐉Emotions/stare")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "wave":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.wave = updatedb.wave + 1;
        require("../models/🐉Emotions/wave")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "wink":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.wink = updatedb.wink + 1;
        require("../models/🐉Emotions/wink")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "yeet":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.yeet = updatedb.yeet + 1;
        require("../models/🐉Emotions/yeet")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "yes":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.yes = updatedb.yes + 1;
        require("../models/🐉Emotions/yes")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "nsfwlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nsfwlist = updatedb.nsfwlist + 1;
        require("../models/💗Commands/nsfwlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sfwlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sfwlist = updatedb.sfwlist + 1;
        require("../models/💗Commands/sfwlist")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "animationlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.animationlist = updatedb.animationlist + 1;
        require("../models/💗Commands/animationlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "audiofilterlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.audiofilterlist = updatedb.audiofilterlist + 1;
        require("../models/💗Commands/audiofilterlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "conversionlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.conversionlist = updatedb.conversionlist + 1;
        require("../models/💗Commands/conversionlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "downloadlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.downloadlist = updatedb.downloadlist + 1;
        require("../models/💗Commands/downloadlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "gameslist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.gameslist = updatedb.gameslist + 1;
        require("../models/💗Commands/gameslist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "grouplist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.grouplist = updatedb.grouplist + 1;
        require("../models/💗Commands/grouplist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "hentailist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.hentailist = updatedb.hentailist + 1;
        require("../models/💗Commands/hentailist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ownerlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ownerlist = updatedb.ownerlist + 1;
        require("../models/💗Commands/ownerlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "photolist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.photolist = updatedb.photolist + 1;
        require("../models/💗Commands/photolist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "searchlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.searchlist = updatedb.searchlist + 1;
        require("../models/💗Commands/searchlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytfilterlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytfilterlist = updatedb.ytfilterlist + 1;
        require("../models/💗Commands/ytfilterlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bassboost":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bassboost = updatedb.bassboost + 1;
        require("../models/📢aFilter/bassboost")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "echo":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.echo = updatedb.echo + 1;
        require("../models/📢aFilter/echo")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "flanger":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.flanger = updatedb.flanger + 1;
        require("../models/📢aFilter/flanger")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nightcore":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nightcore = updatedb.nightcore + 1;
        require("../models/📢aFilter/nightcore")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "phaser":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.phaser = updatedb.phaser + 1;
        require("../models/📢aFilter/phaser")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "reverse":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.reverse = updatedb.reverse + 1;
        require("../models/📢aFilter/reverse")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "slow":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.slow = updatedb.slow + 1;
        require("../models/📢aFilter/slow")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "speed":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.speed = updatedb.speed + 1;
        require("../models/📢aFilter/speed")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "subboost":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.subboost = updatedb.subboost + 1;
        require("../models/📢aFilter/subboost")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "superslow":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.superslow = updatedb.superslow + 1;
        require("../models/📢aFilter/superslow")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "superspeed":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.superspeed = updatedb.superspeed + 1;
        require("../models/📢aFilter/superspeed")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "surround":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.surround = updatedb.surround + 1;
        require("../models/📢aFilter/surround")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "vaporwave":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.vaporwave = updatedb.vaporwave + 1;
        require("../models/📢aFilter/vaporwave")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "vibrato":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.vibrato = updatedb.vibrato + 1;
        require("../models/📢aFilter/vibrato")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "panning":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.panning = updatedb.panning + 1;
        require("../models/📢aFilter/panning")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ytbassboost":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytbassboost = updatedb.ytbassboost + 1;
        require("../models/⭕YTFilter/ytbassboost")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytecho":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytecho = updatedb.ytecho + 1;
        require("../models/⭕YTFilter/ytecho")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytflanger":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytflanger = updatedb.ytflanger + 1;
        require("../models/⭕YTFilter/ytflanger")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytnightcore":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytnightcore = updatedb.ytnightcore + 1;
        require("../models/⭕YTFilter/ytnightcore")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytphaser":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytphaser = updatedb.ytphaser + 1;
        require("../models/⭕YTFilter/ytphaser")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytreverse":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytreverse = updatedb.ytreverse + 1;
        require("../models/⭕YTFilter/ytreverse")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytslow":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytslow = updatedb.ytslow + 1;
        require("../models/⭕YTFilter/ytslow")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytspeed":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytspeed = updatedb.ytspeed + 1;
        require("../models/⭕YTFilter/ytspeed")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytsubboost":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytsubboost = updatedb.ytsubboost + 1;
        require("../models/⭕YTFilter/ytsubboost")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytsuperslow":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytsuperslow = updatedb.ytsuperslow + 1;
        require("../models/⭕YTFilter/ytsuperslow")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytsuperspeed":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytsuperspeed = updatedb.ytsuperspeed + 1;
        require("../models/⭕YTFilter/ytsuperspeed")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytsurround":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytsurround = updatedb.ytsurround + 1;
        require("../models/⭕YTFilter/ytsurround")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytvaporwave":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytvaporwave = updatedb.ytvaporwave + 1;
        require("../models/⭕YTFilter/ytvaporwave")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytvibrato":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytvibrato = updatedb.ytvibrato + 1;
        require("../models/⭕YTFilter/ytvibrato")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytpanning":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytpanning = updatedb.ytpanning + 1;
        require("../models/⭕YTFilter/ytpanning")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "waifu":
    case "swaifu":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.swaifu = updatedb.swaifu + 1;
        require("../models/🦄SFW/swaifu")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "neko":
    case "sneko":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sneko = updatedb.sneko + 1;
        require("../models/🦄SFW/sneko")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "shinobu":
    case "sshinobu":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sshinobu = updatedb.sshinobu + 1;
        require("../models/🦄SFW/sshinobu")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "megumin":
    case "smegumin":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.smegumin = updatedb.smegumin + 1;
        require("../models/🦄SFW/smegumin")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "awoo":
    case "sawoo":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sawoo = updatedb.sawoo + 1;
        require("../models/🦄SFW/sawoo")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sglomp":
    case "glomp":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sglomp = updatedb.sglomp + 1;
        require("../models/🦄SFW/sglomp")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "shandhold":
    case "handhold":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.shandhold = updatedb.shandhold + 1;
        require("../models/🦄SFW/shandhold")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;

    case "sbite":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sbite = updatedb.sbite + 1;
        require("../models/🦄SFW/sbite")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sblush":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sblush = updatedb.sblush + 1;
        require("../models/🦄SFW/sblush")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sbonk":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sbonk = updatedb.sbonk + 1;
        require("../models/🦄SFW/sbonk")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sbully":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sbully = updatedb.sbully + 1;
        require("../models/🦄SFW/sbully")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "scringe":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.scringe = updatedb.scringe + 1;
        require("../models/🦄SFW/scringe")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "scry":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.scry = updatedb.scry + 1;
        require("../models/🦄SFW/scry")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "scuddle":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.scuddle = updatedb.scuddle + 1;
        require("../models/🦄SFW/scuddle")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sdance":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sdance = updatedb.sdance + 1;
        require("../models/🦄SFW/sdance")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "shappy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.shappy = updatedb.shappy + 1;
        require("../models/🦄SFW/shappy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "shighfive":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.shighfive = updatedb.shighfive + 1;
        require("../models/🦄SFW/shighfive")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "shug":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.shug = updatedb.shug + 1;
        require("../models/🦄SFW/shug")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "skick":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.skick = updatedb.skick + 1;
        require("../models/🦄SFW/skick")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "skill":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.skill = updatedb.skill + 1;
        require("../models/🦄SFW/skill")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "skiss":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.skiss = updatedb.skiss + 1;
        require("../models/🦄SFW/skiss")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "slick":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.slick = updatedb.slick + 1;
        require("../models/🦄SFW/slick")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "snom":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.snom = updatedb.snom + 1;
        require("../models/🦄SFW/snom")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "spat":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.spat = updatedb.spat + 1;
        require("../models/🦄SFW/spat")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "spoke":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.spoke = updatedb.spoke + 1;
        require("../models/🦄SFW/spoke")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sslap":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sslap = updatedb.sslap + 1;
        require("../models/🦄SFW/sslap")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ssmile":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ssmile = updatedb.ssmile + 1;
        require("../models/🦄SFW/ssmile")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ssmug":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ssmug = updatedb.ssmug + 1;
        require("../models/🦄SFW/ssmug")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "swave":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.swave = updatedb.swave + 1;
        require("../models/🦄SFW/swave")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "swink":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.swink = updatedb.swink + 1;
        require("../models/🦄SFW/swink")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "syeet":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.syeet = updatedb.syeet + 1;
        require("../models/🦄SFW/syeet")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "sticker":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sticker = updatedb.sticker + 1;
        require("../models/📼Conversion/sticker")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "tinyurl":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.tinyurl = updatedb.tinyurl + 1;
        require("../models/📼Conversion/tinyurl")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "toimg":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.toimg = updatedb.toimg + 1;
        require("../models/📼Conversion/toimg")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "tourl":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.tourl = updatedb.tourl + 1;
        require("../models/📼Conversion/tourl")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "carbon":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.carbon = updatedb.carbon + 1;
        require("../models/📼Conversion/carbon")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ship":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ship = updatedb.ship + 1;
        require("../models/📼Conversion/ship")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "tts":
    case "talktospeech":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.tts = updatedb.tts + 1;
        require("../models/📼Conversion/tts")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "bal":
    case "gold":
    case "money":
    case "balance":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.balance = updatedb.balance + 1;
        require("../models/💰Games/balance")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "buy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.buy = updatedb.buy + 1;
        require("../models/💰Games/buy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "dly":
    case "daily":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.daily = updatedb.daily + 1;
        require("../models/💰Games/daily")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "fish":
    case "pond":
    case "fishes":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.fish = updatedb.fish + 1;
        require("../models/💰Games/fish")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bet":
    case "gamble":
    case "betting":
    case "rouvarte":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.gamble = updatedb.gamble + 1;
        require("../models/💰Games/gamble")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pay":
    case "loan":
    case "borrow":
    case "payment":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pay = updatedb.pay + 1;
        require("../models/💰Games/pay")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "rob":
    case "thief":
    case "robbery":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.rob = updatedb.rob + 1;
        require("../models/💰Games/rob")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bag":
    case "inv":
    case "loot":
    case "inventory":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.inv = updatedb.inv + 1;
        require("../models/💰Games/inv")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "mall":
    case "shop":
    case "store":
    case "shopping":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.store = updatedb.store + 1;
        require("../models/💰Games/store")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "job":
    case "work":
    case "earn":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.work = updatedb.work + 1;
        require("../models/💰Games/work")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "zoo":
    case "hunt":
    case "forest":
    case "animals":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.zoo = updatedb.zoo + 1;
        require("../models/💰Games/zoo")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "image":
    case "unsplash":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.image = updatedb.image + 1;
        require("../models/🖼️Photogenic/unsplash")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pinterest":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pinterest = updatedb.pinterest + 1;
        require("../models/🖼️Photogenic/pinterest")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "wallpaper":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.wallpaper = updatedb.wallpaper + 1;
        require("../models/🖼️Photogenic/wallpaper")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "advice":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.advice = updatedb.advice + 1;
        require("../models/🔎Searches/advice")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "fact":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.fact = updatedb.fact + 1;
        require("../models/🔎Searches/fact")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "meme":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.meme = updatedb.meme + 1;
        require("../models/🔎Searches/meme")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "quote":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.quote = updatedb.quote + 1;
        require("../models/🔎Searches/quote")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "reddit":
    case "subreddit":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.joke = updatedb.joke + 1;
        require("../models/🔎Searches/joke")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "anime":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.anime = updatedb.anime + 1;
        require("../models/🔎Searches/anime")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "manga":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.manga = updatedb.manga + 1;
        require("../models/🔎Searches/manga")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "google":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.google = updatedb.google + 1;
        require("../models/🔎Searches/google")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "chordlist":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.chordlist = updatedb.chordlist + 1;
        require("../models/🔎Searches/chordlist")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "getChord":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.getChord = updatedb.getChord + 1;
        require("../models/🔎Searches/getChord")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pokedex":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pokedex = updatedb.pokedex + 1;
        require("../models/🔎Searches/pokedex")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "gify":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.gify = updatedb.gify + 1;
        require("../models/🔎Searches/gify")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "lyrics":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.lyrics = updatedb.lyrics + 1;
        require("../models/🔎Searches/lyrics")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "ytsearch":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ytsearch = updatedb.ytsearch + 1;
        require("../models/🔎Searches/ytsearch")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "instagram":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.instagram = updatedb.instagram + 1;
        require("../models/🔎Searches/instagram")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "demote":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.demote = updatedb.demote + 1;
        require("../models/🔰Group/demote")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "group":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.group = updatedb.group + 1;
        require("../models/🔰Group/group")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "promote":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.promote = updatedb.promote + 1;
        require("../models/🔰Group/promote")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "kick":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.kick = updatedb.kick + 1;
        require("../models/🔰Group/kick")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "setdesc":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.setdesc = updatedb.setdesc + 1;
        require("../models/🔰Group/setdesc")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "seticon":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.seticon = updatedb.seticon + 1;
        require("../models/🔰Group/seticon")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "tagall":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.tagall = updatedb.tagall + 1;
        require("../models/🔰Group/tagall")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "antilink":
    case "stoplink":
    case "nolink":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.antilink = updatedb.antilink + 1;
        require("../models/🔰Group/antilink")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "allownsfw":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.allownsfw = updatedb.allownsfw + 1;
        require("../models/🔰Group/allownsfw")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ass":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ass = updatedb.ass + 1;
        require("../models/🍑Hentai/ass")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bdsm":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bdsm = updatedb.bdsm + 1;
        require("../models/🍑Hentai/bdsm")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "blowjob":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.blowjob = updatedb.blowjob + 1;
        require("../models/🍑Hentai/blowjob")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/🍑Hentai/cum")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "doujin":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.doujin = updatedb.doujin + 1;
        require("../models/🍑Hentai/doujin")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "feet":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.feet = updatedb.feet + 1;
        require("../models/🍑Hentai/feet")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "femdom":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.femdom = updatedb.femdom + 1;
        require("../models/🍑Hentai/femdom")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "Foxgirl":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.Foxgirl = updatedb.Foxgirl + 1;
        require("../models/🍑Hentai/Foxgirl")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "glasses":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.glasses = updatedb.glasses + 1;
        require("../models/🍑Hentai/glasses")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "hentai":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.hentai = updatedb.hentai + 1;
        require("../models/🍑Hentai/hentai")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "maid":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.maid = updatedb.maid + 1;
        require("../models/🍑Hentai/maid")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "masturbation":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.masturbation = updatedb.masturbation + 1;
        require("../models/🍑Hentai/masturbation")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "netorare":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.netorare = updatedb.netorare + 1;
        require("../models/🍑Hentai/netorare")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "orgy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.orgy = updatedb.orgy + 1;
        require("../models/🍑Hentai/orgy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "panties":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.panties = updatedb.panties + 1;
        require("../models/🍑Hentai/panties")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/🍑Hentai/pussy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "school":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.school = updatedb.school + 1;
        require("../models/🍑Hentai/school")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "succubus":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.succubus = updatedb.succubus + 1;
        require("../models/🍑Hentai/succubus")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "tentacles":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.tentacles = updatedb.tentacles + 1;
        require("../models/🍑Hentai/tentacles")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "thighs":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.thighs = updatedb.thighs + 1;
        require("../models/🍑Hentai/thighs")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "uglyBastard":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.uglyBastard = updatedb.uglyBastard + 1;
        require("../models/🍑Hentai/uglyBastard")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "uniform":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.uniform = updatedb.uniform + 1;
        require("../models/🍑Hentai/uniform")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "yuri":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.yuri = updatedb.yuri + 1;
        require("../models/🍑Hentai/yuri")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "zettaiRyouiki":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.zettaiRyouiki = updatedb.zettaiRyouiki + 1;
        require("../models/🍑Hentai/zettaiRyouiki")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "4k":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.p4k = updatedb.p4k + 1;
        require("../models/👅NSFW/4k")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bimbofetish":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bimbofetish = updatedb.bimbofetish + 1;
        require("../models/👅NSFW/bimbofetish")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "blowjobs":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.blowjobs = updatedb.blowjobs + 1;
        require("../models/👅NSFW/blowjobs")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bonermaterial":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.bonermaterial = updatedb.bonermaterial + 1;
        require("../models/👅NSFW/bonermaterial")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "breedingmaterial":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.breedingmaterial = updatedb.breedingmaterial + 1;
        require("../models/👅NSFW/breedingmaterial")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "canthold":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.canthold = updatedb.canthold + 1;
        require("../models/👅NSFW/canthold")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "christiangirls":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.christiangirls = updatedb.christiangirls + 1;
        require("../models/👅NSFW/christiangirls")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "cum":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.cum = updatedb.cum + 1;
        require("../models/👅NSFW/cum")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "cumslut":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.cumslut = updatedb.cumslut + 1;
        require("../models/👅NSFW/cumslut")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "dirtygaming":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.dirtygaming = updatedb.dirtygaming + 1;
        require("../models/👅NSFW/dirtygaming")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "distension":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.distension = updatedb.distension + 1;
        require("../models/👅NSFW/distension")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "exxxtras":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.exxxtras = updatedb.exxxtras + 1;
        require("../models/👅NSFW/exxxtras")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "femalepov":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.femalepov = updatedb.femalepov + 1;
        require("../models/👅NSFW/femalepov")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "gifsofremoval":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.gifsofremoval = updatedb.gifsofremoval + 1;
        require("../models/👅NSFW/gifsofremoval")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "hotstuffnsfw":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.hotstuffnsfw = updatedb.hotstuffnsfw + 1;
        require("../models/👅NSFW/hotstuffnsfw")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "iwanttofuckher":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.iwanttofuckher = updatedb.iwanttofuckher + 1;
        require("../models/👅NSFW/iwanttofuckher")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "justhotwomen":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.justhotwomen = updatedb.justhotwomen + 1;
        require("../models/👅NSFW/justhotwomen")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "lactating":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.lactating = updatedb.lactating + 1;
        require("../models/👅NSFW/lactating")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "milf":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.milf = updatedb.milf + 1;
        require("../models/👅NSFW/milf")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "milk":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.milk = updatedb.milk + 1;
        require("../models/👅NSFW/milk")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "milking":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.milking = updatedb.milking + 1;
        require("../models/👅NSFW/milking")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nostalgiafapping":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nostalgiafapping = updatedb.nostalgiafapping + 1;
        require("../models/👅NSFW/nostalgiafapping")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nsfw":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nsfw = updatedb.nsfw + 1;
        require("../models/👅NSFW/nsfw")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nsfw2":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nsfw2 = updatedb.nsfw2 + 1;
        require("../models/👅NSFW/nsfw2")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nsfw411":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nsfw411 = updatedb.nsfw411 + 1;
        require("../models/👅NSFW/nsfw411")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "nudes":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.nudes = updatedb.nudes + 1;
        require("../models/👅NSFW/nudes")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "omgbeckylookathiscock":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.omgbeckylookathiscock = updatedb.omgbeckylookathiscock + 1;
        require("../models/👅NSFW/omgbeckylookathiscock")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "pussy":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.pussy = updatedb.pussy + 1;
        require("../models/👅NSFW/pussy")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "realgirls":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.realgirls = updatedb.realgirls + 1;
        require("../models/👅NSFW/realgirls")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sexybutnotporn":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sexybutnotporn = updatedb.sexybutnotporn + 1;
        require("../models/👅NSFW/sexybutnotporn")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "sexygirls":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.sexygirls = updatedb.sexygirls + 1;
        require("../models/👅NSFW/sexygirls")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "slut":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.slut = updatedb.slut + 1;
        require("../models/👅NSFW/slut")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "stripgirls":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.stripgirls = updatedb.stripgirls + 1;
        require("../models/👅NSFW/stripgirls")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "toocuteforporn":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.toocuteforporn = updatedb.toocuteforporn + 1;
        require("../models/👅NSFW/toocuteforporn")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "truefmk":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.truefmk = updatedb.truefmk + 1;
        require("../models/👅NSFW/truefmk")(Foxbot, Foxchat, update, store);
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "uncommonposes":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.uncommonposes = updatedb.uncommonposes + 1;
        require("../models/👅NSFW/uncommonposes")(
          Foxbot,
          Foxchat,
          update,
          store
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    case "ban":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.ban = updatedb.ban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/ban")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "bcgroup":
    case "broadcast":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.broadcast = updatedb.broadcast + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/broadcast")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "join":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.join = updatedb.join + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/join")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "leave":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.leave = updatedb.leave + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/leave")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "reboot":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.reboot = updatedb.reboot + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/reboot")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "rule":
    case "rules":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.rules = updatedb.rules + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/rules")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "unban":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.unban = updatedb.unban + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/unban")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
    case "verify":
      require("./dboard")(Foxbot, Foxchat, (updatedb) => {
        updatedb.verify = updatedb.verify + 1;
        require("../models/🍁ᴏᴡɴᴇʀ/verify")(
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
        );
        updatedb
          .save()
          .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
      });
      break;
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    default:
      await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*😥Apologies:* @${Foxbot.Tname}
*❌Error* 
> No Such Command Found
> Visit To Know Commands: 
> _bit.ly/magneum_`,
        Foxbot.display
      );
      break;
  }
};
