//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.blue(">> "),
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renameFiles(dir, oldWord, newWord) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      var renamePromises = files.map((file) => {
        return new Promise((resolve, reject) => {
          var filePath = path.join(dir, file);

          fs.stat(filePath, (err, stats) => {
            if (err) {
              reject(err);
              return;
            }

            if (
              stats.isDirectory() &&
              file !== "node_modules" &&
              !file.startsWith(".") &&
              file !== "yarn.lock" &&
              file !== ".git"
            ) {
              var newDirName = file.replace(
                new RegExp(escapeRegExp(oldWord), "g"),
                newWord
              );
              var newDirPath = path.join(dir, newDirName);

              renameFiles(newDirPath, oldWord, newWord)
                .then(() => resolve())
                .catch((err) => reject(err));
            } else if (
              stats.isFile() &&
              file !== "yarn.lock" &&
              !file.startsWith(".")
            ) {
              var fileExtension = path.extname(file);
              var fileName = path.basename(file, fileExtension);
              var newFileName = fileName.replace(
                new RegExp(escapeRegExp(oldWord), "g"),
                newWord
              );
              var newFilePath = path.join(dir, newFileName + fileExtension);

              fs.rename(filePath, newFilePath, (err) => {
                if (err) {
                  reject(err);
                  return;
                }

                console.log(chalk.green(`File renamed: ${newFilePath}`));
                resolve();
              });
            } else {
              resolve();
            }
          });
        });
      });

      Promise.all(renamePromises)
        .then(() => resolve())
        .catch((err) => reject(err));
    });
  });
}

rl.question(chalk.yellow("Enter the word to replace: "), (oldWord) => {
  rl.question(chalk.yellow("Enter the new word: "), (newWord) => {
    rl.question(
      chalk.yellow("Enter the directory path where the files are located: "),
      (folderPath) => {
        renameFiles(folderPath, oldWord, newWord)
          .then(() => {
            console.log(chalk.green("Renaming process completed."));
            rl.close();
          })
          .catch((err) => {
            console.error(chalk.red("An error occurred:"), err);
            rl.close();
          });
      }
    );
  });
});
