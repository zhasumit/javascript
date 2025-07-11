let marks = 78;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}

function getRank(val) {
    if (val <= 25) return "D";
    else if (val <= 50) return "C";
    else if (val <= 75) return "B";
    else return "A";
}

console.log(getRank(40))
console.log(getRank(70))
console.log(getRank(80))


let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Yellow");
        break;
    case "apple":
        console.log("Red");
        break;
    default:
        console.log("Unknown");
}

function getGrades(score) {
    if (score >= 90 && score <= 100) return "A"
    else if (score >= 80) return "B"
    else if (score >= 70) return "C"
    else if (score >= 60) return "D"
    else if (score >= 33) return "E"
    else if (score >= 0) return "F"
    else return "Invalid marks"
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rps(user, bot) {
    if (user === bot) return;

    if (user === "rock" && bot === "scissor") return "user";
    if (user === "scissor" && bot === "paper") return "user";
    if (user === "paper" && bot === "rock") return "user";

    return "bot";
}

let rounds = 3;
let userscore = 0, botscore = 0;

function playRound() {
    if (rounds === 0) {
        userscore >= botscore ? console.log("User wins") : console.log("Bot wins");
        rl.close();
        return;
    }

    rl.question("user: ", (user) => {
        const options = ["rock", "paper", "scissor"];
        const bot = options[Math.floor(Math.random() * 3)];

        console.log(`Bot: ${bot}`);

        rps(user, bot) === "user" ? userscore++ : botscore++;
        rounds--;
        playRound();
    });
}

playRound();
