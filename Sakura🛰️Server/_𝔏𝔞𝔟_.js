`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`Sakura☣️Reactor.env`)) {
  require(`dotenv`).config({
    path: `./Sakura☣️Reactor.env`,
  });
} else {
  require(`dotenv`);
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍹 (c)ֆǟӄʊʀǟ 🍹    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const env = {
  SAKURA: process.env.SAKURA === undefined ? `Null` : process.env.SAKURA,
  SakuraMdb:
    process.env.SakuraMdb === undefined ? `Null` : process.env.SakuraMdb,
  HEROKU_API_KEY:
    process.env.HEROKU_API_KEY === undefined
      ? `Null`
      : process.env.HEROKU_API_KEY,
  HEROKU_APP_NAME:
    process.env.HEROKU_APP_NAME === undefined
      ? `Null`
      : process.env.HEROKU_APP_NAME,
  Krakinz: process.env.Krakinz === undefined ? `Null` : process.env.Krakinz,
  IMDB: `5e36f0db`,
  FOXTROT: `^[/]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  TEN: `0G2R8PTUGMRP`,
  ɴᴏᴛᴍᴇᴀᴅᴍɪɴ: `./Sakura☣️Reactor/ֆǟӄʊʀǟNotMeAdmin.png`,
  ɴᴏᴛᴀᴅᴍɪɴ: `./Sakura☣️Reactor/ֆǟӄʊʀǟMemErr.png`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  ERROR: `https://i.postimg.cc/XqPBcyq0/image.png`,
  INVL: `https://i.postimg.cc/XqPBcyq0/image.png`,
  MEE: `https://i.postimg.cc/XqPBcyq0/image.png`,
  HASH: `https://chat.whatsapp.com/LKN8uVBd8ucHRHofz0jBSd`,
  DEV:
    process.env.SUDO === undefined
      ? `918436686758,917430922909`
      : `918436686758,917430922909,` + process.env.SUDO,
  HEROKU: process.env.HEROKU,
  SAKURAQL: (process.env.SAKURAQL =
    process.env.SAKURAQL === undefined
      ? `./Sakura☣️Reactor/Sakura☣️Reactor.db`
      : process.env.SAKURAQL),
  POSTQL:
    process.env.SAKURAQL === `./Sakura☣️Reactor/Sakura☣️Reactor.db`
      ? new Sequelize({ dialect: `sqlite`, storage: process.env.SAKURAQL })
      : new Sequelize(process.env.SAKURAQL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
          },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
};
module.exports = env;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
