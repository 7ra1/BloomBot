// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const { DataTypes } = require(`sequelize`);
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
const sequelize = ꜱɪɢɴ.POSTQL;
const Greeting = sequelize.define(
  "Greeting",
  {
    chat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    switched: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ON",
    },
    greetingType: {
      type: DataTypes.TEXT,
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Greetings",
  }
);
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function getMessage(jid = null, type) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    return Msg[0].dataValues;
  }
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function checkSettings(jid = null, type) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });

  if (Msg.length < 1) {
    return false;
  } else {
    if (Msg[0].dataValues.switched === "ON") {
      return "ON";
    } else {
      return "OFF";
    }
  }
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function changeSettings(groupJid = null, isWorking) {
  await Greeting.update(
    {
      switched: isWorking,
    },
    {
      where: {
        chat: groupJid,
      },
    }
  );
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function setWelcome(jid = null, text = null) {
  Greeting.findOrCreate({
    where: {
      chat: jid,
      greetingType: "setwelcome",
    },
    defaults: {
      chat: jid,
      switched: "ON",
      greetingType: "setwelcome",
      message: text,
    },
  });
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function setGoodbye(jid, text = null) {
  Greeting.findOrCreate({
    where: {
      chat: jid,
      greetingType: "setgoodbye",
    },
    defaults: {
      chat: jid,
      switched: "ON",
      greetingType: "setgoodbye",
      message: text,
    },
  });
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
async function deleteMessage(jid = null, type = null) {
  var Msg = await Greeting.findAll({
    where: {
      chat: jid,
      greetingType: type,
    },
  });
  if (Msg.length < 1) {
    return false;
  } else {
    return await Msg[0].destroy();
  }
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  Greeting: Greeting,
  getMessage: getMessage,
  changeSettings: changeSettings,
  checkSettings: checkSettings,
  setWelcome: setWelcome,
  setGoodbye: setGoodbye,
  deleteMessage: deleteMessage,
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
