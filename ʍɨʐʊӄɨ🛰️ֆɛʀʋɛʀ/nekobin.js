// // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
// const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
// const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
// const ℓιєηт = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
// var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
// var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// const vers = require(`../../package.json`);
// const MizuNeko = require(`nekobin`);
// const fs = require(`fs`);
// // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
// module.exports = {
//   name: `nekobin`,
//   description: `Use this module to paste your text to (NEKOBIN).`,
//   𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}nekobin* <text>
// or reply *${ᴋᴇɪ}nekobin* to any text.`,
//   async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ) {
//     try {
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//       var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
//       var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//       if (!𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
//         var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
//         𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
//         const nahargs = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/nahargs`);
//         return nahargs
//           .nahargs(
//             ӄʀǟӄɨռʐ,
//             chat,
//             𝓜𝖎𝖟𝖚ӄ𝖎,
//             ꜱᴇɴᴅᴇʀɪᴅ,
//             ꜱᴇɴᴅᴇʀeceived,
//             𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
//             𝓜𝓮𝓮ʍօʀɛ
//           )
//           .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
//       }
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//       if (arg.length === 0) {
//         var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
//         𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
//         const nahargs = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/nahargs`);
//         return nahargs
//           .nahargs(
//             ӄʀǟӄɨռʐ,
//             chat,
//             𝓜𝖎𝖟𝖚ӄ𝖎,
//             ꜱᴇɴᴅᴇʀɪᴅ,
//             ꜱᴇɴᴅᴇʀeceived,
//             𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
//             𝓜𝓮𝓮ʍօʀɛ
//           )
//           .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
//       }
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//       if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
//         var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
//         𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
//         const nahargs = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/nahargs`);
//         return nahargs
//           .nahargs(
//             ӄʀǟӄɨռʐ,
//             chat,
//             𝓜𝖎𝖟𝖚ӄ𝖎,
//             ꜱᴇɴᴅᴇʀɪᴅ,
//             ꜱᴇɴᴅᴇʀeceived,
//             𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
//             𝓜𝓮𝓮ʍօʀɛ
//           )
//           .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
//       }
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//       if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && 𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
//         const filename = ꜱᴇɴᴅᴇʀɪᴅ + "_" + Date.now();
//         await fs.writeFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`, 𝓜𝖎𝖟𝖚ӄ𝖎.body);
//         var Mdata = await fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`, "utf8");
//         const FILE = Mdata.toString();
//         const FINAL = FILE.replace("/nekobin", "");
//         console.log(FINAL);
//         await MizuNeko.nekobin(FINAL).then(async (data) => {
//           console.log(data);
//           await ӄʀǟӄɨռʐ
//             .sendMessage(
//               𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
//               `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

// •@${ꜱᴇɴᴅᴇʀeceived}, Here Is Your pasted link👇🏽‍
// ${data.url}`,
//               MessageType.text,
//               {
//                 quoted: chat,
//                 contextInfo: {
//                   mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
//                 },
//               }
//             )
//             .then(async () => {
//               try {
//                 await fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`);
//               } catch (ℓαвєяяσя) {
//                 console.log(ℓαвєяяσя);
//               }
//             });
//         });
//       }
//       // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//     } catch (ℓαвєяяσя) {
//       ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
//       console.log(ℓαвєяяσя);
//     }
//   },
// };
// // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
