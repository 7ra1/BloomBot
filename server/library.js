//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var fs = require("fs");
var path = require("path");
var didYouMean = require("didyoumean2").default;

module.exports = async (BloomBot, blyat, update, store) => {
  var routePath = path.join(__dirname, "..", "routes");
  var specialFolders = fs
    .readdirSync(routePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  var commandList = []; // List to store command filenames and aliases

  var findCommandFile = (folderPath, command) => {
    var files = fs.readdirSync(folderPath);
    for (var file of files) {
      var fileName = path.parse(file).name.toLowerCase();
      var commandAliases = require(path.join(folderPath, file)).aliases || [];
      commandList.push({ name: fileName, aliases: commandAliases }); // Add command and its aliases to the list
      if (fileName === command || commandAliases.includes(command)) {
        return file;
      }
    }
    return null;
  };

  var gmeta = blyat.isGroup
    ? await BloomBot.groupMetadata(blyat.chat).catch((error) => {})
    : "";
  var groupName = blyat.isGroup ? gmeta.subject : "";
  var participants = blyat.isGroup ? await gmeta.participants : "";
  var groupAdmins = blyat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  var groupOwner = blyat.isGroup ? gmeta.owner : "";
  var isbotAdmin = blyat.isGroup
    ? groupAdmins.includes(await BloomBot.decodeJid(BloomBot.user.id))
    : false;
  var isAdmin = blyat.isGroup ? groupAdmins.includes(blyat.sender) : false;

  var vbody =
    blyat.mtype === "conversation"
      ? blyat.message.conversation
      : blyat.mtype == "imageMessage"
      ? blyat.message.imageMessage.caption
      : blyat.mtype == "videoMessage"
      ? blyat.message.videoMessage.caption
      : blyat.mtype == "extendedTextMessage"
      ? blyat.message.extendedTextMessage.text
      : blyat.mtype == "buttonsResponseMessage"
      ? blyat.message.buttonsResponseMessage.selectedButtonId
      : blyat.mtype == "listResponseMessage"
      ? blyat.message.listResponseMessage.singleSelectReply.selectedRowId
      : blyat.mtype == "templateButtonReplyMessage"
      ? blyat.message.templateButtonReplyMessage.selectedId
      : blyat.mtype === "messageContextInfo"
      ? blyat.message.buttonsResponseMessage?.selectedButtonId ||
        blyat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        blyat.text
      : "";
  var vcommand = vbody
    .replace(BloomBot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();

  console.log(
    "\n◎✕———————————————————————✕ ⒸBloomBot by magneum™ ✕———————————————————————✕◎"
  );
  console.log(
    BloomBot.chalk.blueBright("🖊️COMMANDS: "),
    BloomBot.chalk.green(vcommand)
  );
  console.log(
    BloomBot.chalk.blueBright("🖊️MESSAGE: "),
    BloomBot.chalk.green(vbody)
  );
  console.log(
    BloomBot.chalk.blueBright("❣️USER_NAME: "),
    BloomBot.chalk.green(BloomBot.pushname)
  );
  console.log(
    BloomBot.chalk.blueBright("📱USER_NUMBER: "),
    BloomBot.chalk.green(blyat.sender)
  );
  console.log(
    BloomBot.chalk.blueBright("💬CHAT_Id: "),
    BloomBot.chalk.green(blyat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ ⒸBloomBot by magneum™ ✕———————————————————————✕◎\n"
  );

  let commandFound = false;
  let suggestedCommand = null;

  for (var folder of specialFolders) {
    var folderPath = path.join(routePath, folder);
    if (fs.existsSync(folderPath)) {
      var commandFile = findCommandFile(folderPath, vcommand);
      if (commandFile) {
        var commandFilePath = path.join(folderPath, commandFile);
        require(commandFilePath)(
          BloomBot,
          blyat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          BloomBot.isSudo
        );
        commandFound = true;
        break;
      } else {
        var folderCommands = commandList.map((cmd) => cmd.name);
        var suggestion = didYouMean(vcommand, folderCommands);
        if (suggestion) {
          suggestedCommand = suggestion;
        }
      }
    }
  }

  if (!commandFound) {
    if (suggestedCommand) {
      var suggestionMessage =
        "Command not found. Below are some suggestions. Press the button that is closest to what you need.";
      return await BloomBot.sendMessage(blyat.chat, {
        image: { url: BloomBot.display },
        caption: `*📢ChatId:* ${blyat.chat}\n\n${suggestionMessage}`,
        footer: "*ⒸBloomBot by magneum™*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${BloomBot.prefix}${suggestedCommand}`,
            buttonText: {
              displayText: `${BloomBot.prefix}${suggestedCommand}`,
            },
            type: 1,
          },
          {
            buttonId: `${BloomBot.prefix}Home`,
            buttonText: { displayText: `${BloomBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [blyat.sender],
      });
    } else {
      var errorMessage =
        "⚠️ *Apologies* ⚠️\n\n" +
        `@${BloomBot.Tname}, it seems that the command you entered doesn't exist.\n` +
        "For more information, please visit: _bit.ly/magneum_";
      return await BloomBot.sendMessage(blyat.chat, {
        image: { url: BloomBot.display },
        caption: `*📢ChatId:* ${blyat.chat}\n\n${errorMessage}`,
        footer: "*ⒸBloomBot by magneum™*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${BloomBot.prefix}Home`,
            buttonText: { displayText: `${BloomBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [blyat.sender],
      });
    }
  }
};
