var dots1 = document.querySelector(".dots1");
var dots2 = document.querySelector(".dots2");
var dots3 = document.querySelector(".dots3");

var moreBtn1 = document.querySelector(".more1");
var moreBtn2 = document.querySelector(".more2");
var moreBtn3 = document.querySelector(".more3");

var phrase1 = document.querySelector(".phrase1");
var phrase2 = document.querySelector(".phrase2");
var phrase3 = document.querySelector(".phrase3");

if (moreBtn1.style.display != "inline") {
    moreBtn1.addEventListener("click", () => {
        dots1.style.display = "none";
        moreBtn1.style.display = "none";
        phrase1.style.display = "inline";
    
        dots2.style.display = "inline";
        moreBtn2.style.display = "inline";
        phrase2.style.display = "none";
    
        dots3.style.display = "inline";
        moreBtn3.style.display = "inline";
        phrase3.style.display = "none";
    })  
} 

moreBtn2.addEventListener("click", () => {
    dots2.style.display = "none";
    moreBtn2.style.display = "none";
    phrase2.style.display = "inline";

    dots1.style.display = "inline";
    moreBtn1.style.display = "inline";
    phrase1.style.display = "none";

    dots3.style.display = "inline";
    moreBtn3.style.display = "inline";
    phrase3.style.display = "none";
})

moreBtn3.addEventListener("click", () => {
    dots3.style.display = "none";
    moreBtn3.style.display = "none";
    phrase3.style.display = "inline";

    dots1.style.display = "inline";
    moreBtn1.style.display = "inline";
    phrase1.style.display = "none";

    dots2.style.display = "inline";
    moreBtn2.style.display = "inline";
    phrase2.style.display = "none";
})