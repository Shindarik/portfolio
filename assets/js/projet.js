$(window).on("load", function(){
    $(".loader").fadeOut("slow");
    $("body").css("overflow-y", "auto");
});

$(document).ready(function () {

    AOS.init();

    $(".menu").hide();

    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let dh = $(document).height();
        let wh = $(window).height();
        let scrollPourcent = (scroll / (dh - wh)) * 100;

        if(scrollPourcent >= 10){
            $(".menu").show("slow");
        }else{
            $(".menu").hide("slow");
        }

    });

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