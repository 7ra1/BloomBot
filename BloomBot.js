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
//  ║🐞 Developers: +918436686758, +91825088932593259325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("./logger/config");
var fs = require("fs");
var chalk = require("chalk");
var yargs = require("yargs");
var { join } = require("path");
var { say } = require("cfonts");
var mFolders = fs.readdirSync("./routes");
var { execSync } = require("child_process");
var { createInterface } = require("readline");
var { watchFile, unwatchFile } = require("fs");
var { setupMaster, fork } = require("cluster");
var rl = createInterface(process.stdin, process.stdout);

process.env.NODE_NO_WARNINGS = "1";
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
say("BloomBot\nwhatsApp Multi Device\nUser bot", {
  font: "chrome",
  align: "center",
  gradient: ["red", "yellow"],
});
say(`~ by magneum™`, {
  font: "console",
  align: "center",
  gradient: ["green", "red"],
});

function showCommands(path) {
  say("Loading Commands From Folders", {
    font: "console",
    align: "left",
    gradient: ["red", "blue"],
  });
  var specialFolders = [
    "⚙️System",
    "⭕YTFilter",
    "🍁ᴏᴡɴᴇʀ",
    "🍑Hentai",
    "🐉Emotions",
    "👅NSFW",
    "💗Commands",
    "💰Games",
    "📢aFilter",
    "📥Downloader",
    "📼Conversion",
    "🔎Searches",
    "🔰Group",
    "🖼️Photogenic",
    "🦄SFW",
  ];
  for (var cFolder of mFolders) {
    var cFiles = fs
      .readdirSync(`./${path}/${cFolder}`)
      .filter((cFile) => cFile.endsWith(""));

    if (specialFolders.includes(cFolder)) {
      console.log(
        chalk.bgGreen(chalk.black("> " + cFolder)),
        chalk.yellow("  | " + cFiles)
      );
    }
  }
}

let isRunning = false;
function ignite(cFile) {
  if (isRunning) return;
  isRunning = true;
  var args = [join(__dirname, cFile), ...process.argv.slice(2)];
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  });
  var p = fork();
  p.on("message", (data) => {
    console.log(chalk.bgGreen(chalk.black("[RECEIVED]")), chalk.yellow(data));
    switch (data) {
      case "reset":
        p.process.kill();
        isRunning = false;
        ignite.apply(this, arguments);
        break;
      case "uptime":
        p.send(process.uptime());
        break;
    }
  });
  p.on("exit", (_, code) => {
    isRunning = false;
    console.error(chalk.bgRed("❌ An unexpected error occurred:" + _));
    p.process.kill();
    isRunning = false;
    ignite.apply(this, arguments);
    if (code === 0) return;
    watchFile(args[0], () => {
      unwatchFile(args[0]);
      ignite(cFile);
    });
  });
  var opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
  if (!opts["test"]) {
    if (!rl.listenerCount()) {
      rl.on("line", (line) => {
        p.emit("message", line.trim());
      });
    }
  }
}

showCommands("routes");
if (REDIS_URL && REDIS_URL.toLowerCase().includes("127.0.0.1:6379")) {
  REDIS_URL = REDIS_URL.replace(/127.0.0.1:6379/i, "");

  try {
    execSync("sudo systemctl start redis.service");
    console.log(chalk.green("Redis service started successfully."));
  } catch (error) {
    console.error(chalk.red("Failed to start Redis service:"), error);
  }
}

ignite("app/index", "uptime");
