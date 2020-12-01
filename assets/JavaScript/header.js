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

/*----------------Switch language-------------------------------*/
let englishText = document.getElementsByClassName("eng");
let norskText = document.getElementsByClassName("no");


function switchNor() {
    //These for-loops makes sure that every element gets changed. So that each element is defined and change pr loop. Without this the
    //program would not be able to change them because they wouldnt be declared.
    for (let i = 0; i < englishText.length; i++) {
        for (let j = 0; j < norskText.length; j++)
            //Makes sure every element of this class changes
        {
            englishText[i].style.display = "none";
            norskText[j].style.display = "inline";
        }
    }
}

    function switchEng() {
        for (let i = 0; i < norskText.length; i++) {
            for (let j = 0; j < englishText.length; j++)
                //Makes sure every element of this class changes
            {
                englishText[j].style.display = "inline";
                norskText[i].style.display = "none";
            }
        }
    }
