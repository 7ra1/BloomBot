("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../🤖Utilities/𝕷𝖆ყO𝖚𝖙");
let ᴍꜱ = require("parse-ms");
let { Caught } = require("../👒Buttons/Caught");
let { ӄօʟօʀs } = require("../Vlkyre🌗Events/ӄօʟօʀs");
let Bagde = require("../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/badge");
let { Image_Button } = require("../👒Buttons/Image_Button");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.Night = async (Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓, CC) => {
  let Allowed = [
    "ban",
    "unban",
    "reboot",
    "join",
    "leave",
    "support",
    "bcgroup",
    "bc",
    "sp",
    "dev",
    "devs",
    "support",
    "official",
    "rule",
    "rules",
    "h",
    "how",
    "help",
    "menu",
    "HELP",
    "BOT_RULES",
    "SUPPORT",
    "allmenu",
    "buy basic",
    "buy bronze",
    "buy silver",
    "buy golden",
    "buy platinum",
    "buy diamond",
    "buy sword",
    "buy laptop",
    "buy charm",
    "buy",
    "warn",
    "nolink",
    "stoplink",
    "antilink",
    "welcome",
    "welcomer",
    "setwelcome",
    "autorole",
    "autorank",
    "del",
    "demote",
    "promote",
    "group",
    "remove",
    "setdesc",
    "setgpfp",
    "tagall",
    "admins",
  ];
  if (Allowed.includes(Vlkyre.commandName) == true) {
    console.log(true);
    await ӄօʟօʀs(ӄryӄnz, Vlkyre);
    return await CC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
    ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  } else {
    console.log(false);
    await Bagde.findOne(
      {
        ID: Vlkyre.sender,
      },
      async (error, userBg) => {
        if (error) return Caught(ӄryӄnz, Vlkyre, util.format(error));
        if (!userBg) {
          let newUser = new Bagde({
            ID: Vlkyre.sender,
            Badge: "🧵Basic 10 Commands",
            value: "True",
            Limits: 10,
            CurrentLimitTime: Date.now(),
            PermanentLimitTime: 43200000,
          });
          await newUser.save();
          return await Image_Button(
            ӄryӄnz,
            Vlkyre,
            Vlkyre.A𝖗𝖌𝖘,
            "./👗Skins/Vlkyre_15AKv5i_omy24uvWcz64NpA.png",
            `*🧈Added To DB for Current command First Time!*
⚔️𝗕𝗮𝗱𝗴𝗲: 🧵Basic 
🧀𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: 10 Commands`
          );
          ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
        } else {
          let Time = ᴍꜱ(
            userBg.PermanentLimitTime - (Date.now() - userBg.CurrentLimitTime)
          );
          if (Time > 0 && userBg.Limits == 0) {
            userBg.value = "False";
            await userBg.save();
            return await Image_Button(
              ӄryӄnz,
              Vlkyre,
              Vlkyre.A𝖗𝖌𝖘,
              "./👗Skins/Vlkyre__Shop.png",
              `
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
            );
            ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
          } else if (Time > 0 && !userBg.Limits == 0) {
            userBg.Limits = userBg.Limits - 1;
            userBg.value = "True";
            await userBg.save();
            await ӄօʟօʀs(ӄryӄnz, Vlkyre);
            return await CC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
            ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
          } else if (Time < 0 && userBg.Limits == 0) {
            if (userBg.Badge === "🧵Basic 10 Commands") userBg.Limits = 10;
            if (userBg.Badge === "🥉Bronze 20 Commands") userBg.Limits = 20;
            if (userBg.Badge === "🥈Silver 40 Commands") userBg.Limits = 40;
            if (userBg.Badge === "🥇Golden 60 Commands") userBg.Limits = 60;
            if (userBg.Badge === "💍Platinum 80 Commands") userBg.Limits = 80;
            if (userBg.Badge === "💎Diamond 100 Commands") userBg.Limits = 100;
            userBg.CurrentLimitTime = Date.now();
            userBg.value = "True";
            await userBg.save();
            await ӄօʟօʀs(ӄryӄnz, Vlkyre);
            return await CC(Vlkyre, ӄryӄnz, ӄ_counter, Ѷ𝖎𝖔𝖓);
            ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
          } else if (userBg.value === "False") {
            return await Image_Button(
              ӄryӄnz,
              Vlkyre,
              Vlkyre.A𝖗𝖌𝖘,
              "./👗Skins/Vlkyre__Shop.png",
              `
╔══『 ❗𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭 』
║⚔️𝗕𝗮𝗱𝗴𝗲: ${userBg.Badge}
║💤𝗥𝗲𝗻𝗲𝘄𝘀: ${Time.hours}h ${Time.minutes}m ${Time.seconds}s
║💡𝐓𝐢𝐩: Buy Higher Badges Using ${prefix}shop
╚═══════╝`
            );
          }
        }
      }
    );
  }
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
