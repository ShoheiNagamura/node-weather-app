const request = require("request");
const dotenv = require("dotenv").config(); //.configを付ける必要がある

// コンソールに入力した値が取得する↓は第３引数を取得している
const argument = process.argv[2];

const option = {
    // units=metricを加えることで摂氏表記にする
    url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
    method: "GET",
    json: "true"
}

request(option, (error, res, body) => {
    console.log(body.main.temp);
    console.log(`現在の${argument}の気温は、${body.main.temp}度です。`);
})


