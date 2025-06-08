let menuBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-icon");

menuBtn.addEventListener("click",()=>{
    document.querySelector(".sidebar").style.display = "block"
})

closeBtn.addEventListener("click",()=>{
     document.querySelector(".sidebar").style.display = "none"
})