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
require("../global.js");
const logger = require("../logger");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
var { Boom } = require("@hapi/boom");
var { DisconnectReason } = require("@adiwajshing/baileys");

module.exports = async (ꪜᴏxʙᴏᴛ, update, store, mågneum) => {
  const {
    lastDisconnect,
    connection,
    isNewLogin,
    isOnline,
    qr,
    receivedPendingNotifications,
  } = update;
  if (connection == "connecting") logger.info("🐲: Connecting to WhatsApp...▶");
  else if (connection == "open") logger.info("🐲: Login successful! ▶");
  else if (connection == "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      logger.error(
        `❌: Bad Session File, Please Delete Session and Scan Again`
      );
      // ꪜᴏxʙᴏᴛ.logout();
    } else if (reason === DisconnectReason.connectionClosed) {
      // logger.error("❌: Connection closed, reconnecting....");
      await mågneum();
    } else if (reason === DisconnectReason.connectionLost) {
      // logger.error("❌: Connection Lost from Server, reconnecting...");
      await mågneum();
    } else if (reason === DisconnectReason.connectionReplaced) {
      // logger.error("❌: Connection Replaced, Another New Session Opened, Please Close Current Session First");
      // ꪜᴏxʙᴏᴛ.logout();
    } else if (reason === DisconnectReason.loggedOut) {
      // logger.error(`❌: Device Logged Out, Please Scan Again And Run.`);
      process.exit(0);
    } else if (reason === DisconnectReason.restartRequired) {
      // logger.error("❌: Restart Required, Restarting...");
      await mågneum();
    } else if (reason === DisconnectReason.timedOut) {
      // logger.error("❌: Connection TimedOut, Reconnecting...");
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
};
