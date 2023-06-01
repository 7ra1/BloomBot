"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("../module-alias");
require("@/config");
const logger = require("@/log");
const clear = require("cli-clear");
const readline = require("readline");
const { LocalHfInference } = require("@huggingface/inference-local");

const promptUser = (rl, message) => {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
};

const generateResponse = async (inference, userInput) => {
  const response = await inference.generate({
    input: userInput,
    options: {
      model: "your-local-model-identifier", // Replace with the identifier of your local model
      parameters: {
        max_length: 100,
      },
    },
  });
  return response;
};

const displayResponse = (prefix, message) => {
  logger.info(`📢 ${prefix} ${message}`);
};

const ChatBot = async () => {
  clear();
  const inference = new LocalHfInference({
    modelPath: "/path/to/your/model", // Replace with the path to your local model
    library: "tensorflow", // Replace with the appropriate library (tensorflow or pytorch)
  });
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    try {
      const userInput = await promptUser(rl, "User: ");
      if (userInput.toLowerCase() === "exit") {
        rl.close();
        break;
      }

      const response = await generateResponse(inference, userInput);
      displayResponse("Bot:", response.generated_text);
    } catch (error) {
      logger.error("❌ An error occurred:", error);
    }
  }
};

ChatBot();
