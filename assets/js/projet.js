$(window).on("load", function(){
    $(".loader").fadeOut("slow");
    $("body").css("overflow-y", "auto");
});

$(document).ready(function () {
    $(".iconBox").click(function(){
        $(".bgBlack").toggleClass("active");
        let url = $(this).css("background-image");
        url=url.replace(/"/g,'');
        url=url.replace(/\(/g,'');
        url=url.replace(/\)/g,'');
        url=url.replace("url",'');
        $(".bgBlack img").attr("src", url);
        $("body").css("overflow-y", "hidden");
    });

    $(".bgBlack").click(function(){
        $(".bgBlack").toggleClass("active");
        $("body").css("overflow-y", "auto");
    });

});