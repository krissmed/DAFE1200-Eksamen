/*when the windown scrolls, the functions starts*/
/*Gathering the elements*/
/*the different div-elements/pages*/
let infoPage = document.getElementsByClassName("sourcesInfoContent")[0];
let imgPage = document.getElementsByClassName("sourceImageContent")[0];
let meetingPage = document.getElementsByClassName("sourceMeetingsContent")[0];
let groupPage = document.getElementsByClassName("sourceGroupContent")[0];

/*gathering the sidenav elements for making each active*/
let sideNav1 = document.getElementsByClassName("sideNavElements 1")[0];
let sideNav2 = document.getElementsByClassName("sideNavElements 2")[0];
let sideNav3 = document.getElementsByClassName("sideNavElements 3")[0];
let sideNav4 = document.getElementsByClassName("sideNavElements 4")[0];

/*These functions shows the page and hides the pages that werent clicked*/
function showInfoPage() {
    infoPage.style.display = "block"; //Pages is now visible
    sideNav1.classList.add("sideNavActive"); //Adds active class to the current nav

    //These pages are now hidden
    imgPage.style.display = "none";
    meetingPage.style.display = "none";
    groupPage.style.display = "none";

    //Removes class from others so just 1 nav i active
    sideNav2.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
}
function showImgPage() {
    imgPage.style.display = "block"; //Pages is now visible
    sideNav2.classList.add("sideNavActive"); //Adds active class to the current nav

    //These pages are now hidden
    infoPage.style.display = "none";
    meetingPage.style.display = "none";
    groupPage.style.display = "none";

    //Removes class from others so just 1 nav i active
    sideNav1.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
}
function showSummaryPage() {
    meetingPage.style.display = "block"; //Pages is now visible
    sideNav3.classList.add("sideNavActive"); //Adds active class to the current nav

    //These pages are now hidden
    imgPage.style.display = "none";
    infoPage.style.display = "none";
    groupPage.style.display = "none";

    //Removes class from others so just 1 nav i active
    sideNav2.classList.remove("sideNavActive");
    sideNav1.classList.remove("sideNavActive");
    sideNav4.classList.remove("sideNavActive");
}
function showGroupPage() {
    groupPage.style.display = "block"; //Pages is now visible
    sideNav4.classList.add("sideNavActive"); //Adds active class to the current nav

    //These pages are now hidden
    imgPage.style.display = "none";
    meetingPage.style.display = "none";
    infoPage.style.display = "none";

    //Removes class from others so just 1 nav i active
    sideNav2.classList.remove("sideNavActive");
    sideNav3.classList.remove("sideNavActive");
    sideNav1.classList.remove("sideNavActive");
}