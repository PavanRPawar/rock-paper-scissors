let ruleBtn = document.querySelector(".btn-rule");
let rules = document.querySelector("#rule");
let cross = document.querySelector('.close-btn');

ruleBtn.addEventListener('click', () => {
    rules.style.display = "inline-block";
    cross.style.display = "inline-block";
});

cross.addEventListener('click', () => {
    rules.style.display = "none";
    cross.style.display = "none";
});