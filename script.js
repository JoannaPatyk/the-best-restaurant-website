const icons = document.querySelectorAll(".section1-icons  .fas");
const menu = document.querySelector(".menu");
const targets = document.querySelectorAll(".target");

let idx = 1;

function showIcons() {
    idx++;

    const icon = document.querySelector(".section1-icons .change");
    icon.classList.remove("change");

    if (idx > icons.length) {
        icons[0].classList.add("change");
        idx = 1;
    } else {
        icon.nextElementSibling.classList.add("change");
    }
}

setInterval(showIcons, 4000);

menu.addEventListener("click", menuChange);

function menuChange() {
    targets.forEach(item => {
        item.classList.toggle("change");
    })
}