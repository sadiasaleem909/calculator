let btns = document.querySelectorAll(".btns")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        btns[i].classList.add("neon")

        setTimeout(function () {
            btns[i].classList.remove("neon");
        }, 300)
    })
}

let equalBtn = document.querySelector(".equals");

equalBtn.addEventListener("click", () => {
    equalBtn.classList.add("neon");

    setTimeout(function () {
        equalBtn.classList.remove("neon");
    }, 300);
});

let userInput = document.getElementById("value")

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (event) => {
        userInput.value += event.target.innerHTML
    })
}

equalBtn.addEventListener("click", () => {
    let expression = userInput.value
        .replaceAll("÷", "/")
        .replaceAll("×", "*");

    let result = eval(expression)
    userInput.value = result

})
let clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    userInput.value = ""
})         