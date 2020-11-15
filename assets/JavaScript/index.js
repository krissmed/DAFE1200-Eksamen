/*document.getElementById("mainVideo").playbackRate = 0.1;*/

/* Gather HTML elements from index.html */
let challengeSite1 = document.getElementById("challengeSite1")[0];
let challengeSite2 = document.getElementById("challengeSite2")[0];
let challengeSite3 = document.getElementById("challengeSite3")[0];

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

let solutionSite1 = document.getElementById("solutionSite1");
let solutionSite2 = document.getElementById("solutionSite2");
let solutionSite3 = document.getElementById("solutionSite3");

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

let appSite1 = document.getElementById("appSite1");
let appSite2 = document.getElementById("appSite2");
let appSite3 = document.getElementById("appSite3");

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



