let dayNight = document.querySelector(".dayNight");
let Portfolio = document.querySelector(".Portfolio");

dayNight.addEventListener("click",()=>{
    Portfolio.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["Frontend","Web developer","Software Engineer"],
    loop:true,
    TypeSpeed:100,
    backSpeed:50,
    backDelay:1000
})

