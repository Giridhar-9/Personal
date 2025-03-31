let tasks = document.querySelector(".taskbar")
let add = document.getElementById("add")
let list = document.querySelector(".tasks")
let dark=document.getElementById("darkmode")
let nav=document.querySelector(".nav")
let main=document.querySelector("main")

let flag=false;

add.addEventListener("click", () => {
    if (tasks.value == "") {
        alert("Please enter a task")
    }
    else {
        let task=document.createElement("li")
        task.className="task"
        task.innerHTML=`<input type="checkbox" class="done">${tasks.value}<button class="delete">Delete</button>`
        list.append(task)
        tasks.value=""
    }
})
list.addEventListener("click",(e)=>{
    if(e.target.className=="done"){
        e.target.parentElement.style.textDecoration="line-through"
    }
    if(e.target.className=="delete"){
        e.target.parentElement.remove()
    }
})
dark.addEventListener("click",()=>{
    if(flag==false){
        dark.innerHTML="Light Mode"
        dark.style.backgroundColor="white"
        dark.style.color="black"
        flag=true
        nav.style.backgroundColor="black"
        nav.style.color="white"
        main.style.backgroundColor="grey"
        main.style.color="white"
    }
    else{
        flag=false
        dark.innerHTML="Dark Mode"
        dark.style.backgroundColor="black"
        dark.style.color="white"
        nav.style.backgroundColor="burlywood"
        nav.style.color="black"
        main.style.backgroundColor="bisque"
        main.style.color="black"
    }
})




