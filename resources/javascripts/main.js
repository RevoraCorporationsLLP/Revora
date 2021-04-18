window.onscroll = function() { hidefunction(); }
var prevScrollpos = window.pageYOffset;
var nav = document.getElementsByTagName('button')[0];
/*
function hidefunction() {
    var currentScrollPos = window.pageYOffset;
    if (navbutton.className != "navbar-toggler navdisplay navhide") {
        if (currentScrollPos > 5) {
            // document.getElementById("header").style.top = "-1px";
            document.getElementById("header_cont_id").style.backgroundColor = "#fff";
            document.getElementById("header_cont_id").style.transition = "0.3s";
        } else {
            // document.getElementById("header").style.top = "-100px";
            document.getElementById("header_cont_id").style.backgroundColor = "transparent";
            document.getElementById("header_cont_id").style.transition = "0.3s";
        }
        prevScrollpos = currentScrollPos;
    }
}*/
var links = document.getElementsByClassName('butt');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var active = document.getElementsByClassName('nav-a');
        active[0].className = active[0].className.replace(" nav-a", "");
        this.className += " nav-a";
    });
}
var navbutton = document.querySelector('.navdisplay');
// var header = document.querySelector('.header');
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('navhide');
    // header.classList.toggle('header-dark');
});

function navhide() { navbutton.click(); }

$('.navbar-nav>li>a').on('click', function() { $('.navbar-collapse').collapse('hide'); });

const aboutusbutton = document.querySelector(".aboutus");
aboutusbutton.addEventListener("click", () => { aboutbutton.click(); });
$(document).click(function(e) { if (!$(e.target).is('a')) { $('.collapse').collapse('hide'); } });