
const chalk = require('chalk');
const { repeat } = require('./utils');

/* --------------------- */
/*  THEME PROPERTIES     */
/* --------------------- */

const cc = chalk.bgHex('#000000').hex('#FFF').bold;
const bk = chalk.bgHex('#f90').hex('#000').bold;
const t1 = chalk.bgHex('#808080').hex('#FFF').bold.italic.underline;
const t2 = chalk.bgHex('#696969').hex('#FFF').bold.italic.underline;
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
const PROFILE_ROWS = [
  EMPTY_ROW,
  p1('              AlPACA ') + p2(' RESUME ') + p1('             '),
  EMPTY_ROW,
  cc(' «             GENERAL INFO             » '),
//   EMPTY_ROW,
  h1('     NAME ') + r1(' Alpaca Bi                      '),
  h2('    BIRTH ') + r2(' 1995/01/30                     '),
  h1('  ADDRESS ') + r1(' GuangZhou, GuangDong China     '),
  h2('   CAREER ') + r2(' Front End Developer            '),
  EMPTY_ROW,
  cc(' «             SOCIAL LINKS             » '),
//   EMPTY_ROW,
  h1('     MAIL ') + r1(' biguokang@outlook.com          '),
  h2('   GITHUB ') + r2(' https://github.com/AlpacaBi    '),
  h1('     BLOG ') + r1(' https://blog.alpaca.run        '),
  
  h2('   WECHAT ') + r2(' workbiguokang                  '),
  EMPTY_ROW,
  cc(' «          PROFESSIONAL SKILLS         » '),
//   EMPTY_ROW,
  t1(' Javascript  ') + MG() + t1('     Vue     ') + MG() + t1('    React     '),
  t2('   Node.js   ') + MG() + t2('    Deno     ') + MG() + t2('    Docker    '),
  EMPTY_ROW
];

const getInfo = language => PROFILE_ROWS.map((row) => {
    const m = bk(repeat(4, ' '));
    return m + row + m;
}).join('\n');

module.exports = getInfo 