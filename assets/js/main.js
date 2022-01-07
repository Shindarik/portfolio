$(document).ready(function () {

    let leftPos, movLeft = 0, movRight = 0;

    setInterval(() => {
        $(".slide").width($(".slider").width() - 10);
    }, 10);



    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let dh = $(document).height();
        let wh = $(window).height();
        let scrollPourcent = (scroll / (dh - wh)) * 100;

        let scrollValue = 100 - scrollPourcent;

        $(".photoMateo img").css("top", scrollValue + "px");
    });

    $(".btnLeft").on("click", function () {
        leftPos = parseInt($(".type").css("left"));

        if (leftPos < 0) {
            movLeft += $(".slider").width();
            movRight -= $(".slider").width();
            $(".type").css("left", movLeft);
        }
    });

    $(".btnRight").on("click", function () {
        leftPos = parseInt($(".type").css("left"));

        if (leftPos < $(".slider").width()) {
            movLeft -= $(".slider").width();
            movRight += $(".slider").width();
            $(".type").css("left", -movRight);
        }
    });

});