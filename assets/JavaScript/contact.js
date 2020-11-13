/* Making the hamburger menu show/not show the menu */

// Gather html elements
var headerMenu = document.getElementById("headerMenu");
var line0 = document.getElementById("line0");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

function toggleMenu(){

    if(headerMenu.style.display == "flex"){
        headerMenu.style.display = "";
        
        line1.style.transform = "rotate(0deg)";
        line1.style.opacity = "1";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0deg)";
        line3.style.opacity = "1";

        line0.innerHTML="";
    }
        else if (headerMenu.style.display === ""){
            headerMenu.style.display = "flex";

            line1.style.opacity = "0";
            line2.style.opacity = "0";
            line3.style.opacity = "0";

            line0.innerHTML="<h2>EXIT</h2>";
        }

        console.log("Toggle Hamburger Menu") // Troubleshoot
}
function openAnswer(question){
    
}