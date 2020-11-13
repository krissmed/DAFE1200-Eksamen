/*--------------------------------------------------------------*/
// To make it easier to move to the top of the page
function moveToTop() {
    window.scrollTo(0, 0);
}

let toTopButton = document.getElementById("toTop");
function scrollToTop() {
//makes the scrollToTop button visible when user is scrolled 90px down and hides it when under 90px
    if (window.scrollY <= 90) {
        toTopButton.style.display = "none";
        }
    else if (window.scrollY > 90) {
            toTopButton.style.display = "block";
        }
}

/*-------------------------------------------------*/
/*MAKING THE MENULINK ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the windown scrolls, the functions starts*/
window.onscroll = function () {
    selectActiveSite();
    scrollToTop();
};

/*gathering all the elements*/
let mainLink = document.getElementsByClassName("main")[0];
let challengeLink = document.getElementsByClassName("challenge")[0];
let solutionLink = document.getElementsByClassName("solution")[0];
let appLink = document.getElementsByClassName("app")[0];

/*Makes sure the HOME-link is active at first even when user is not scrolling*/
if (window.scrollY >= 0) {

    mainLink.classList.add("active");

    challengeLink.classList.remove("active");
    solutionLink.classList.remove("active");
    appLink.classList.remove("active");
}

    //Function that chooses what Site is active based on where the user is scrolling on the site
function selectActiveSite() {

    /*if the window is scrolled down furter than 290vh (2.9times the screen height)*/
    if (window.scrollY > window.innerHeight * 2.9) {

        /*active class added app*/
        appLink.classList.add("active");

        /*active class removed from the others so its only 1 link active*/
        solutionLink.classList.remove("active");
        challengeLink.classList.remove("active");
        mainLink.classList.remove("active");

    }
    /*if the window is scrolled down furter than 190vh (1.9times the screen height)*/
        else if (window.scrollY > window.innerHeight * 1.9) {


        solutionLink.classList.add("active");

        mainLink.classList.remove("active");
        challengeLink.classList.remove("active");
        appLink.classList.remove("active");

        }
    /*if the window is scrolled down furter than 90vh (0.9times the screen height)*/
            else if (window.scrollY > window.innerHeight * 0.9) {

        challengeLink.classList.add("active");


                mainLink.classList.remove("active");
                solutionLink.classList.remove("active");
                appLink.classList.remove("active");
            }
    /*if the window is scrolled down furter than -100vh (-1times the screen height) Just to be sure the clas is added at top*/
    else if (window.scrollY > -1 ) {

        mainLink.classList.add("active");

        challengeLink.classList.remove("active");
        solutionLink.classList.remove("active");
        appLink.classList.remove("active");
    }
}
/*-------------------------------------------------------------------------*/

/* Making the hamburger menu show/not show the menu */

// Gather HTML elements
var headerMenu = document.getElementById("headerMenu");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

// Function which toggles hamburgermenu on/off
function toggleMenu() {

    //Makes the three stripes appear
    if(headerMenu.style.display == "flex"){
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

/*---------------------------------------------------------------------*/

/* Gather HTML elements from index.html */

var challengeSite1 = document.getElementById("challengeSite1");
var challengeSite2 = document.getElementById("challengeSite2");
var challengeSite3 = document.getElementById("challengeSite3");

/* To show challenge Site 1 Container*/
function showChallengeSite1() {
    if (challengeSite1.style.display === "none") {
        challengeSite1.style.display = "block"; // Moving challengeSite1 container on screen
        challengeSite2.style.display = "none"; // Moving challengeSite1 container off screen
        challengeSite3.style.display = "none"; // Moving challengeSite1 container off screen
    }
}

/* To show challenge Site 2 Container*/
function showChallengeSite2() {

    if (challengeSite2.style.display === "none") {
        challengeSite1.style.display = "none"; // Moving challengeSite1 container off screen
        challengeSite2.style.display = "block"; // Moving challengeSite2 container on screen
        challengeSite3.style.display = "none"; // Moving challengeSite3 container off screen

    }
}

/* To show challenge Site 3 Container*/
function showChallengeSite3() {
    if (challengeSite3.style.display === "none") {
        challengeSite1.style.display = "none"; // Moving challengeSite1 container off screen
        challengeSite2.style.display = "none"; // Moving challengeSite2 container off screen
        challengeSite3.style.display = "block"; // Moving challengeSite3 container on screen
    }
}

/*---------------------------------------------------------------------*/

/* Gather HTML elements from index.html */

var solutionSite1 = document.getElementById("solutionSite1");
var solutionSite2 = document.getElementById("solutionSite2");
var solutionSite3 = document.getElementById("solutionSite3");

/* To show solution Site 1 Container*/
function showSolutionSite1() {
    console.log("0");
    if (solutionSite1.style.display === "none") {
        console.log("1");
        solutionSite1.style.display = "block"; // Makes challengeSite1 container visible
        solutionSite2.style.display = "none"; // Makes challengeSite1 container hidde
        solutionSite3.style.display = "none"; // Makes challengeSite1 container hidden
    }
}

/* To show solution Site 2 Container*/
function showSolutionSite2() {

    console.log("2");
    if (solutionSite2.style.display === "none") {
        console.log("3");
        solutionSite1.style.display = "none"; // Makes challengeSite1 container hidden
        solutionSite2.style.display = "block"; // Makes challengeSite2 container visible
        solutionSite3.style.display = "none"; // Makes challengeSite3 container hidden

    }
}
/* To show solution Site 3 Container*/
function showSolutionSite3() {
    console.log("4");
    if (solutionSite3.style.display === "none") {
        console.log("5");
        solutionSite1.style.display = "none"; // Makes challengeSite1 container hidden
        solutionSite2.style.display = "none"; // Makes challengeSite2 container hidden
        solutionSite3.style.display = "block"; // Makes challengeSite3 container visible
    }
}

/*---------------------------------------------------------------------*/

/* Gather HTML elements from index.html */

var appSite1 = document.getElementById("appSite1");
var appSite2 = document.getElementById("appSite2");
var appSite3 = document.getElementById("appSite3");

/* To show solution Site 1 Container*/
function showAppSite1() {
    console.log("0");
    if (appSite1.style.display === "none") {
        console.log("1");
        appSite1.style.display = "block"; // Makes appSite1 container visible
        appSite2.style.display = "none"; // Makes appSite1 container hidde
        appSite3.style.display = "none"; // Makes appSite1 container hidden
    }
}

/* To show solution Site 2 Container*/
function showAppSite2() {

    console.log("2");
    if (appSite2.style.display === "none") {
        console.log("3");
        appSite1.style.display = "none"; // Makes appSite1 container hidden
        appSite2.style.display = "block"; // Makes appSite2 container visible
        appSite3.style.display = "none"; // Makes appSite3 container hidden

    }
}

/* To show solution Site 3 Container*/
function showAppSite3() {
    console.log("4");
    if (appSite3.style.display === "none") {
        console.log("5");
        appSite1.style.display = "none"; // Makes appSite1 container hidden
        appSite2.style.display = "none"; // Makes appSite2 container hidden
        appSite3.style.display = "block"; // Makes appSite3 container visible
    }
}


