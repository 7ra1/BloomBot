try {
  (async () => {
    try {
      const { 爪𝖎𝖟𝖚ӄ𝖎 } = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/🍁爪𝖎𝖟𝖚ӄ𝖎™`);
      const AutoKrakz = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
      const _𝔏𝔞𝔟_ = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
      const ʍɨʐʊӄɨgoose = require("mongoose");
      const Kolor = require(`chalk`);
      await ʍɨʐʊӄɨgoose
        .connect(_𝔏𝔞𝔟_.MizukiMdb, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        })
        .then(console.log(Kolor.bgGreenBright.black(`ʍɨʐʊӄɨgoose Connected`)))
        .catch((err) => {
          console.log(Kolor.bgRedBright.black(`ʍɨʐʊӄɨgoose Error: \n${err}`));
          process.exit(1);
        });
      await AutoKrakz();
      await 爪𝖎𝖟𝖚ӄ𝖎();
    } catch (ℓαвєяяσя) {
      console.log(ℓαвєяяσя);
    }
  })();
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
