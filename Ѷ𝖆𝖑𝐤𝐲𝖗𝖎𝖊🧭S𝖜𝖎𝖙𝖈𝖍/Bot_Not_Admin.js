("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.Sender_Not_Admin = async (ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, A𝖗𝖌𝖘, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
await ӄ𝖚𝖓𝖆𝖎.sendPresenceUpdate("composing", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
await ӄ𝖚𝖓𝖆𝖎.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
image: { url: "./src/yts.jpg" },
caption: `┌─「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
├• ɴᴀᴍᴇ: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
└────────────────◇


*❌ERROR:* Make Bot Admin to use Admin-Only commands!`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
}
);
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
