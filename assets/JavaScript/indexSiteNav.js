/*-------------------------------------------------*/
/*MAKING THE SIDE-NAV ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the window scrolls, the functions starts*/
window.onscroll = function () {
    selectActiveSite()
};

/*gathering all the elements*/
let sideNav1 = document.getElementsByClassName("sideNavElements 1")[0]; // [0] selects the first element (index = 0). IntelliJ couldnt find the element without it¿
let sideNav2 = document.getElementsByClassName("sideNavElements 2")[0];
let sideNav3 = document.getElementsByClassName("sideNavElements 3")[0];
let sideNav4 = document.getElementsByClassName("sideNavElements 4")[0];
let sideNav5 = document.getElementsByClassName("sideNavElements 5")[0];
let sideNav6 = document.getElementsByClassName("sideNavElements 6")[0];

/*Makes sure the HOME-link is active at first even when user is not scrolling*/
if (window.scrollY >= 0) {
    sideNav1.classList.add("sideNavActive");
//Removes from other elements. So that only 1 is active
    sideNav2.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
    sideNav5.classList.remove("sideNavActive");
    sideNav6.classList.remove("sideNavActive");
}

//PS. In the console in many of the pages there will appear a fail. That it cannot read property of undefined. That is because in this functions i have to
// add multiple element, bacause some sites have 4 "pages" in sideBar whilst other have 6. This means that where there are 4 or fewer this fault will come.
//But it doesnt affect the user of the site. I just didnt know how else to do it:)

//Function that chooses what Site is active based on where the user is scrolling on the site*/
function selectActiveSite() {
    /*if the window is scrolled down further than 390vh (3.9times the screen height)*/
    if (window.scrollY >= window.innerHeight * 4.9) {
        /*active class added app*/
        sideNav6.classList.add("sideNavActive");

        /*active class removed from the others so its only 1 link active*/
        sideNav4.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav1.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than 390vh (3.9times the screen height) AND less than 4.9 times the screenheight*/
    if (window.scrollY >= window.innerHeight * 3.9 && window.scrollY < window.innerHeight * 4.9) {
        /*active class added app*/
        sideNav5.classList.add("sideNavActive");

        /*active class removed from the others so its only 1 link active*/
        sideNav4.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav1.classList.remove("sideNavActive");
        sideNav6.classList.remove("sideNavActive");

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
        sideNav6.classList.remove("sideNavActive");
    }
    /*if the window is scrolled down furter than 190vh (1.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 1.9 && window.scrollY < window.innerHeight * 2.9) {
        sideNav3.classList.add("sideNavActive");

        sideNav1.classList.remove("sideNavActive");
        sideNav2.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
        sideNav6.classList.remove("sideNavActive");


    }
    /*if the window is scrolled down furter than 90vh (0.9times the screen height)*/
    else if (window.scrollY > window.innerHeight * 0.9 && window.scrollY < window.innerHeight * 1.9) {
        sideNav2.classList.add("sideNavActive");

        sideNav1.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
        sideNav6.classList.remove("sideNavActive");

    }
    /*if the window is scrolled down furter than -100vh (-1times the screen height) Just to be sure the class is added at top again*/
    else if (window.scrollY > -1 && window.scrollY < window.innerHeight * 0.9) {
        sideNav1.classList.add("sideNavActive");

        sideNav2.classList.remove("sideNavActive");
        sideNav3.classList.remove("sideNavActive");
        sideNav4.classList.remove("sideNavActive");
        sideNav5.classList.remove("sideNavActive");
        sideNav6.classList.remove("sideNavActive");

    }
}