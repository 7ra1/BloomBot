("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/myfunc`);
const fs = require(`fs`);
const util = require(`util`);
const hxz = require(`hxz-api`);
const chalk = require(`chalk`);
const db = require(`quick.db`);
const axios = require(`axios`);
const canvacord = require(`canvacord`);
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
const LinkList = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/antilink`);
const { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
const { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
const { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
const YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

var Present_Path = require(`path`);
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();

exports.antilink = async (
  ӄ𝖚𝖓𝖆𝖎,
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
  A𝖗𝖌𝖘,
  pushName,
  fromMe,
  F𝖚𝖑𝖑_A𝖗𝖌𝖘,
  quoted,
  mime,
  isMedia,
  isGroup,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmin,
  isSenderAdmin,
  isSenderTUF,
  commandName,
  body,
  isReply,
  mentionByTag,
  mentionByReply
) => {
  if (!isBotAdmin) return await Bot_Not_Admin(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) return await Group_Only(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  if (!isSenderAdmin) return await Sender_Not_Admin(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  if (!F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      `*❌ERROR:*  Argument Needed!

*⚡USAGE:* ${prefix}${Final_Name} on/off`
    );
    `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  } else if (A𝖗𝖌𝖘[0] === `ON` || A𝖗𝖌𝖘[0] === `on` || A𝖗𝖌𝖘[0] === `On`) {
    return await LinkList.findOne(
      {
        serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatId,
      },
      async (error, server) => {
        if (error) return console.log(error);
        if (!server) {
          var newServer = new LinkList({
            serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatId,
            value: "ON",
          });
          await newServer.save();
          return await Image_Button(
            ӄ𝖚𝖓𝖆𝖎,
            Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
            A𝖗𝖌𝖘,
            "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Matte.png",
            `📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On`
          );
        } else {
          return await Image_Button(
            ӄ𝖚𝖓𝖆𝖎,
            Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
            A𝖗𝖌𝖘,
            "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Matte.png",
            `📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ✅On`
          );
        }
      }
    );
    `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  } else if (A𝖗𝖌𝖘[0] === `OFF` || A𝖗𝖌𝖘[0] === `off` || A𝖗𝖌𝖘[0] === `Off`) {
    return await LinkList.findOne(
      {
        serverID: ᴠʟᴋʏʀᴇ.chatId,
      },
      async (error, server) => {
        if (error) return console.log(error);
        if (!server) {
          return await Image_Button(
            ӄ𝖚𝖓𝖆𝖎,
            Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
            A𝖗𝖌𝖘,
            "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Matte.png",
            `📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF`
          );
        } else {
          await server.delete();
          return await Image_Button(
            ӄ𝖚𝖓𝖆𝖎,
            Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
            A𝖗𝖌𝖘,
            "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Matte.png",
            `📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.groupName}
🔗𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤: ❌OFF`
          );
        }
      }
    );
    `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  } else {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      `*❌ERROR:*  Argument Needed!

*⚡USAGE:* ${prefix}${Final_Name} on/off`
    );
  }
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
