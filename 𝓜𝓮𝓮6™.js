// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const AutoMeeUpdate = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝓮𝓮6ɢɪᴛ`);
const 𝓜𝓮𝓮6ֆʏռօք = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/𝓜𝓮𝓮6ᴢᴇɴ`);
const ʍɛɛℓιєηтult = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ɠɠʊ`);
const download = require(`download-file`);
const 𝓜𝓮𝓮6ǟքք = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/helper`);
const ɠɠ𝓜𝓮𝓮6 = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ɠɠ𝓜𝓮𝓮6`);
const vers = require(`./package.json`);
const ℓιєηт = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const 𝓜𝓮𝓮6Sudo = [`block`, `unblock`];
const ꜱɪɢɴ = require(`./𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const Kolor = require(`chalk`);
const 𝓜𝓮𝓮6sql = ꜱɪɢɴ.POSTQL;
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
console.clear();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
var Text_Rand_Welcome = [
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ - ɢʟʜꜰ!*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴇᴠᴇʀʏᴏɴᴇ, ʟᴏᴏᴋ ʙᴜꜱʏ!*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴄᴀɴ ɪ ɢᴇᴛ ᴀ ʜᴇᴀʟ?*`,
  `*ᴊᴏɪɴᴇᴅ ʏᴏᴜʀ ᴘᴀʀᴛʏ.*`,
  `*ᴊᴏɪɴᴇᴅ. ʏᴏᴜ ᴍᴜꜱᴛ ᴄᴏɴꜱᴛʀᴜᴄᴛ ᴀᴅᴅɪᴛɪᴏɴᴀʟ ᴘʏʟᴏɴꜱ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ꜱᴛᴀʏ ᴀᴡʜɪʟᴇ ᴀɴᴅ ʟɪꜱᴛᴇɴ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ᴡᴇʀᴇ ᴇxᴘᴇᴄᴛɪɴɢ ʏᴏᴜ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ʜᴏᴘᴇ ʏᴏᴜ ʙʀᴏᴜɢʜᴛ ᴘɪᴢᴢᴀ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ ʟᴇᴀᴠᴇ ʏᴏᴜʀ ᴡᴇᴀᴘᴏɴꜱ ʙʏ ᴛʜᴇ ᴅᴏᴏʀ.*`,
  `*ᴊᴜꜱᴛ ᴀᴘᴘᴇᴀʀᴇᴅ.*`,
  `*ꜱᴡᴏᴏᴏᴏꜱʜ. ᴊᴜꜱᴛ ʟᴀɴᴅᴇᴅ.*`,
  `*ʙʀᴀᴄᴇ ʏᴏᴜʀꜱᴇʟᴠᴇꜱ. ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ʜɪᴅᴇ ʏᴏᴜʀ ʙᴀɴᴀɴᴀꜱ.*`,
  `*ᴊᴜꜱᴛ ᴀʀʀɪᴠᴇᴅ. ꜱᴇᴇᴍꜱ ᴏᴘ - ᴘʟᴇᴀꜱᴇ ɴᴇʀꜰ.*`,
  `*ᴊᴜꜱᴛ ꜱʟɪᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ʜᴀꜱ ꜱᴘᴀᴡɴᴇᴅ ɪɴ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ʜᴏᴘᴘᴇᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ. ᴋᴀɴɢᴀʀᴏᴏ!!*`,
  `*ᴊᴜꜱᴛ ꜱʜᴏᴡᴇᴅ ᴜᴘ. ʜᴏʟᴅ ᴍʏ ʙᴇᴇʀ.*`,
];
var Text__Bye = [
  `*ᴡɪʟʟ ʙᴇ ᴍɪꜱꜱᴇᴅ.*`,
  `*ᴊᴜꜱᴛ ᴡᴇɴᴛ ᴏꜰꜰʟɪɴᴇ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ʟᴏʙʙʏ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ᴄʟᴀɴ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ɢᴀᴍᴇ.*`,
  `*ʜᴀꜱ ꜰʟᴇᴅ ᴛʜᴇ ᴀʀᴇᴀ.*`,
  `*ɴɪᴄᴇ ᴋɴᴏᴡɪɴɢ ʏᴀ!*`,
  `*ɪᴛ ᴡᴀꜱ ᴀ ꜰᴜɴ ᴛɪᴍᴇ.*`,
  `*ɪ ᴅᴏɴᴜᴛ ᴡᴀɴᴛ ᴛᴏ ꜱᴀʏ ɢᴏᴏᴅʙʏᴇ.*`,
  `*ᴡᴇ ʜᴏᴘᴇ ᴛᴏ ꜱᴇᴇ ʏᴏᴜ ᴀɢᴀɪɴ ꜱᴏᴏɴ.*`,
  `*ʏᴏᴜ'ʀᴇ ʟᴇᴀᴠɪɴɢ, ? ʏᴀʀᴇ ʏᴀʀᴇ ᴅᴀᴢᴇ.*`,
  `*ɢᴏᴏᴅʙʏᴇ ! ɢᴜᴇꜱꜱ ᴡʜᴏ'ꜱ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ :')*`,
  `*ɢᴏᴏᴅʙʏᴇ ! ɪᴛ'ꜱ ɢᴏɴɴᴀ ʙᴇ ʟᴏɴᴇʟʏ ᴡɪᴛʜᴏᴜᴛ ʏᴀ.*`,
  `*ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟᴇᴀᴠᴇ ᴍᴇ ᴀʟᴏɴᴇ ɪɴ ᴛʜɪꜱ ᴘʟᴀᴄᴇ!*`,
  `*ɢᴏᴏᴅ ʟᴜᴄᴋ ꜰɪɴᴅɪɴɢ ʙᴇᴛᴛᴇʀ ꜱʜɪᴛ-ᴘᴏꜱᴛᴇʀꜱ ᴛʜᴀɴ ᴜꜱ!*`,
  `*ʏᴏᴜ ᴋɴᴏᴡ ᴡᴇ'ʀᴇ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ . ʀɪɢʜᴛ? ʀɪɢʜᴛ? ʀɪɢʜᴛ?*`,
  `*ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ, ! ʏᴏᴜ'ʀᴇ ᴏꜰꜰɪᴄɪᴀʟʟʏ ꜰʀᴇᴇ ᴏꜰ ᴛʜɪꜱ ᴍᴇꜱꜱ.*`,
];
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
var ʍɛɛℓιєηт = 𝓜𝓮𝓮6ֆʏռօք.WhatsApp;
async function 𝓜𝓮𝓮6s() {
  ʍɛɛℓιєηт.logger.level = "error";
  var Mee6Sitrep = new Map();
  if (ꜱɪɢɴ.HEROKU_API === `Null` || ꜱɪɢɴ.HEROKU_BOT_NAME === `Null`) {
    console.log(
      Kolor.yellow.bold(
        `𝐌𝐞𝐞𝟔™❌𝗘𝗿𝗿𝗼𝗿⬰ 𝐒𝐞𝐞𝐦𝐬 𝐥𝐢𝐤𝐞 𝐇𝐞𝐫𝐨𝐤𝐮 𝐯𝐚𝐫𝐬 𝐚𝐫𝐞 𝐢𝐧𝐯𝐚𝐥𝐢𝐝.𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐚𝐧𝐝 𝐫𝐞𝐭𝐫𝐲!`
      )
    );
    process.exit(0);
  }
  console.log(
    Kolor.yellow.bold(`⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`)
  );
  console.log(Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰ 𝗖𝗵𝗲𝗰𝗸𝗶𝗻𝗴 𝗳𝗼𝗿 𝘂𝗽𝗱𝗮𝘁𝗲𝘀...`));
  await AutoMeeUpdate();
  try {
    var session = 𝓜𝓮𝓮6ֆʏռօք.Mee6reignite(ꜱɪɢɴ.Mee6);
    ʍɛɛℓιєηт.loadAuthInfo(session);
  } catch (cᴇʀʀᴏʀ) {
    if (
      cᴇʀʀᴏʀ instanceof TypeError ||
      cᴇʀʀᴏʀ.message === `given authInfo is null` ||
      cᴇʀʀᴏʀ instanceof SyntaxError
    ) {
      console.log(
        Kolor.red.bold(`𝗜𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗦𝘁𝗿𝗶𝗻𝗴. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝗮𝗴𝗮𝗶𝗻!`)
      );
      process.exit(0);
    } else {
      console.log(Kolor.red.bold(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  ʍɛɛℓιєηт.on(`connecting`, async () => {
    console.log(
      Kolor.yellow.bold(`⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`)
    );
    console.log(
      Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`)
    );
  });
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  ʍɛɛℓιєηт.on(`open`, async () => {
    console.log(
      Kolor.yellow.bold(`⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`)
    );
    console.log(
      Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`)
    );
    try {
      await 𝓜𝓮𝓮6sql.authenticate();
    } catch (error) {
      console.error(`𝐌𝐞𝐞𝟔™❌𝗘𝗿𝗿𝗼𝗿⬰ 𝗨𝗻𝗮𝗯𝗹𝗲 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲:`, error);
    }
    console.log(
      Kolor.yellow.bold(`⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`)
    );
    console.log(
      Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`)
    );
    await 𝓜𝓮𝓮6sql.sync();
    console.clear();
    console.log(
      Kolor.yellow.bold(
        `\n\n\n\n\n\n⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`
      )
    );
    console.log(
      Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`)
    );
    const Folders = fs.readdirSync(`./𝓜𝓮𝓮🛸𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼`);
    for (const folder of Folders) {
      const commandFiles = fs
        .readdirSync(`./𝓜𝓮𝓮🛸𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of commandFiles) {
        const command = require(`./𝓜𝓮𝓮🛸𝓢𝔂𝓶𝓛𝓲𝓷𝓴𝓼/${folder}/${file}`);
        Mee6Sitrep.set(command.name, command);
        console.log(
          Kolor.yellow.bold(`𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  `),
          Kolor.green.bold(command.name.toUpperCase())
        );
      }
    }
    console.clear();
    console.log(
      Kolor.green.bold(
        `\n\n\n\n\n\n⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`
      ),
      Kolor.red.bold(`
        ███╗   ███╗███████╗███████╗ ██████╗ 
        ████╗ ████║██╔════╝██╔════╝██╔════╝ 
        ██╔████╔██║█████╗  █████╗  ███████╗ 
        ██║╚██╔╝██║██╔══╝  ██╔══╝  ██╔═══██╗
        ██║ ╚═╝ ██║███████╗███████╗╚██████╔╝
        ╚═╝     ╚═╝╚══════╝╚══════╝ ╚═════╝ 
`),
      Kolor.green.bold(`⬡=================⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡=================⬡`)
    );
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
    await ʍɛɛℓιєηт.sendMessage(
      ʍɛɛℓιєηт.user.jid,
      {
        url: ꜱɪɢɴ.MEE,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

シ︎💡𝐏𝐫𝐞𝐟𝐢𝐱: x
シ︎💡⚙️𝗩𝗲𝗿𝘀𝗶𝗼𝗻: ￫ ${vers.vers}
シ︎𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5
シ︎𝐒𝐩𝐚𝐦 𝐆𝐫𝐨𝐮𝐩👓https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH


💻 𝗪𝗵𝗮𝘁 𝗖𝗮𝗻 𝐌𝐞𝐞𝟔™ 𝗗𝗼???
⧪ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
⧪ 𝓜𝓮𝓮6 ɪꜱ ᴡʀɪᴛᴛᴇɴ ɪɴ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴀɴᴅ ɪꜱ ʙʏ ꜰᴀʀ ᴛʜᴇ ᴍᴏꜱᴛ ᴀᴅᴠᴀɴᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ.
⧪ ᴜꜱᴇ 𝓜𝓮𝓮6 ɪɴ ʙᴏᴛʜ ᴘᴜʙʟɪᴄ-ɢʀᴏᴜᴘꜱ ᴀɴᴅ ᴘʀɪᴠᴀᴛᴇ
⧪ ꜱᴏ ᴍᴀɴʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴛʜᴀᴛ ᴡɪʟʟ ʙʟᴏᴡ ᴜᴘ ᴛʜᴇ ᴇᴠᴇʀʏ-ᴅᴀʏ ᴜꜱᴇ ᴏꜰ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ.`,
      }
    );
  });
  await ʍɛɛℓιєηт.connect();
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  //   ʍɛɛℓιєηт.on("message-delete", async (update) => {
  //     update.message =
  //       Object.keys(update.message)[0] === "ephemeralMessage" ?
  //         update.message.ephemeralMessage.message :
  //         update.message;
  //     const type = Object.keys(update.message)[0];
  //     ʍɛɛℓιєηт.sendMessage(
  //       update.key.remoteJid,
  //       `「 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 」
  // •> Name : @${update.participant.split("@")[0]}
  // •> Type : ${type}`,
  //       MessageType.text, {
  //       quoted: update.message,
  //       contextInfo: {
  //         mentionedJid: [update.participant]
  //       },
  //     }
  //     );

  //     ʍɛɛℓιєηт.copyNForward(update.key.remoteJid, update.message);
  //   });
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  ʍɛɛℓιєηт.on(`group-update`, async (update) => {
    groupupdateID = await ʍɛɛℓιєηт.groupMetadata(update.jid);
    if (update.announce == `false`) {
      ʍɛɛℓιєηт
        .sendMessage(
          groupupdateID.id,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*<○ ${groupupdateID.subject} Opened ○>*
Group has been opened by admin Now all members can send messages`,
          MessageType.text
        )
        .catch((error) => console.log(Kolor.red.boldBright(error)));
    } else if (update.announce == `true`) {
      ʍɛɛℓιєηт
        .sendMessage(
          groupupdateID.id,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*<○ ${groupupdateID.subject} 𝗖𝗹𝗼𝘀𝗲𝗱 ○>*
ɢʀᴏᴜᴘ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ʙʏ ᴀᴅᴍɪɴ ɴᴏᴡ ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ꜱᴇɴᴅ ᴍᴇꜱꜱᴀɢᴇꜱ`,
          MessageType.text
        )
        .catch((error) => console.log(Kolor.red.boldBright(error)));
    } else if (!update.desc == ``) {
      tag = update.descOwner.split(`@`)[0] + `@s.whatsapp.net`;
      ʍɛɛℓιєηт
        .sendMessage(
          groupupdateID.id,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*<○ ${groupupdateID.subject} 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
• 𝙶𝚛𝚘𝚞𝚙 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚌𝚑𝚊𝚗𝚐𝚎𝚍 𝚋𝚢:
@${update.descOwner.split(`@`)[0]}

• 𝙽𝚎𝚠 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: 
${update.desc}`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [tag],
            },
          }
        )
        .catch((error) => console.log(Kolor.red.boldBright(error)));
    } else if (update.restrict == `false`) {
      ʍɛɛℓιєηт
        .sendMessage(
          groupupdateID.id,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖h𝗮𝗻𝗴𝗲 ○>*
ᴇᴅɪᴛ ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴏᴘᴇɴᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
          MessageType.text,
          {}
        )
        .catch((error) => console.log(Kolor.red.boldBright(error)));
    } else if (update.restrict == `true`) {
      ʍɛɛℓιєηт
        .sendMessage(
          groupupdateID.id,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
          MessageType.text,
          {}
        )
        .catch((error) => console.log(Kolor.red.boldBright(error)));
    }
  });
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  ʍɛɛℓιєηт.on(`group-participants-update`, async (update) => {
    const MemNum = update.participants[0];
    if (update.action == `add` && MemNum.includes(ʍɛɛℓιєηт.user.jid)) {
      console.log(`⬡••••••••⬡    ⦿𝐌𝐞𝐞𝟔™⦿Added    ⬡••••••••⬡`);
      await ʍɛɛℓιєηт.sendMessage(
        update.jid,
        `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

⦿ ʜᴇʟʟᴏ ᴇᴠᴇʀʏᴏɴᴇ, ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ʜᴇʀᴇ
⦿ ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ *${ᴋᴇɪ}help* ᴛᴏ ᴋɴᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!
⦿ 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝐆𝐫𝐨𝐮𝐩👓https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5`,
        `conversation`
      );
    }
    const GroupMemData = await ʍɛɛℓιєηт.groupMetadata(update.jid);
    const GroupMemG = GroupMemData.participants.length;
    const GroupMemBio = await ʍɛɛℓιєηт.getStatus(
      update.participants[0],
      MessageType.text
    );

    console.log(
      `=================😈    |  ɢʀᴏᴜᴘ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ᴜᴘᴅᴀᴛᴇ  |    😈=================`
    );
    var GroupID = update.jid;
    console.log(GroupID);

    try {
      if (update.action === `add`) {
        var enable = await ɠɠ𝓜𝓮𝓮6.checkSettings(GroupID, `setwelcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }

        var Fetched = await ɠɠ𝓜𝓮𝓮6.getMessage(GroupID, `setwelcome`);
        try {
          ppimg = await ʍɛɛℓιєηт.getProfilePicture(
            `${MemNum.split(`@`)[0]}@c.us`
          );
        } catch {
          ppimg = `https://i.postimg.cc/bJmWSkFL/depositphotos-39258143-stock-illustration-businessman-avatar-profile-picture.jpg`;
        }
        download(
          ppimg,
          {
            directory: `./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/`,
            filename: `ppimg.jpg`,
          },
          async function (err) {
            if (err) throw err;
            const weltext =
              Text_Rand_Welcome[
                Math.floor(Math.random() * Text_Rand_Welcome.length)
              ];
            return await ʍɛɛℓιєηт
              .sendMessage(
                GroupID,
                {
                  url: `./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/ppimg.jpg`,
                },
                MessageType.image,
                {
                  mimetype: Mimetype.png,
                  contextInfo: {
                    mentionedJid: [MemNum],
                  },
                  caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ
*🍄𝐌𝐞𝐞𝟔™ △▽ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭🤖*

🤩@${MemNum.split(`@`)[0]} ${weltext}

⦿================⦿
*⬘𝕭𝖎𝖔:* ${GroupMemBio.status}
*⬘𝕲𝖗𝖔𝖚𝖕:* ${GroupMemData.subject}
*⬘𝕮𝖔𝖚𝖓𝖙:* ${GroupMemG}
⦿================⦿

${Fetched.message}`,
                }
              )
              .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
          }
        );
        return;
      } else if (update.action === `remove`) {
        var enable = await ɠɠ𝓜𝓮𝓮6.checkSettings(GroupID, `setgoodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var Fetched = await ɠɠ𝓜𝓮𝓮6.getMessage(GroupID, `setgoodbye`);
      }
    } catch (cᴇʀʀᴏʀ) {
      console.log(cᴇʀʀᴏʀ);
    }
  });
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
  // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
  // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
  ʍɛɛℓιєηт.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) {
      return;
    }
    if (!chat.messages) {
      return;
    }
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ʍɛɛℓιєηт.groupMetadata(sender)
      : ``;
    var 𝓜𝓮𝓮6 = 𝓜𝓮𝓮6ǟքք.resolve(chat, ʍɛɛℓιєηт, groupMetadata);
    const adminmodls = [
      `add`,
      `demote`,
      `invite`,
      `mute`,
      `promote`,
      `remove`,
      `unmute`,
      `setwelcome`,
      `disappear`,
      `setgoodbye`,
      `tagall`,
    ];
    if (𝓜𝓮𝓮6.isCmd && !𝓜𝓮𝓮6.fromMe) {
      if (
        adminmodls.indexOf(𝓜𝓮𝓮6.commandName) >= 0 &&
        !𝓜𝓮𝓮6.isSenderGroupAdmin
      ) {
        return;
      } else if (𝓜𝓮𝓮6Sudo.indexOf(𝓜𝓮𝓮6.commandName) >= 0) {
        var messageSent = await ʍɛɛℓιєηтult.getUser(𝓜𝓮𝓮6.chatId);
        if (messageSent) {
          return;
        } else {
          await ʍɛɛℓιєηтult.addUser(𝓜𝓮𝓮6.chatId);
          return;
        }
      }
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    // 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
    if (𝓜𝓮𝓮6.isCmd) {
      console.log(
        Kolor.green.bold(
          `𝐌𝐞𝐞𝟔™💡𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻⬰  ${𝓜𝓮𝓮6.commandName.toUpperCase()} command executed.`
        )
      );
      const command = Mee6Sitrep.get(𝓜𝓮𝓮6.commandName);
      var arg = 𝓜𝓮𝓮6.body.trim().split(/\s+/).slice(1);
      var Sender = 𝓜𝓮𝓮6.sender;
      personsending = Sender.substring(0, Sender.length - 15);
      if (!command) {
        return ʍɛɛℓιєηт
          .sendMessage(
            𝓜𝓮𝓮6.chatId,
            {
              url: ꜱɪɢɴ.INVL,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              contextInfo: {
                mentionedJid: [Sender],
              },
              caption: `𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗖𝗼𝗺𝗺𝗮𝗻𝗱: *${arg}*

*•@${personsending},Use ${ᴋᴇɪ}help to get the list of available commands*`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      } else if (command && 𝓜𝓮𝓮6.commandName == `help`) {
        try {
          return command.handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg, Mee6Sitrep);
        } catch (cᴇʀʀᴏʀ) {
          return console.log(Kolor.red.bold(`𝐌𝐞𝐞𝟔™❌𝗘𝗿𝗿𝗼𝗿⬰ `, cᴇʀʀᴏʀ));
        }
      }
      command.handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg);
    }
  });
}
𝓜𝓮𝓮6s().catch((cᴇʀʀᴏʀ) =>
  console.log(Kolor.red.bold(`𝐌𝐞𝐞𝟔™❌𝗘𝗿𝗿𝗼𝗿⬰`), Kolor.red.bold(cᴇʀʀᴏʀ))
);
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡=================
