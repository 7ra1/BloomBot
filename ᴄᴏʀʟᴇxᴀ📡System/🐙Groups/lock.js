`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Buttons`);
const ᴄᴏʀʟᴇxᴀ_Static = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Static`);
const _𝔏𝔞𝔟_ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/oShit`);
const {
GroupSettingChange,
MessageType,
Mimetype,
} = require(`@adiwajshing/baileys`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ: `*${ᴋᴇɪ}lock* _number m/s/h_
🛸will change chat permissions to admin-only!`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const Halt = require(`../../ᴄᴏʀʟᴇxᴀ🍃Goose/halt`);
const ms = require(`parse-ms`);
Halt.findOne(
{
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
},
async (Error, userHalt) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userHalt) {
var newHalt = new Halt({
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
TimeOut: Date.now(),
PermaTimeOut: 15000,
});
await newHalt
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
}
if (userHalt.PermaTimeOut - (Date.now() - userHalt.TimeOut) > 0) {
let Time = ms(
userHalt.PermaTimeOut - (Date.now() - userHalt.TimeOut)
);
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
`☣️@${աɦօֆɛռȶɦǟȶռʊʍ}, _Wait For ${Time.seconds}s!_`,
MessageType.text,
{
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
);
}
userHalt.TimeOut = Date.now();
await userHalt
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSenderGroupAdmin) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Admins/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isBotGroupAdmin) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❌𝐃𝐞𝐧𝐢𝐞𝐝: _How Can I Use Admin Only Commands If i am not admin?_
║💡 𝐅𝐢𝐱: _Make Me Admin First!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
} else if (Needs[1] === undefined) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
} else if (isNaN(Needs[0])) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.getProfilePicture(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "https://i.postimg.cc/wxWL9G8F/no-profile-picture-300x216.png";
}

var duration;
var type = `minutes`;
if (Needs[1] === `s`) {
duration = Needs[0] * 1000;
type = `seconds`;
} else if (Needs[1] === `m`) {
duration = Needs[0] * 60 * 1000;
type = `minutes`;
} else if (Needs[1] === `h`) {
duration = Needs[0] * 60 * 60 * 1000;
type = `hours`;
} else {
duration = Needs[0] * 60 * 1000;
}
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇
.groupSettingChange(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId, GroupSettingChange.messageSend, true)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
Chat permissions changed to  *admin only*  for 
${Needs[0]} ${type}`
);
setTimeout(async () => {
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.groupSettingChange(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
GroupSettingChange.messageSend,
false
);
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
Chat permissions changed to *all group members*`
);
}, duration);
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
