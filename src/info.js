
const chalk = require('chalk');
const { repeat } = require('./utils');
const languageMap = require('./language');

/* --------------------- */
/*  THEME PROPERTIES     */
/* --------------------- */

const cc = chalk.bgHex('#000000').hex('#FFF').bold;
const bk = chalk.bgHex('#f90').hex('#000').bold;
const t1 = chalk.bgHex('#808080').hex('#FFF').bold.italic;
const t2 = chalk.bgHex('#696969').hex('#FFF').bold.italic;
const h1 = chalk.bgHex('#808080').hex('#FFF').bold;
const h2 = chalk.bgHex('#1b1b1b').hex('#FFF').bold;
const r1 = chalk.bgHex('#ECF0F1').hex('#000');
const r2 = chalk.bgHex('#BDC3C7').hex('#000');

const p1 = chalk.bgHex('#f90').hex('#000').bold;
const p2 = chalk.bgHex('#000').hex('#fff').bold;

/* --------------------- */
/*  MAIN CONTENT         */
/* --------------------- */

const MG = (n = 1) => bk(repeat(n, ' '));
const EMPTY_ROW = MG(42);


const getInfo = language => {

  const info = languageMap.get(language)

  const PROFILE_ROWS = [
    EMPTY_ROW,
    p1('              AlPACA ') + p2(' RESUME ') + p1('             '),
    EMPTY_ROW,
    cc(info.generalInfo), // GENERAL INFO
  //   EMPTY_ROW,
    h1(info.generalInfoName) + r1(info.generalInfoName2),
    h2(info.generalInfoBirth) + r2(info.generalInfoBirth2),
    h1(info.generalInfoAddress) + r1(info.generalInfoAddress2),
    h2(info.generalInfoCareer) + r2(info.generalInfoCareer2),
    EMPTY_ROW,
    cc(info.socialLinks),
  //   EMPTY_ROW,https://www.linkedin.com/in/AlpacaBi
    h1(info.socialLinksMail) + r1(' biguokang@outlook.com          '),
    h2(info.socialLinksGithub) + r2(' github.com/AlpacaBi            '),
    h1(info.socialLinksBlog) + r1(' blog.alpaca.run                '),
    h2(info.socialLinksWechat) + r2(' workbiguokang                  '),
    h1(info.socialLinkslLinkedIn) + r1(' linkedin.com/in/AlpacaBi       '),
    EMPTY_ROW,
    cc(info.professionalSkills),
  //   EMPTY_ROW,
    t1(' Javascript  ') + MG() + t1('     Vue     ') + MG() + t1('    React     '),
    t2('   Node.js   ') + MG() + t2('    Deno     ') + MG() + t2('    Docker    '),
    EMPTY_ROW
  ];
  
  return PROFILE_ROWS.map((row) => {
    const m = bk(repeat(4, ' '));
    return m + row + m;
  }).join('\n')
};

module.exports = getInfo 