/*--------------------------------------------------------------*/
// To make it easier to move to the top of the page
function moveToTop() {

    window.scrollTo(0, 0);
}

let toTopButton = document.getElementById("toTop");
function scrollToTop() {
//makes the scrollToTop button visible when user is scrolled 90px down and hides it when under 90px
if(window.innerWidth < 900){
    if (window.scrollY <= 90) {
        toTopButton.style.display = "none";
    }
    else if (window.scrollY > 90) {
        toTopButton.style.display = "block";
    }
}
}

/*-------------------------------------------------*/
/*MAKING THE SIDE-NAV ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the windown scrolls, the functions starts*/
window.onscroll = function () {
    selectActiveSite()
    scrollToTop();
};


/*gathering all the elements*/
let sideNav1 = document.getElementsByClassName("sideNavElements 1")[0];
let sideNav2 = document.getElementsByClassName("sideNavElements 2")[0];
let sideNav3 = document.getElementsByClassName("sideNavElements 3")[0];
let sideNav4 = document.getElementsByClassName("sideNavElements 4")[0];

/*Makes sure the HOME-link is active at first even when user is not scrolling*/
if (window.scrollY >= 0) {

    sideNav1.classList.add("sideNavActive");

    sideNav2.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
}

//Function that chooses what Site is active based on where the user is scrolling on the site
function selectActiveSite() {

    /*if the window is scrolled down furter than 290vh (2.9times the screen height)*/
    if (window.scrollY > window.innerHeight * 2.9) {

        /*active class added app*/
        sideNav4.classList.add("sideNavActive");

        /*active class removed from the others so its only 1 link active*/
        sideNav3.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav1.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than 190vh (1.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 1.9) {


        sideNav3.classList.add("sideNavActive");

        sideNav1.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than 90vh (0.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 0.9) {

        sideNav2.classList.add("sideNavActive");


        sideNav1.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
    }
    /*if the window is scrolled down furter than -100vh (-1times the screen height) Just to be sure the clas is added at top*/
    else if (window.scrollY > -1 ) {

        sideNav1.classList.add("sideNavActive");

        sideNav2.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
    }
}
/*-------------------------------------------------------------------------*/

/* Making the hamburger menu show/not show the menu */

// Gather HTML elements
let headerMenu = document.getElementById("headerMenu");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");

// Function which toggles hamburgermenu on/off
function toggleMenu() {

    //Makes the three stripes appear
    if(headerMenu.style.display === "flex"){
        headerMenu.style.display = "";

        line1.style.transform = "rotate(0deg)";
        line1.style.opacity = "1";
        line1.style.marginTop= "";
        line1.style.position = "";

        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg)";
        line3.style.opacity = "1";
    }
    else if (headerMenu.style.display === ""){
        headerMenu.style.display = "flex";

        //Moves the top line so that it creates an X with the bottom line
        line1.style.transformOrigin = "center";
        line1.style.transform = "rotate(-45deg)";
        line1.style.translate = "(-9px, 6px)";
        line1.style.marginTop= "17px";
        line1.style.position = "absolute";

        //Makes the middle line disappear
        line2.style.opacity = "0";

        //Rotates the bottom line
        line3.style.transformOrigin = "center";
        line3.style.transform = "rotate(45deg)";
        line3.style.translate = "(-8px, -8px)";
    }
}

//Function that collapses hamburgermenu when an site is selected
function collapseHamMenu() {
    headerMenu.style.display = "";

    line1.style.transform = "rotate(0deg)";
    line1.style.opacity = "1";
    line1.style.marginTop= "";
    line1.style.position = "";
    line2.style.opacity = "1";
    line3.style.transform = "rotate(0deg)";
    line3.style.opacity = "1";
}

/*---------------------SIDENAV--------------------------------------*/
