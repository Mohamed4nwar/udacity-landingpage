
const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
        navList.appendChild(listItem);
    }
}
createListItem();
window.onscroll = function(){
    document.querySelectorAll("section").forEach(function(active) {
        if (
            active.getBoundingClientRect().top>=-400 &&
            active.getBoundingClientRect().top<=150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
}

navList.addEventListener("click", (toSec) => {
    toSec.preventDefault();
    if(toSec.target.dataset.nav) {
        document.getElementById(`${toSec.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth"});
    setTimeout( () => {
        location.hash =`${toSec.target.dataset.nav}`;
    }, 170);
    }
});

// i dont even know if you really need a comment for this so i am leaving it here
/*
Hola ! 
can i just skip on my own to the fun part?
rechecking my mistakes 
1 suggestion done,
2,3 names are * 2 so this is mistake 2 and 6,
4 click event smooth not done yet,
5 getBoundingClientRect done,
6 your-active-class not done.
left to do :
4 , 6 . done
*/
