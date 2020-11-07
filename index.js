/*-------------------------------------------------*/
/*MAKING THE MENULINK ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the windown scrolls, the function starts*/
window.onscroll = function() {selectActiveSite()};

function selectActiveSite() {

/*gathering all the elements*/
    let mainLink = document.getElementsByClassName("main")[0];
    let challengeLink = document.getElementsByClassName("challenge")[0];
    let solutionLink = document.getElementsByClassName("solution")[0];
    let appLink = document.getElementsByClassName("app")[0];

    /*if the window is scrolled down furter than 300vh (3times the screen height)*/
    if (window.scrollY > window.innerHeight * 2.9 ) {

        /*active class added app*/
            appLink.classList.add("active");

            /*active class removed from the others so its only 1 link active*/
                solutionLink.classList.remove("active");
                challengeLink.classList.remove("active");
                mainLink.classList.remove("active");
    }
        else if (window.scrollY > window.innerHeight * 1.9) {

            solutionLink.classList.add("active");

        mainLink.classList.remove("active");
        challengeLink.classList.remove("active");
        appLink.classList.remove("active");
        }
            else if (window.scrollY > window.innerHeight * 0.9) {
                challengeLink.classList.add("active");

        mainLink.classList.remove("active");
        solutionLink.classList.remove("active");
        appLink.classList.remove("active");
            }
                else if (window.scrollY > 0 ) {
                    mainLink.classList.add("active");

        challengeLink.classList.remove("active");
        solutionLink.classList.remove("active");
        appLink.classList.remove("active");
                }
}

/*------------------------------------------------- DENNE FUNKER IKKE*//*

/*MAKING THE MENULINK ON SITEs ACTIVE DEPENDING ON WHERE THE USER IS

let navLink1 = document.getElementsByClassName("1")[0];
let navLink2 = document.getElementsByClassName("2")[0];
let navLink3 = document.getElementsByClassName("3")[0];

document.getElementsByClassName("siteMenuLi").onclick = selectActiveSiteChallenge();



function selectActiveSiteChallenge() {
console.log("0")

    /*if the window is scrolled down furter than 200vh (2times the screen height) and horizontal
    * more than 200vw
    if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > window.innerWidth * 1.9) {

        /*active class added visibility
        navLink3.classList.add("active1");

        /*active class removed from the others so its only 1 link active
        navLink2.classList.remove("active1");
        navLink1.classList.remove("active1");

    }
        else if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > window.innerWidth) {

            navLink2.classList.add("active1");

            navLink1.classList.remove("active1");
            navLink3.classList.remove("active1");
        }
            else if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > 0) {
                navLink1.classList.add("active1");

                navLink3.classList.remove("active1");
                navLink2.classList.remove("active1");
            }

}*/