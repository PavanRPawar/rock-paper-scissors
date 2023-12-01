let userSelect = document.querySelectorAll(".user-select");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let pc = document.querySelector(".pc");
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let oppo = document.querySelector(".oppo");
let play = document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector(".triangle");
let uscore = JSON.parse(localStorage.getItem("usc"));
let cscore = JSON.parse(localStorage.getItem("csc"));
let uScoreElem = document.getElementById("uscore");
let cScoreElem = document.getElementById("cscore");
let ruleBtn = document.querySelector(".btn-rule");
let ruleModal = document.querySelector(".rule-modal");
let ruleImg = document.querySelector(".rule-img");
let nextBtn = document.querySelector(".btn-next");

if (uscore) {
    uScoreElem.innerText = uscore;
}
let ucount = 0;
if (cscore) {
    cScoreElem.innerText = cscore;
}
let ccount = 0;

userSelect.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        triangle.style.display = "none";
        userSelect.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
            pc.style.opacity = "1";
            setTimeout(() => {
                computer[random].style.display = "block";
                computer[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(() => {
            if (random == index) {
                winModal.style.display = "grid";
                winner.innerText = "TIE UP";
                winner.classList.add("hidden");
                oppo.style.display = "none";
                play.innerHTML = "REPLAY";
            } else if (index == 0 && random == 1 || index == 1 && random == 2 || index == 2 && random == 0) {
                winModal.style.display = "grid";
                winner.innerText = "YOU WIN";
                ucount = uscore;
                ucount++;
                uScoreElem.innerText = ucount;
                localStorage.setItem("usc", JSON.stringify(ucount));
                nextBtn.style.display = "inline-block";
                element.classList.add("blob");
            } else {
                winModal.style.display = "grid";
                winner.innerText = "YOU LOST";
                ccount = cscore;
                ccount++;
                cScoreElem.innerText = ccount;
                localStorage.setItem("csc", JSON.stringify(ccount));
                computer[random].classList.add("blob");
            }
        }, 1500);
    })
});

play.addEventListener("click", () => {
    window.location.reload();
});


// Rules
let rules = document.querySelector("#rule");
let cross = document.querySelector('.close-btn');

ruleBtn.addEventListener('click', () => {
    console.log('clicked');
    rules.style.display = "inline-block";
    cross.style.display = "inline-block";
});

cross.addEventListener('click', () => {
    console.log('clicked');
    rules.style.display = "none";
    cross.style.display = "none";
});