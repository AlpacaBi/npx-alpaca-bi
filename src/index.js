
const chalk = require("chalk");
const inquirer = require("inquirer");
const open = require("open");
const qrcode = require('qrcode-terminal');
const request = require('request');

const prompt = inquirer.createPromptModule();
const { sleep, clearScreen } = require('./utils');
const languageMap = require('./language');
const getInfo = require('./info');


clearScreen();

const questions1 = [
    {
        type: "list",
        name: "language",
        message: `选择你的语言? ${chalk.green.bold("/")} Select your language?`,
        choices: [
            {
                name: `中文`,
                value: "chinese"
            },
            {
                name: `English`,
                value: "english"
            }
        ]
    }
];


const main = async() => {

    const answer = await prompt(questions1)

    const language = answer.language

    const info = getInfo(language)

    // 显示简历
    console.log(info);

    const alpacaAI = [
        {
            type: 'input',
            message: '你:',
            name: 'phone',
            validate: function(val) {
                if(val == "exit"){
                    console.log(`\n${chalk.hex("#f90").bold("Alpaca AI")}已退出`);
                    return true
                }else{
                    request.post({
                        url:'https://alpaca.run/apis/ai/text', 
                        form:{
                            "textType": "npx",
                            "text": val
                        }
                    }, function(error, response) {
                        let resText = JSON.parse(response.body).message
                        console.log(`\n${chalk.hex("#f90").bold("Alpaca AI")}: ${resText}\n`);
                        return false
                    })

                }
                
            }
        }
    ];

    const questions2 = [
        {
            type: "list",
            name: "action",
            message: languageMap.get(language).questionsMessage,
            choices: [
                {
                    name: languageMap.get(language).alpacaAIMessage,
                    value: async() => {
                        await sleep(2)
                        console.log(`${new Date().toLocaleString( )} 已成功连入Alpaca AI服务器,输入${chalk.red.bold("exit")}即可退出`)
                        await sleep(1)
                        console.log(`${chalk.hex("#f90").bold("Alpaca AI")}: 你好啊，我是Alpaca AI,一个人工智能，你可以打字和我聊天！！！！`)
                        await sleep(1)
                        console.log(`${chalk.hex("#f90").bold("Alpaca AI")}: 我带有脏话检测功能，所以请文明发言哦！！！！\n\n`)
                        await prompt(alpacaAI)
                        await sleep(1.5)
                        clearScreen()
                        console.log(info)
                        let answer = await prompt(questions2)
                        answer.action()
                    }
                },
                {
                    name: languageMap.get(language).question1,
                    value: async() => {
                        open("mailto:biguokang@outlook.com");
                        console.log(languageMap.get(language).answer1);
                        await sleep(3)
                        skipToQuestions2() 
                    }
                },
                {
                    name: languageMap.get(language).question2,
                    value: async() => {
                        clearScreen()
                        console.log(languageMap.get(language).answer2)
                        const url = 'https://u.wechat.com/MI8g1d4fSdEntqOdCrp-DU8';
                        qrcode.generate(url,{small:true});
                        await sleep(5)
                        skipToQuestions2()
                    }
                },
                {
                    name: languageMap.get(language).questionBlog,
                    value: async() => {
                        console.log(languageMap.get(language).answerBlog);
                        open("https://blog.alpaca.run")
                        await sleep(3)
                        skipToQuestions2()
                    }
                },
                {
                    name: languageMap.get(language).question3,
                    value: async() => {
                        console.log(languageMap.get(language).answer3);
                        open("https://cdn.alpaca.run/js/banana.html")
                        await sleep(3)
                        skipToQuestions2()
                    }
                },
                {
                    name: languageMap.get(language).question4,
                    value: () => {
                        console.log(languageMap.get(language).answer4);
                        open("https://cdn.alpaca.run/default/ph.jpg")
                    }
                }
            ]
        }
    ];

    const skipToQuestions2 = async() => {
        clearScreen()
        console.log(info);
        let answer = await prompt(questions2)
        answer.action()  
    }

    const answer2 = await prompt(questions2);

    answer2.action()
}

main()



