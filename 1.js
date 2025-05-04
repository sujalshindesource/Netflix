let userscore = 0;
let compscore = 0;
let userwin;
let r = document.querySelector(".rock");
let p = document.querySelector(".paper");
let s = document.querySelector(".scissor");
let a = [r, p, s];

let rc = document.querySelector(".rock-c");
let pc = document.querySelector(".paper-c");
let sc = document.querySelector(".scissor-c");
let ac = [rc, pc, sc];

let hit = document.querySelector(".hit");
let hit1 = document.querySelector(".hitbar");
let y = document.querySelector(".y");
let c = document.querySelector(".c");
let comp;
let body = document.querySelector("body");

const getcompchoice = () => {
    let ch = ac[Math.floor(Math.random() * 3)];
    comp = ch.classList[0];
    console.log("computer choice : " + comp);
    return ch;
};

const showwinner = (userwin) => {
    let color;
    if (userwin === 1) {
        hit1.style.backgroundColor = "green";
        hit.innerText = "user win !!";
        userscore++;
        y.innerText = userscore;
        color = "green";
    } else if (userwin === 2) {
        hit1.style.backgroundColor = "red";
        hit.innerText = "user lose !!";
        compscore++;
        c.innerText = compscore;
        color = "red";
    } else {
        hit.innerText = "draw";
        hit1.style.backgroundColor = "yellow";
        color = "yellow";
    }
    // chatgpt code pasted look here try to understand
    let blinkInterval = setInterval(() => {
        body.style.backgroundColor = body.style.backgroundColor === color ? "white" : color;
    }, 300);

    setTimeout(() => {
        clearInterval(blinkInterval);
        body.style.backgroundColor = "white";
    }, 2000);
};

const playgame = (userchoice) => {
    let ch = getcompchoice();
    let compchoice = ch.classList[0];

    ch.classList.add("goback");

    setTimeout(() => {
        ch.classList.remove("goback");
    }, 2000);

    score(userchoice, compchoice);
};

const score = (userchoice, compchoice) => {
    if (userchoice == "rock" && compchoice == "rock-c" || userchoice == "paper" && compchoice == "paper-c" || userchoice == "scissor" && compchoice == "scissor-c" ) {
        userwin = 3;
    } else {
        if (userchoice === "rock") {
            userwin = compchoice === "paper-c" ? 2 : 1;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor-c" ? 2 : 1;
        } else {
            userwin = compchoice === "rock-c" ? 2 : 1;
        }
    }
    showwinner(userwin);
};

a.forEach((element) => {
    element.addEventListener("click", () => {
        let userchoice = element.classList[0];
        console.log("user choice :" + userchoice);
        element.classList.add("go");

        setTimeout(() => {
            element.classList.remove("go");
        }, 2000);

        playgame(userchoice);
    });
});
