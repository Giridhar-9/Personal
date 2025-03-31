let btn = document.querySelector(".operands")
let screen = document.querySelector(".screen")

let num1 = "";

btn.addEventListener("click", (e) => {
    if (e.target.className == "btn") {
        if (e.target.id != "=" && e.target.id != "ac") {
            num1 = num1 + e.target.id
            screen.innerText = `${num1}`
        }
        else if (e.target.id == "=") {
            screen.innerText = `${eval(num1)}`
            num1 = ""
        }
        else {
            screen.innerText = ""
            num1 = ""
        }
    }
})