("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙`);
require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/Ѷ𝖆𝖑.js`);
const git = require(`simple-git`)();
const Kolor = require("chalk");
const { smsg } = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/myfunc`);
exports.messages_upsert = async (chatUpdate, Ѷ𝖎𝖔𝖓, ӄ𝖚𝖓𝖆𝖎) => {
  try {
    𝖈𝖍𝖆𝖙 = chatUpdate.messages[0];
    if (!𝖈𝖍𝖆𝖙.message) return;
    await git.fetch();
    var newCommits = await git.log(["𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®..origin/𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"]);
    if (newCommits.total != 0) {
      var h𝖛𝖑𝖐𝖕 = require("child_process").exec(
        `heroku ps:restart worker -a ${HEROKU_APP_NAME}`
      );
      h𝖛𝖑𝖐𝖕.stderr.pipe(process.stderr);
      h𝖛𝖑𝖐𝖕.on("exit", function (code, signal) {
        if (code) console.log("📟 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐂𝐨𝐝𝐞:", Kolor.red(code));
        if (signal)
          console.log("📶 𝐕𝐥𝐤𝐲𝐫𝐞 𝐄𝐱𝐢𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 𝐒𝐢𝐠𝐧𝐚𝐥:", Kolor.blue(signal));
        process.exitCode = 1;
      });
    }
    𝖈𝖍𝖆𝖙.message =
      Object.keys(𝖈𝖍𝖆𝖙.message)[0] === `ephemeralMessage`
        ? 𝖈𝖍𝖆𝖙.message.ephemeralMessage.message
        : 𝖈𝖍𝖆𝖙.message;
    if (𝖈𝖍𝖆𝖙.key && 𝖈𝖍𝖆𝖙.key.remoteJid === `status@broadcast`) return;
    if (!ӄ𝖚𝖓𝖆𝖎.public && !𝖈𝖍𝖆𝖙.key.fromMe && chatUpdate.type === `notify`)
      return;
    if (𝖈𝖍𝖆𝖙.key.id.startsWith(`BAE5`) && 𝖈𝖍𝖆𝖙.key.id.length === 16) return;
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = smsg(ӄ𝖚𝖓𝖆𝖎, 𝖈𝖍𝖆𝖙, Ѷ𝖎𝖔𝖓);
    require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/Ѷ𝖆𝖑.js`)(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chatUpdate, Ѷ𝖎𝖔𝖓);
  } catch (err) {
    console.log(err);
  }
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
