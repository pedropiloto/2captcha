const Captcha = require("../dist/index.js");
const Solver = new Captcha.Solver(process.argv[2]);

Solver.hcaptcha("0x4AAAAAAACJhSxiz0CabX-P", "https://discord.com")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})