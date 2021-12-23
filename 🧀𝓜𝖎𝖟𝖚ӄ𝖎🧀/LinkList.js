const { DataTypes } = require(`sequelize`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const sequelize = _𝔏𝔞𝔟_.POSTQL;

const Linklist = sequelize.define(
  "Linklist",
  {
    JID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GRPID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Linklist",
  }
);

async function addLinklistUser(jid = "", GrpId = "") {
  Linklist.findOrCreate({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
}

async function getLinklistUser(jid = "", GrpId = "") {
  var Msg = await Linklist.findAll({
    where: {
      JID: "",
      GRPID: GrpId,
    },
  });

  if (Msg.length < 1) {
    var Msg = await Linklist.findAll({
      where: {
        JID: jid,
        GRPID: "",
      },
    });

    if (Msg.length < 1) {
      var Msg = await Linklist.findAll({
        where: {
          JID: jid,
          GRPID: GrpId,
        },
      });

      if (Msg.length < 1) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
}

async function removeLinklistUser(jid = "", GrpId = "") {
  var Msg = await Linklist.findAll({
    where: {
      JID: jid,
      GRPID: GrpId,
    },
  });
  if (Msg.length < 1) {
    return false;
  } else {
    return await Msg[0].destroy();
  }
}

module.exports = {
  Linklist: Linklist,
  addLinklistUser: addLinklistUser,
  getLinklistUser: getLinklistUser,
  removeLinklistUser: removeLinklistUser,
};
