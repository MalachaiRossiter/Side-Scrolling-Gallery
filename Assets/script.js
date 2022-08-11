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
        PointerEvent: "none"
    });
    $(".minorLinks").css({
        opacity: "0",
        PointerEvent: "none"
    });
    $(".close").css({
        opacity: "0",
        PointerEvent: "none"
    });
    $("#copiedEmail").css({
        visibility: "hidden"
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
        console.log("Something");
        $(".cursor").css({
            backgroundColor: "#000"
        });
    }
})