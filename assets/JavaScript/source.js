/*----Makes the menu on the sites active depending on where the user is-------------*/

/*Gathering the elements*/
let contentPage = document.getElementsByClassName("Content")[0];
let imgPage1 = document.getElementsByClassName("Images1")[0];
let meetingPage2 = document.getElementsByClassName("Meeting2")[0];
let groupPage3 = document.getElementsByClassName("Group3")[0];

    /*Makes the first page active without the user doing anything*/
    if (window.scrollY >= 0) {
        contentPage.classList.add("activeSitenav");
        console.log("content ved 0");
        imgPage1.classList.remove("activeSitenav");
        meetingPage2.classList.remove("activeSitenav");
        groupPage3.classList.remove("activeSitenav");
    }

    /*when the windown scrolls, the functions starts*/
    window.onscroll = function () {
        pageMenuActive();
    };
    /*the function*/
    function pageMenuActive() {
            /*if the window is scrolled down further than 3.9 of the height of the browser (390vh)*/
            if (window.scrollY > window.innerHeight * 3.90) {
                    /*adds the .activeSitenav class to the group-siteNav*/
                groupPage3.classList.add("activeSitenav");

                    /*Removes from other so just 1 is active*/
                contentPage.classList.remove("activeSitenav");
                meetingPage2.classList.remove("activeSitenav");
                imgPage1.classList.remove("activeSitenav");
            }
            /*if the window is scrolled down further than 2.9 of the height of the browser (290vh)*/
            else if (window.scrollY > window.innerHeight * 2.90) {
                meetingPage2.classList.add("activeSitenav");

                contentPage.classList.remove("activeSitenav");
                imgPage1.classList.remove("activeSitenav");
                groupPage3.classList.remove("activeSitenav");
            }
            /*if the window is scrolled down further than 1.5 of the height of the browser (150vh)*/
            else if (window.scrollY > window.innerHeight * 1.5) {
                imgPage1.classList.add("activeSitenav");

                contentPage.classList.remove("activeSitenav");
                meetingPage2.classList.remove("activeSitenav");
                groupPage3.classList.remove("activeSitenav");
            }
            /*if the user scroll back to top*/
            else if (window.scrollY > -5) {
                contentPage.classList.add("activeSitenav");

                imgPage1.classList.remove("activeSitenav");
                meetingPage2.classList.remove("activeSitenav");
                groupPage3.classList.remove("activeSitenav");
            }
        }