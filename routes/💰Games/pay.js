//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  if (!NekoBot.mentionByReply) {
    return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
  }
  if (NekoBot.args.length === 0) {
    return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(NekoBot.args[0])) {
    return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
  }
  if (NekoBot.args[0].match(/[a-z]/i)) {
    return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
  }

  if (NekoBot.mentionByReply) {
    receiver =
      NekoBot.mtype == "extendedTextMessage" &&
      NekoBot.message.extendedTextMessage.contextInfo != null
        ? NekoBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await NekoBot.getName(receiver);
    if (receiver === Nekos.sender) {
      return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
    }

    await NekoBot.Economy.findOne(
      {
        Id: Nekos.sender,
      },
      async (error, uPayer) => {
        if (error) return NekoBot.handlerror(NekoBot, Nekos, error);
        if (!uPayer) {
          new NekoBot.Economy({
            Id: Nekos.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return NekoBot.handlerror(NekoBot, Nekos, error);
            });
          return Nekos.reply(`*😥Apologies:* _${
            NekoBot.pushname || NekoBot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
        }

        if (parseInt(NekoBot.args[0]) > uPayer.money) {
          return Nekos.reply(`*😥Apologies:* _${
            NekoBot.pushname || NekoBot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
        } else {
          await NekoBot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return NekoBot.handlerror(NekoBot, Nekos, error);
              if (!uBonus) {
                new NekoBot.Economy({
                  Id: receiver,
                  money: parseInt(NekoBot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return NekoBot.handlerror(NekoBot, Nekos, error);
                  });
                uPayer.money = uPayer.money - parseInt(NekoBot.args[0]);
                uPayer.save().catch((error) => {
                  return NekoBot.handlerror(NekoBot, Nekos, error);
                });
                return await NekoBot.imagebutton(
                  NekoBot,
                  Nekos,
                  `*🔖Here, ${finalname} for ${
                    NekoBot.pushname || NekoBot.Tname
                  }:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${NekoBot.pushname || NekoBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  NekoBot.display
                );
              }

              uPayer.money = uPayer.money - parseInt(NekoBot.args[0]);
              uPayer.save().catch((error) => {
                return NekoBot.handlerror(NekoBot, Nekos, error);
              });
              uBonus.money = uBonus.money + parseInt(NekoBot.args[0]);
              uBonus.save().catch((error) => {
                return NekoBot.handlerror(NekoBot, Nekos, error);
              });
              return await NekoBot.imagebutton(
                NekoBot,
                Nekos,
                `*🔖Here, ${finalname} for ${NekoBot.pushname || NekoBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${NekoBot.pushname || NekoBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                NekoBot.display
              );
            }
          );
        }
      }
    );
  } else {
    return Nekos.reply(`*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${NekoBot.prefix}${finalname} amount_`);
  }
};
