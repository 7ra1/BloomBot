// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const motor = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/motor`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `promote`,
  description: `Demote a person from admin`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this module to demote a person from admin by entering the person's mobile number. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
      ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `This command is only applicable for group chats.`,
        MessageType.text
      );
      return;
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
      ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `Sorry, dont have the permission to do so since I am not an admin.`,
        MessageType.text
      );
      return;
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && typeof arg[0] == `undefined`) {
      ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `Reply/tag/enter contact number of the person to be demoted.`,
        MessageType.text
      );
      return;
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      const reply = chat.message.extendedTextMessage;
      var contact = reply.contextInfo.participant.split(`@`)[0];
    } else {
      var contact = await motor.getCleanedContact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    var admin = false;
    var isMember = await motor.isMember(contact, 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers);
    for (const index in 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers) {
      if (contact == 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].jid.split(`@`)[0]) {
        if (𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].isAdmin) {
          admin = true;
        }
      }
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (isMember) {
      if (!admin == true) {
        const arr = [contact + `@s.whatsapp.net`];
        ӄʀǟӄɨռʐ.groupMakeAdmin(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arr);
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*` + contact + ` promoted to admin*`,
          MessageType.text
        );
      } else {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*` + contact + ` is already an admin*`,
          MessageType.text
        );
      }
    }
    // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
    if (!isMember) {
      if (contact === undefined) {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `Person not found.`,
          MessageType.text
        );
        return;
      }
    }
  },
};
