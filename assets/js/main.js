$(document).ready(function () {

    let leftPos, movLeft = 0,
        movRight = 0,
        compteurMov = 1;
    let sliderWidth = $(".slider").width();


    setInterval(() => {
        $(".slide").width($(".slider").width() - 10);
        sliderWidth = $(".slider").width();

        leftPos = parseInt($(".type").css("left"));

        if (leftPos == 0) {
            $(".btnLeft").hide();
        } else if (leftPos <= -(sliderWidth)) {
            $(".btnRight").hide();
        } else {
            $(".btnLeft").show();
            $(".btnRight").show();
        }
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

        if (leftPos < 0 && compteurMov == 1) {
            movLeft += sliderWidth;
            movRight -= sliderWidth;
            compteurMov = 0;

            $(".type").animate({
                left: movLeft
            }, 1000);

            setTimeout(() => {
                compteurMov = 1;
            }, 1000);

        }
    });

    $(".btnRight").on("click", function () {
        leftPos = parseInt($(".type").css("left"));

        if ((leftPos > (-sliderWidth) && compteurMov == 1) || leftPos == 0) {
            movLeft -= sliderWidth;
            movRight += sliderWidth;
            compteurMov = 0;

            $(".type").animate({
                left: -movRight
            }, 1000);

            setTimeout(() => {
                compteurMov = 1;
            }, 1000);
        }
    });

    $(window).resize(function () {
        $(".type").animate({
            left: 0
        }, 1000);

        movRight = 0, movLeft = 0;
    });

    $(".clipboard").on("click", function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        $temp.remove();

        $(this).toggleClass("active");

        setTimeout(() => {
            $(this).toggleClass("active");
        }, 1000);
    });

});