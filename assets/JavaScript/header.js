
    /* Making the hamburger menu show/not show the menu */

// Gather HTML elements
let headerMenu = document.getElementById("headerMenu");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");

// Function which toggles hamburgermenu on/off. Runs when the lines are clicked
function toggleMenu() {

    //Makes the three stripes appear
    if(headerMenu.style.display === "flex"){ //If the menu.display is flexed which means the menu is "dropped down"
        headerMenu.style.display = ""; //Hide

        //This creates the three lines again
        line1.style.transform = "rotate(0deg)";
        line1.style.opacity = "1";
        line1.style.marginTop= "";
        line1.style.position = "";

        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg)";
        line3.style.opacity = "1";
    }
    else if (headerMenu.style.display === ""){
        headerMenu.style.display = "flex"; //show menu

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

