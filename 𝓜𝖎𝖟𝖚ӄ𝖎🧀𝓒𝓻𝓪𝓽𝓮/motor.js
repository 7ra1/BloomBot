//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
const { MessageType } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
const vers = require(`../package.json`);
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
exports.nomentioncontact = async (args, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var jidNumber = ``;
  var countryCode = _𝔏𝔞𝔟_.CCD;
  if (isNaN(args[0]) || args[0][0] === `+`) {
    if (args[0][0] === `@` || args[0][0] === `+`) {
      jidNumber = args[0].substring(1, args[0].length + 1);
    } else {
      ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `*© Mïzµkï* _${vers.vers}_
        
*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
        MessageType.text
      );
      return;
    }
  } else {
    jidNumber = args[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    ӄʀǟӄɨռʐ.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `*© Mïzµkï* _${vers.vers}_
      
*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 
3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
      MessageType.text
    );
    return;
  } else if (jidNumber.length === 10) {
    jidNumber = countryCode + jidNumber;
  }
  var isOnWhatsApp = await ӄʀǟӄɨռʐ.isOnWhatsApp(jidNumber);
  if (isOnWhatsApp === undefined) {
    throw `NumberInvalid`;
  }
  return jidNumber;
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
exports.onwhatsappserver = async (chatId, groupMembers) => {
  var isMember = false;
  if (!(chatId === undefined)) {
    for (const index in groupMembers) {
      if (chatId == groupMembers[index].jid.split(`@`)[0]) {
        isMember = true;
      }
    }
    return isMember;
  } else {
    return isMember;
  }
};
//⦿──────────────────────────────────────────────────────────────────⦿   © 𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿──────────────────────────────────────────────────────────────────⦿`;
