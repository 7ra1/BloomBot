require("🌟/config/index.js");
const path = require("path");
const filePath = path.basename(__filename);
const currentFile = filePath.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  // try {
  // if (!BloomBot.args.join(" ")) {
  // await BloomBot.sendMessage(Sockey.chat, {
  // react: {
  // text: "❌",
  // key: Sockey.key,
  // },
  // });
  // return Sockey.reply(
  // `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
  // *❌Error:*
  // • _No query provided!_
  // *🌻Usage:*
  // • _${BloomBot.prefix}${currentFile} song-name_`,
  // );
  // }
  // let searchQuery = BloomBot.args.join(" ");
  // let searchResults = await ytSearch(searchQuery);
  // let fetchedData = `*🌻Here are the search results for "${searchQuery}"*\n\n`;
  // let resultNumber = 1;
  // for (let result of searchResults.videos) {
  // fetchedData += `#${resultNumber}\n`;
  // fetchedData += `🏜️ *Title*: ${result.title}\n`;
  // fetchedData += `🌸 *Duration*: ${result.duration.timestamp}\n`;
  // fetchedData += `🌐 *URL*: ${result.url}\n\n`;
  // resultNumber++;
  // }
  // let thumbnailUrl = searchResults.videos[0].thumbnail;
  // return await BloomBot.imagebutton(
  // BloomBot,
  // Sockey,
  // fetchedData,
  // thumbnailUrl,
  // );
  // } catch (error) {
  // return BloomBot.handlerror(BloomBot, Sockey, error);
  // }
};

module.exports.aliases = [];
