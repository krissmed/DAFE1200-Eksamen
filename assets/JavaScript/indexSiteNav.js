/*-------------------------------------------------*/
/*MAKING THE SIDE-NAV ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the window scrolls, the functions starts*/
window.onscroll = function () {
    selectActiveSite()
};


/*gathering all the elements*/
let sideNav1 = document.getElementsByClassName("sideNavElements 1")[0];
let sideNav2 = document.getElementsByClassName("sideNavElements 2")[0];
let sideNav3 = document.getElementsByClassName("sideNavElements 3")[0];
let sideNav4 = document.getElementsByClassName("sideNavElements 4")[0];
let sideNav5 = document.getElementsByClassName("sideNavElements 5")[0];

/*Makes sure the HOME-link is active at first even when user is not scrolling*/
if (window.scrollY >= 0) {

    sideNav1.classList.add("sideNavActive");

    sideNav2.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
    sideNav5.classList.remove("sideNavActive");
}

//Function that chooses what Site is active based on where the user is scrolling on the site*/
function selectActiveSite() {
    /*if the window is scrolled down furter than 390vh (3.9times the screen height)*/
    if (window.scrollY >= window.innerHeight * 3.9) {

        /*active class added app*/
        sideNav5.classList.add("sideNavActive");

        /*active class removed from the others so its only 1 link active*/
        sideNav4.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav1.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than 290vh (2.9times the screen height)*/
    if (window.scrollY > window.innerHeight * 2.9 && window.scrollY < window.innerHeight * 3.9) {

        /*active class added app*/
        sideNav4.classList.add("sideNavActive");

        /*active class removed from the others so its only 1 link active*/

        sideNav3.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav1.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
    }
    /*if the window is scrolled down furter than 190vh (1.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 1.9 && window.scrollY < window.innerHeight * 2.9) {

        sideNav3.classList.add("sideNavActive");

        sideNav1.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than 90vh (0.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 0.9 && window.scrollY < window.innerHeight * 1.9) {

        sideNav2.classList.add("sideNavActive");

        sideNav1.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
    }
    /*if the window is scrolled down furter than -100vh (-1times the screen height) Just to be sure the class is added at top*/
    else if (window.scrollY > -1 && window.scrollY < window.innerHeight * 0.9) {

        sideNav1.classList.add("sideNavActive");

        sideNav2.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
    }
}