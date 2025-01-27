const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    localStorage.setItem("color",color);
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color")===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}
// Dark n Light Modes
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// Default to Dark
// window.addEventListener("load", () => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark" || !savedTheme) { // Default to dark if no theme is saved
//       document.body.classList.add("dark");
//       dayNight.querySelector("i").classList.add("fa-sun");
//     } else {
//       dayNight.querySelector("i").classList.add("fa-moon");
//     }
//   });