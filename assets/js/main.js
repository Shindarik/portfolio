$(document).ready(function () {

    let leftPos, movLeft = 0, movRight = 0;
    let sliderWidth = $(".slider").width();


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
            movLeft += sliderWidth;
            movRight -= sliderWidth;
            
            $(".type").animate({
                left: movLeft
            }, 1000);

            setTimeout(() => {
                leftPos = parseInt($(".type").css("left"));
                if(leftPos > 0){
                    $(".type").css("left", "0");
                }
            }, 2000);

        }
    });

    $(".btnRight").on("click", function () {
        leftPos = parseInt($(".type").css("left"));

        console.log(leftPos, sliderWidth);

        if (leftPos > (-sliderWidth) || leftPos == 0) {
            movLeft -= sliderWidth;
            movRight += sliderWidth;

            $(".type").animate({
                left: -movRight
            }, 1000);
        }
    });

});