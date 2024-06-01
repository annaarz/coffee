const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const burgerPanel = document.querySelector(".burger");
const links = document.querySelectorAll(".menu a");

burgerBtn.addEventListener("click", ()=> {
    burgerPanel.classList.add("visible")
} )

closeBtn.addEventListener("click", ()=> {
    burgerPanel.classList.remove("visible")
} )

links.forEach(item => {
    item.addEventListener("click", ()=> {
        burgerPanel.classList.remove("visible")
    } )
})