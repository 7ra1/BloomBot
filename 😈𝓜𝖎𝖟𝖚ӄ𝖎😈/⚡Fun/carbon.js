`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Carbon = require(`unofficial-carbon-now`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `carbon`,
  𝓜𝓮𝓮6ʍօʀɛ: `Example Usage,
*${ᴋᴇɪ}carbon <text>* 
*${ᴋᴇɪ}carbon*  and reply to a text message.
Use the -t flag after  *${ᴋᴇɪ}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${ᴋᴇɪ}carbon <text> -t <theme>* .`,
  more: `No input provided.
Please use the command  
*${ᴋᴇɪ}carbon <text> -t <theme>*  
or reply to a text message with  
*${ᴋᴇɪ}carbon*  to carbonize the text.

*----> 𝐓𝐇𝐄𝐌𝐄𝐒 <----*
_3024 night_  *|*  _a11y dark_  
_blackboard_  *|*  _base 16 (dark)_ 
_base 16 (light)_  *|*  _cobalt_ 
_duotone_  *|*  _hopscotch_
_lucario_  *|*  _material_ 
_monokai_  *|*  _night owl_ 
_nord_  *|*  _oceanic next_
_one light_  *|*  _one dark_
_panda_  *|*  _paraiso_
_seti_  *|*  _shades of purple_ 
_solarized (dark)_ 
_solarized (light)_
_synthwave '84_  *|*  _twilight_
_verminal_  *|*  _vscode_  
_yeti_  *|*  _zenburn_`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      try {
        let themes = [
          `3024 night`,
          `a11y dark`,
          `blackboard`,
          `base 16 (dark)`,
          `base 16 (light)`,
          `cobalt`,
          `duotone`,
          `hopscotch`,
          `lucario`,
          `material`,
          `monokai`,
          `night owl`,
          `nord`,
          `oceanic next`,
          `one light`,
          `one dark`,
          `panda`,
          `paraiso`,
          `seti`,
          `shades of purple`,
          `solarized (dark)`,
          `solarized (light)`,
          `synthwave '84`,
          `twilight`,
          `verminal`,
          `vscode`,
          `yeti`,
          `zenburn`,
        ];
        var code = ``;
        if (arg[0] == null && !𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          var 𝓜Usage = 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
          𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
          const nahargs = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/nahargs`);
          return nahargs.nahargs(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            ꜱᴇɴᴅᴇʀɪᴅ,
            ꜱᴇɴᴅᴇʀeceived,
            𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
            𝓜𝓮𝓮ʍօʀɛ
          );
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply && !𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\nThe replied message should be text.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          code = 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage;
          themeInput = themes[Math.floor(Math.random() * themes.length)];
        } else {
          try {
            var text = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
              𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
              ``
            );
            if (text[0] === `-` && text[1] === `t`) {
              if (text[2] == null) {
                let counter = 1;
                var message = `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\nAvailable themes: `;
                themes.forEach((theme) => {
                  message += `\n${counter}. ${theme}`;
                  counter += 1;
                });
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    `` + message + ``,
                    MessageType.text,
                    { quoted: chat }
                  )
                  .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                return;
              } else {
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                    `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\nNo input provided.
Please use the command  *${ᴋᴇɪ}carbon <text>*  or reply to a text message with  *${ᴋᴇɪ}carbon*  to carbonize the text.`,
                    MessageType.text,
                    { quoted: chat }
                  )
                  .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
                return;
              }
            }
            var body = 𝓜𝖎𝖟𝖚ӄ𝖎.body.split(`-t`);
            code = body[0].replace(
              𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
              ``
            );
            themeInput = body[1].substring(1);
            if (!themes.includes(themeInput)) {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${ᴋᴇɪ}`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
              return;
            }
          } catch (ℓαвєяяσя) {
            if (ℓαвєяяσя instanceof TypeError) {
              code = 𝓜𝖎𝖟𝖚ӄ𝖎.body.replace(
                𝓜𝖎𝖟𝖚ӄ𝖎.body[0] + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName + ` `,
                ``
              );
              themeInput = themes[Math.floor(Math.random() * themes.length)];
            }
          }
        }
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\nConverting your text into a code snippet. Please wait...`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        const carbon = new Carbon.createCarbon()
          .setCode(code)
          .setPrettify(true)
          .setTheme(themeInput);
        const output = await Carbon.generateCarbon(carbon);
        await ӄʀǟӄɨռʐ
          .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, output, MessageType.image, {
            quoted: chat,
            mimetype: Mimetype.png,
            caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
          })
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      } catch (ℓαвєяяσя) {
        throw ℓαвєяяσя;
      }
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
