const { spawn } = require("child_process");
const child = spawn("node", ["./Cortana🛰️Server/🛸ƈօʀȶǟռǟ™.js"]);
child.stdout.on("data", (data) => {
console.log("Stdout: " + data);
});
child.stderr.on("data", (data) => {
console.log("Stderr: " + data);
});
child.on("error", (Error) => {
console.log("Error: " + Error);
});
child.on("exit", (code, signal) => {
if (code) {
console.log("Exited With Code: " + code);
var childs = require(`child_process`).exec(`python3 🐙ᴋʀʏᴏᴛᴇᴋ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
} else if (signal) {
console.log("Killed With signal: " + signal);
var childs = require(`child_process`).exec(`python3 🐙ᴋʀʏᴏᴛᴇᴋ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
} else {
console.log(
Kolor.green(`⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▀█▀▄▄▀█░▄▄▀█▄░▄█░▄▄▀█░▄▄▀█░▄▄▀███░▄▄▀█░██░████░█▀▄█░▄▄▀█░▄▄▀█░█▀██▄██░▄▄▀█▄▄░██░████░▄▄▀█░▄▄▀
██░████░██░█░▀▀▄██░██░▀▀░█░██░█░▀▀░███░▄▄▀█░▀▀░████░▄▀██░▀▀▄█░▀▀░█░▄▀██░▄█░██░█▀▄███░████░▀▀░█░▄▄▀
██░▀▀▄██▄▄██▄█▄▄██▄██▄██▄█▄██▄█▄██▄███▄▄▄▄█▀▀▀▄████░██░█▄█▄▄█▄██▄█▄█▄█▄▄▄█▄██▄█▄▄▄██░▀▀░█▄██▄█▄▄▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
⬡═════════════════════════|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛        |═════════════════════════⬡`)
);
}
});
