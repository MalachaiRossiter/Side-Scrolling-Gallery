var navbutton = document.querySelector(".navbutton-container");
var navbar = document.querySelector(".navbar");

navbutton.addEventListener("click", () => {
    navbutton.style.visibility = "hidden";
    navbar.style.width = "300px";
})



//Copy to ClipBoard
function copyClipboard(){
    navigator.clipboard.writeText("malachai.rossiter@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
}