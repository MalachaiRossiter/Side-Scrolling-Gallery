
$(".navbutton-container").click(function(){
    $(".navbar").css({
        width: "16%"
    });
    $(".navbutton-container").css({
        opacity: "0"
    });

    setTimeout(function(){
        $(".majorLinks").css({
            opacity: "1"
        });
        $(".minorLinks").css({
            opacity: "1"
        });
        $(".close").css({
            opacity: "1"
        });
    },500);
});

$(".close").click(function(){
    $(".majorLinks").css({
        opacity: "0"
    });
    $(".majorLinks").css({
        opacity: "0"
    });
    $(".minorLinks").css({
        opacity: "0"
    });
    $(".close").css({
        opacity: "0"
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
    navigator.clipboard.writeText("malachai.rossiter@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
}