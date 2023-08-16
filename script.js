// Add JavaScript code here
var showContent
function show_hide() {
    if (showContent == true) {
        document.getElementById("close").style.display = "inline";
        document.getElementById('icon-plus').className = 'show-icon'
        document.getElementById('icon-minus').className = 'hide-icon'
        return showContent = false;

    } else {
        document.getElementById("close").style.display = "none";
        document.getElementById('icon-plus').className = 'hide-icon'
        document.getElementById('icon-minus').className = 'show-icon'
        return showContent = true;
    }
}

document.getElementById('icon-plus').className = 'show-icon'
document.getElementById('icon-minus').className = 'hide-icon'

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("Wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});