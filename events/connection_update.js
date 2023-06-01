//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/config");
const { Boom } = require("@hapi/boom");
const purgepg = require("@/app/purgepg");
const { exec } = require("child_process");
const dbConfig = require("@/config/dbConfig");
const { DisconnectReason } = require("@adiwajshing/baileys");

module.exports = async (BloomBot, magneum, logger) => {
  const handledbChange = async () => {
    BloomBot.end();
    if (dbConfig.DATABASE_URL.includes("postgres")) {
      try {
        await purgepg();
      } catch (error) {
        logger.error("❌ Error occurred while purging the database: ", error);
      }
      process.exit(0);
    } else {
      exec("rm -rf ./BloomBot.db");
      process.exit(0);
    }
  };

  const handleConnectionUpdate = async (update) => {
    const {
      lastDisconnect,
      connection,
      isNewLogin,
      isOnline,
      qr,
      receivedPendingNotifications,
    } = update;

    if (connection === "connecting") {
      logger.info("📢 Connecting to WhatsApp...");
    } else if (connection === "open") {
      logger.info("📢 Login successful! Connection to WhatsApp established.");
    } else if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      switch (reason) {
        case DisconnectReason.badSession:
          logger.error("❌ Bad Session File detected.");
          await handledbChange();
          await magneum();
          break;
        case DisconnectReason.connectionClosed:
          logger.error(
            "❌ Connection closed unexpectedly. Reconnecting to WhatsApp..."
          );
          await handledbChange();
          await magneum();
          break;
        case DisconnectReason.connectionLost:
          logger.error(
            "❌ Connection lost from the server. Reconnecting to WhatsApp..."
          );
          await handledbChange();
          await magneum();
          break;
        case DisconnectReason.connectionReplaced:
          logger.error(
            "❌ Connection replaced. Another new session is opened. Please close the current session first before establishing a new connection."
          );
          BloomBot.logout();
          break;
        case DisconnectReason.loggedOut:
          logger.error(
            "❌ Device logged out. Please scan again and run the program to establish a new session."
          );
          await handledbChange();
          await magneum();
          break;
        case DisconnectReason.restartRequired:
          logger.debug("🐞 Restart required. Restarting the program...");
          BloomBot.end();
          await magneum();
          break;
        case DisconnectReason.timedOut:
          logger.error("❌ Connection timed out. Reconnecting to WhatsApp...");
          await handledbChange();
          await magneum();
          break;
        default:
          logger.error(`❌ Unknown DisconnectReason: ${reason}|${connection}`);
          await handledbChange();
          await magneum();
          break;
      }
    } else if (isOnline === true) {
      logger.debug("📢 User is online. WhatsApp connection is active.");
    } else if (isOnline === false) {
      logger.error("📢 User is offline. WhatsApp connection is inactive.");
    } else if (receivedPendingNotifications === true) {
      logger.debug("📢 Received pending notifications. Processing...");
    } else if (receivedPendingNotifications === false) {
      logger.error("📢 No pending notifications received.");
    } else if (isNewLogin === true) {
      logger.debug("📢 New login detected. User has successfully logged in.");
    } else if (isNewLogin === false) {
      logger.error("📢 User is not performing a new login.");
    } else if (qr) {
      logger.info(
        "QR code received. Please scan the following QR code to log in:"
      );
      console.log(qr);
    } else {
      logger.info("📢 Connection event received:", update);
    }
  };

  BloomBot.ev.on("connection.update", handleConnectionUpdate);
  return BloomBot;
};
