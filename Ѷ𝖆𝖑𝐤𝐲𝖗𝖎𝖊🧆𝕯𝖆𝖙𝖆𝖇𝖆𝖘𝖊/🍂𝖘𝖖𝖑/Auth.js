("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let Baileys = require("@adiwajshing/baileys");
let Cloud = require("./cloud");
let KEY_MAP = {
"pre-key": "preKeys",
session: "sessions",
"sender-key": "senderKeys",
"app-state-sync-key": "appStateSyncKeys",
"app-state-sync-version": "appStateVersions",
"sender-key-memory": "senderKeyMemory",
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let useRemoteFileAuthState = async () => {
let creds;
let keys = {};

let checkCreds = async () => {
let lock = await Cloud.Cred.findOne({
where: {
key: "noiseKey",
},
});
if (lock) {
return true;
} else {
return false;
}
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let loadCreds = async () => {
let allCreds = await Cloud.Cred.findAll();
let temp = {};
allCreds.forEach((res) => {
let val = res.getDataValue("value");
let key = res.getDataValue("key");
val = JSON.parse(val, Baileys.BufferJSON.reviver);
temp[key] = val;
});
return temp;
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let loadKeys = async () => {
let keys = {
preKeys: {},
sessions: {},
senderKeys: {},
appStateSyncKeys: {},
appStateVersions: {},
senderKeyMemory: {},
};
let allKeys = await Cloud.Key.findAll();
allKeys.forEach((res) => {
let val = res.getDataValue("value");
let key = res.getDataValue("key");
let type = res.getDataValue("type");
val = JSON.parse(val, Baileys.BufferJSON.reviver);
keys[type][key] = val;
});
return keys;
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let saveCreds = async (data) => {
if (!data) {
data = creds;
}
for (let _key in data) {
let cred = await Cloud.Cred.findOne({
where: {
key: _key,
},
});
if (cred) {
await cred
.update({
value: JSON.stringify(data[_key], Baileys.BufferJSON.replacer, 2),
})
.then((res) => {})
.catch((err) => {});
} else {
await Cloud.Cred.create({
key: _key,
value: JSON.stringify(data[_key], Baileys.BufferJSON.replacer, 2),
})
.then((res) => {})
.catch((err) => {});
}
}
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let saveKey = async (key, data, _key) => {
for (let subKey in data[_key]) {
let res = await Cloud.Key.findOne({
where: {
key: subKey,
type: key,
},
});
if (res) {
await res
.update({
value: JSON.stringify(
data[_key][subKey],
Baileys.BufferJSON.replacer,
2
),
})
.then((res) => {})
.catch((err) => {});
} else {
await Cloud.Key.create({
key: subKey,
value: JSON.stringify(
data[_key][subKey],
Baileys.BufferJSON.replacer,
2
),
type: key,
})
.then((res) => {})
.catch((err) => {});
}
}
return;
};
("「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢® 」");
let credsExist = await checkCreds();
if (credsExist) {
let parent = {
creds: {},
keys: {},
};
let allCreds = await loadCreds();
let allKeys = await loadKeys();
parent.creds = allCreds;
parent.keys = allKeys;
let final = JSON.parse(
JSON.stringify(parent),
Baileys.BufferJSON.reviver
);
creds = final.creds;
keys = final.keys;
} else {
creds = (0, Baileys.initAuthCreds)();
keys = {};
saveCreds();
}
return {
state: {
creds,
keys: {
get: (type, ids) => {
let key = KEY_MAP[type];
return ids.reduce((dict, id) => {
let _a;
let value =
(_a = keys[key]) === null || _a === void 0 ? void 0 : _a[id];
if (value) {
if (type === "app-state-sync-key") {
value = Baileys.proto.AppStateSyncKeyData.fromObject(value);
}
dict[id] = value;
}
return dict;
}, {});
},
set: async (data) => {
for (let _key in data) {
let key = KEY_MAP[_key];
keys[key] = keys[key] || {};
Object.assign(keys[key], data[_key]);
await saveKey(key, data, _key);
}
},
},
},
saveCreds,
};
};
module.exports = useRemoteFileAuthState;
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
