("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
"use strict";
exports.__esModule = true;
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let ӄօʟօʀ = require("@heroku-cli/color");
exports.ӄօʟօʀs = async (𝖍𝖆𝖜ӄ, Vlyre) => {
let chalk = require("chalk");
let Gamboge = chalk.hex("#e49b0f");
let Glaucous = chalk.hex("#6082B6");
let Feldgrau = chalk.hex("#4d5d53");
let Burgundy = chalk.hex("#810020");
let Vermilion = chalk.hex("#E34234");
let Burlywood = chalk.hex("#deb887");
let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await Vlyre.groupMetadata;
await 𝖍𝖆𝖜ӄ.sendReadReceipt(Vlyre.chatID, Vlyre.sender, [Vlyre.key.id]);
if (HEROKU_API_KEY === undefined) {
console.log(Gamboge("▷═════════════════════|✠|═════════════════════◁"));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "), Feldgrau("".concat(new Date()))));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("💤 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "), Glaucous(Vlyre.commandName || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫: "), Burgundy(Vlyre.sender || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: "), Gamboge(Vlyre.pushName || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("❗ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐀𝐝𝐦𝐢𝐧: "), Vermilion(Vlyre.isSenderAdmin || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("⚡ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐓𝐔𝐅: "), Vermilion(Vlyre.isSenderTUF || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧀 𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: "), Burlywood(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "), Feldgrau("".concat(new Date()))));
console.log(ӄօʟօʀ["default"].Gamboge("▷═════════════════════|✠|═════════════════════◁"));
console.log(ӄօʟօʀ["default"].Feldgrau("{\nᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n}"));
} else {
console.log(ӄօʟօʀ["default"].bgRed("▷═════════════════════|✠|═════════════════════◁"));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "), ӄօʟօʀ["default"].bgGreen("".concat(new Date()))));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("💤 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "), ӄօʟօʀ["default"].bgBlue(Vlyre.commandName || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫: "), ӄօʟօʀ["default"].bgRed(Vlyre.sender || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: "), ӄօʟօʀ["default"].bgMagenta(Vlyre.pushName || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("❗ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐀𝐝𝐦𝐢𝐧: "), ӄօʟօʀ["default"].bgYellow(Vlyre.isSenderAdmin || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("⚡ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐓𝐔𝐅: "), ӄօʟօʀ["default"].bgYellow(Vlyre.isSenderTUF || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🧀 𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: "), ӄօʟօʀ["default"].bgCyan(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || "")));
console.log(ӄօʟօʀ["default"].black(ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "), ӄօʟօʀ["default"].bgWhite("".concat(new Date()))));
console.log(ӄօʟօʀ["default"].bgRed("▷═════════════════════|✠|═════════════════════◁"));
console.log(ӄօʟօʀ["default"].bgBlack("{\nᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n}"));
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");