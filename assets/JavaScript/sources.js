/*Gathering the elements*/
    /*the different div-elements/pages*/
    let infoPage = document.getElementsByClassName("sourcesInfoContent")[0];
    let imgPage = document.getElementsByClassName("sourceImageContent")[0];
    let meetingPage = document.getElementsByClassName("sourceMeetingsContent")[0];
    let groupPage = document.getElementsByClassName("sourceGroupContent")[0];


/*These functions shows the page and hides the pages that werent clicked*/
function showInfoPage() {
            infoPage.style.display = "block"; //Pages is now visible

    //These pages are now hidden
            imgPage.style.display = "none";
            meetingPage.style.display = "none";
            groupPage.style.display = "none";
}
function showImgPage() {
    imgPage.style.display = "block"; //Pages is now visible

    //These pages are now hidden
    infoPage.style.display = "none";
    meetingPage.style.display = "none";
    groupPage.style.display = "none";
}
function showSummaryPage() {
    meetingPage.style.display = "block"; //Pages is now visible

    //These pages are now hidden
    imgPage.style.display = "none";
    infoPage.style.display = "none";
    groupPage.style.display = "none";
}
function showGroupPage() {
    groupPage.style.display = "block"; //Pages is now visible

    //These pages are now hidden
    imgPage.style.display = "none";
    meetingPage.style.display = "none";
    infoPage.style.display = "none";
}

// speak "Hello World" in the browser default language
window.speechSynthesis.speak(new SpeechSynthesisUtterance('Hello World'));
