const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

let date = new Date()
let s = date.getSeconds()
let m = date.getMinutes()
let h = date.getHours()
// second.innerText = s
// minute.innerText = m
// hour.innerText = h
setInterval(() => {
    second.innerText = s
    minute.innerText = m
    hour.innerText = h
    s++
    if(s>=60){
        s=0
        m++
        if(m>=60){
            m=0
            h++
        }
    }
}, 1000)