`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`../../Mizuki🛰️Server/Mizuki_Buttons`);
const Mizuki_Static = require(`../../Mizuki🛰️Server/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../Mizuki🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Mizuki🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const ffmpeg = require(`fluent-ffmpeg`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const got = require(`got`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const Bagde = require("../../Mizuki🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        },
        async (err, user) => {
          // return user.delete();
          if (err) return console.log(err);
          if (!user) {
            var newUser = new Bagde({
              ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              Badge: "🧵ʙᴀꜱɪᴄ",
              value: "True",
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            newUser.save();
          } else {
            var clock =
              user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime);
            if (clock > 0 && user.Limits == 0) {
              user.value = "False";
              user.save();
            }
            if (clock > 0 && !user.Limits == 0) {
              user.Limits = user.Limits - 1;
              user.value = "True";
              user.save();
            }
            if (clock < 0 && user.Limits == 0) {
              if (user.Badge === "🧵ʙᴀꜱɪᴄ") {
                user.Limits = 10;
              } else if (user.Badge === "🥉ʙʀᴏɴᴢᴇ") {
                user.Limits = 20;
              } else if (user.Badge === "🥈ꜱɪʟᴠᴇʀ") {
                user.Limits = 40;
              } else if (user.Badge === "🥇ɢᴏʟᴅ") {
                user.Limits = 60;
              } else if (user.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ") {
                user.Limits = 80;
              } else if (user.Badge === "💎ᴅɪᴀᴍᴏɴᴅ") {
                user.Limits = 100;
              }
              user.CurrentLimitTime = Date.now();
              user.value = "True";
              user.save();
            }
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          const jsoncool = await JSON.parse(
            fs.readFileSync(`./Mizuki🛰️Server/Coolist.json`)
          );
          await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
          fs.writeFileSync(
            `./Mizuki🛰️Server/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout((ℓαвєяяσя) => {
            if (ℓαвєяяσя) return console.log(ℓαвєяяσя);
            jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
            fs.writeFileSync(
              `./Mizuki🛰️Server/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 15000);
          console.log(user);
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && user.value === "False") {
            let time = ms(
              user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime)
            );
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${user.Badge}
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: ${user.Limits} commands
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
            );
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (
            𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
            !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
            !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev &&
            !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin
          ) {
            try {
              return Mizuki_Buttons.MIB(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `*❌ Admins Only | You Are Not Allowed! ❌*`,
                _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
              );
            } catch (ℓαвєяяσя) {
              ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
            }
          } else {
            if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
              var where = "(ᴀᴅᴍɪɴ)";
            } else {
              var where = "(ᴘʀɪᴠᴀᴛᴇ)";
            }

            await got(`https://www.reddit.com/r/milf/random.json`).then(
              async (newScpt) => {
                var file = JSON.parse(newScpt.body);
                var title = file[0].data.children[0].data.title;
                var amazeme = file[0].data.children[0].data.url;

                if (
                  !amazeme.endsWith(`.png`) &&
                  !amazeme.endsWith(`.jpg`) &&
                  !amazeme.endsWith(`.jpeg`)
                ) {
                  var amazeme = await got(
                    `https://www.reddit.com/r/milf/random.json`
                  ).then(async (newScpt) => {
                    var file = JSON.parse(newScpt.body);
                    var title = file[0].data.children[0].data.title;
                    var amazeme = file[0].data.children[0].data.url;
                    return Mizuki_Buttons.MIB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      𝓜𝖎𝖟𝖚ӄ𝖎,
                      `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                      amazeme
                    );
                  });
                } else if (amazeme.endsWith(`.gif`)) {
                  const downloader = await new Downloader({
                    url: amazeme,
                    directory: `./Mizuki🗑️Temp`,
                    fileName: `${Ping}_${FinalName}.gif`,
                    cloneFiles: false,
                  });
                  try {
                    await downloader.download();
                  } catch (ℓαвєяяσя) {
                    return Mizuki_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      𝓜𝖎𝖟𝖚ӄ𝖎,
                      `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍁 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
                    );
                  }
                  ffmpeg(`./Mizuki🗑️Temp/${Ping}_${FinalName}.gif`)
                    .outputOptions([
                      `-pix_fmt yuv420p`,
                      `-c:v libx264`,
                      `-movflags +faststart`,
                      `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
                    ])
                    .save(`./Mizuki🗑️Temp/${Ping}_${FinalName}.mp4`)
                    .on(`end`, async () => {
                      return Mizuki_Static.MSB(
                        ӄʀǟӄɨռʐ,
                        chat,
                        𝓜𝖎𝖟𝖚ӄ𝖎,
                        `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                        `./Mizuki🗑️Temp/${Ping}_${FinalName}.mp4`
                      )
                        .then(
                          cleanRF.cleanRF(
                            `./Mizuki🗑️Temp/${Ping}_${FinalName}.mp4`,
                            `./Mizuki🗑️Temp/${Ping}_${FinalName}.gif`
                          )
                        )
                        .catch((ℓαвєяяσя) =>
                          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                        );
                    });
                } else {
                  return Mizuki_Buttons.MIB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    𝓜𝖎𝖟𝖚ӄ𝖎,
                    `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                    amazeme
                  );
                }
              }
            );
          }
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
