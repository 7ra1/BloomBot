require("🌟/config/index.js");

module.exports = async (BloomBot, Sockey, error) => {
  const errorMessage = `❗ Oops! An error occurred while processing the command: ${BloomBot.command.toUpperCase()}\n\n${error}`;
  console.log(errorMessage);
  const replyMessage = `😔 Apologies, ${BloomBot.pushname}!

*⚠️ Error:* 
- An unexpected error occurred while processing your request. 
- Please try again later.

*🐞 Error Details:*
${error}`;
  return Sockey.reply(replyMessage);
};
