"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const message_type_1 = require("../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\u269C\uFE0F\uD835\uDC0A\uD835\uDC2B\uD835\uDC32\uD835\uDC28\uD835\uDC13\uD835\uDC1E\uD835\uDC24/message-type");
const ______1 = __importDefault(require("../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const Sticker_Button = (TUF, Fox, Vʟӄʏʀɛ, ǟʀɢʊʍɛռȶ, caption, media) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (ǟʀɢʊʍɛռȶ[0] && ǟʀɢʊʍɛռȶ[0].startsWith("@")) {
            let TagPerson = ǟʀɢʊʍɛռȶ[0].replace(/[^0-9]/g, "");
            let TagMention = TagPerson + "@s.whatsapp.net";
            yield TUF.sendMessage(Vʟӄʏʀɛ.chatId, {
                quoted: Fox,
                timestamp: Date(),
                gifPlayback: true,
                contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender, TagMention] },
                video: { url: media },
                mimetype: "video/mp4",
                caption: caption,
                footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
                buttons: [
                    {
                        buttonId: `${______1.default.MuveOn}help`,
                        buttonText: { displayText: `${______1.default.MuveOn}help` },
                        type: 1,
                    },
                    {
                        buttonId: `${______1.default.MuveOn}vlkyre`,
                        buttonText: { displayText: `${______1.default.MuveOn}vlkyre` },
                        type: 1,
                    }
                ],
                headerType: 5,
            }, message_type_1.MessageType.buttonsMessage);
            // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        }
        else if (Vʟӄʏʀɛ.isTextReply) {
            let Receiver = Fox.message.extendedTextMessage.contextInfo.participant;
            let քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
            yield TUF.sendMessage(Vʟӄʏʀɛ.chatId, {
                quoted: Fox,
                timestamp: Date(),
                gifPlayback: true,
                contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender, Receiver] },
                video: { url: media },
                mimetype: "video/mp4",
                caption: caption,
                footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
                buttons: [
                    {
                        buttonId: `${______1.default.MuveOn}help`,
                        buttonText: { displayText: `${______1.default.MuveOn}help` },
                        type: 1,
                    },
                    {
                        buttonId: `${______1.default.MuveOn}menu`,
                        buttonText: { displayText: `${______1.default.MuveOn}menu` },
                        type: 1,
                    },
                ],
                headerType: 5,
            }, message_type_1.MessageType.buttonsMessage);
            // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
        }
        else {
            yield TUF.sendMessage(Vʟӄʏʀɛ.chatId, {
                quoted: Fox,
                timestamp: Date(),
                gifPlayback: true,
                contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender] },
                video: { url: media },
                mimetype: "video/mp4",
                caption: caption,
                footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
                buttons: [
                    {
                        buttonId: `${______1.default.MuveOn}help`,
                        buttonText: { displayText: `${______1.default.MuveOn}help` },
                        type: 1,
                    },
                    {
                        buttonId: `${______1.default.MuveOn}menu`,
                        buttonText: { displayText: `${______1.default.MuveOn}menu` },
                        type: 1,
                    },
                ],
                headerType: 5,
            }, message_type_1.MessageType.buttonsMessage);
        }
        // ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
    }
    catch (error) {
        console.log(error);
    }
});
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
module.exports = {
    VSbt: Sticker_Button,
};
