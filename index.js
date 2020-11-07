function toTop(){

}
var navElements = document.getElementById("navElements");
function openMenu(){
    console.dir(navElements)
    console.log(navElements.style.display)
    if(navElements.style.display === ""){
    navElements.style.display = "flex";
    console.log("2")
    }
    else if(navElements.style.display == "flex"){
        console.log("3")
        navElements.style.display = "";
    }
}