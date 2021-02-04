const chalk = require("chalk");

const languageMap = new Map()

languageMap.set("english",{
    name: chalk.bold.green("             Alpaca Bi Resume"),
    work: `${chalk.white("Frone-end Engineer at")} ${chalk
        .hex("#FF0000")
        .bold("Vtron")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("AlpacaBi"),
    github: chalk.gray("https://github.com/") + chalk.green("AlpacaBi"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("AlpacaBi"),
    web: chalk.cyan("https://alpaca.run"),
    npx: chalk.red("npx") + " " + chalk.white("anmol"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("    WebSite:"),
    labelCard: chalk.white.bold("       Card:"),

    questionsMessage: "What you want to do?",
    question1:`-Send me an ${chalk.blue.bold("Email")}?`,
    answer1:"\nDone, see you soon at inbox.\n",
    question2:`-Contact me through ${chalk.green.bold("WeChat")}?`,
    answer2:"Scan the wechat qrcode to add my WeChat!!",
    question3:`-${chalk.yellow.bold("Banana dance!!!")}`,
    answer3:"\nBanana!!!!\n",
    questionBlog:`-Skip to ${chalk.hex("#f90").bold("Alpaca Blog")}`,
    answerBlog:"\nWelcome to my blog\n",
    question4:"-Just quit.",
    answer4:"\nBye!!!!\n",

    alpacaAIMessage:`-Chat with ${chalk.hex("#f90").bold("Alpaca AI")}(sorry, only support Chinese)`
})

languageMap.set("chinese",{
    name: chalk.bold.green("            Alpaca Bi个人简历"),
    work: `${chalk.white("在")}${chalk.hex("#FF0000").bold("Vtron")}${chalk.white("担任前端工程师")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("AlpacaBi"),
    github: chalk.gray("https://github.com/") + chalk.green("AlpacaBi"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("AlpacaBi"),
    web: chalk.cyan("https://alpaca.run"),
    npx: chalk.red("npx") + " " + chalk.white("alpacabi"),

    labelWork: chalk.white.bold("       工作:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("   个人网址:"),
    labelCard: chalk.white.bold("       Card:"),

    questionsMessage: "你想做什么?",
    question1:`-给我发${chalk.blue.bold("邮件")}`,
    answer1:"\n如果我看邮件了，我会尽快回复你\n",
    question2:`-加我${chalk.green.bold("微信")}好友`,
    answer2:"扫码加我微信!!",
    question3:`-${chalk.yellow.bold("看香蕉君跳舞")}`,
    answer3:"\n气氛逐渐蕉♂灼♂\n",
    questionBlog:`-进入${chalk.hex("#f90").bold("Alpaca Blog")}`,
    answerBlog:"\n欢迎来看我的博客\n",
    question4:"-退出",
    answer4:"\n走好不送\n",

    alpacaAIMessage:`-和${chalk.hex("#f90").bold("Alpaca AI")}聊天`
})

module.exports = languageMap