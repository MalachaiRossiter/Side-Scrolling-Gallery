// Making the navbar work 
$(".navbutton-container").click(function(){
    $(".navbar").css({
        width: "16%"
    });
    $(".navbutton-container").css({
        opacity: "0"
    });

    setTimeout(function(){
        $(".majorLinks").css({
            opacity: "1",
            pointerEvents: "all"
        });
        $(".minorLinks").css({
            opacity: "1",
            pointerEvents: "all"
        });
        $(".close").css({
            opacity: "1",
            pointerEvents: "all"
        });
    },500);
});

$(".close").click(function(){
    $(".majorLinks").css({
        opacity: "0",
        pointerEvents: "none"
    });
    $(".minorLinks").css({
        opacity: "0",
        pointerEvents: "none"
    });
    $(".close").css({
        opacity: "0",
        pointerEvents: "none"
    });
    $("#copiedEmail").css({
        visibility: "hidden",
        pointerEvents: "none"
    })
    setTimeout(function(){
        $(".navbutton-container").css({
            opacity: "1"
        });
        $(".navbar").css({
            width: "3%"
        });
    },250);
    
});

//Copy to ClipBoard
function copyClipboard(){
    navigator.clipboard.writeText("tinkeringartist@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
}

// getting cursor to follow you
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " +(e.pageY-3)+ "px; left: "+(e.pageX-3)+"px;");
    if (e.target.classList.contains("linkitem") || e.target.classList.contains("navdot"))  {
        cursor.classList.add("cursorLink");
        cursor.setAttribute("style", "top: " +(e.pageY-11)+ "px; left: "+(e.pageX-11)+"px;");
    } else {
        cursor.classList.remove("cursorLink");
    }
    if (e.target.classList.contains("navbar")){
        $(".cursor").css({
            backgroundColor: "#000"
        });
    }
})

//getting the scroll arrow to move on timer
let timeleft = 10;
const arrowTimer = setInterval(() => {
    if (timeleft == 8) {
        $(".material-symbols-outlined").css({
            left: "20px",
            opacity: "0"
        });
    }
    if (timeleft == 5) {
        $(".material-symbols-outlined").css({
            left: "-20px",
        });
    }
    if (timeleft == 3) {
        $(".material-symbols-outlined").css({
            opacity: "1",
            left: "0px"
        });
    }
    timeleft -= 1;
    if (timeleft <= 0){
        timeleft = 10;
    }
    console.log(timeleft)
}, 1000);