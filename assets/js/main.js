$(document).ready(function () {

    let movLeft = 0, compteurMov = 1, compteurSlide = 0;
    let sliderWidth = $(".slide").width();

<<<<<<< Updated upstream
    $(".btnLeft").hide();
=======
    $(".toggle").on("click", function(){
        $(".menu").toggleClass("active");
    });

>>>>>>> Stashed changes


    $(window).scroll(function () {

        let scroll = $(window).scrollTop();
        let dh = $(document).height();
        let wh = $(window).height();
        let scrollPourcent = (scroll / (dh - wh)) * 100;

        let scrollValue = 100 - (2*scrollPourcent);

        $(".photoMateo img").css("top", scrollValue + "px");
    });

    $(".btnLeft").on("click", function () {

        if (compteurMov == 1 && compteurSlide !=0) {
            compteurMov = 0;
            compteurSlide--;

            if (compteurSlide == 0) {
                $(".btnLeft").hide();
                sliderWidth = $(".slide").width();
            } else if (compteurSlide == 2) {
                $(".btnRight").hide();
                sliderWidth = $(".slide").width();
            } else if (compteurSlide == 1) {
                $(".btnLeft").hide();
                $(".btnRight").hide();
                sliderWidth = $(".slide").width();
                $(".btnLeft").show();
                $(".btnRight").show();
            }

            movLeft += sliderWidth;
            
            $(".type").animate({
                left: movLeft
            }, 1000);

            setTimeout(() => {
                compteurMov = 1;
            }, 1200);

        }
    });

    $(".btnRight").on("click", function () {


        if (compteurMov == 1 && compteurSlide!=2) {
            compteurMov = 0;
            compteurSlide++;

            if (compteurSlide == 0) {
                $(".btnLeft").hide();
                sliderWidth = $(".slide").width();
            } else if (compteurSlide == 2) {
                $(".btnRight").hide();
                sliderWidth = $(".slide").width();
            } else if (compteurSlide == 1) {
                $(".btnLeft").hide();
                $(".btnRight").hide();
                sliderWidth = $(".slide").width();
                $(".btnLeft").show();
                $(".btnRight").show();
            }

            movLeft -= sliderWidth;

            
            $(".type").animate({
                left: movLeft
            }, 1000);

            setTimeout(() => {
                compteurMov = 1;
            }, 1200);
        }
    });

    let winWidth = $(window).width();

    $(window).resize(function () {

        if(winWidth != $(window).width()){

            winWidth = $(window).width();

            $(".type").css("left", "0px");
    
            $(".btnLeft").hide();
            $(".btnRight").show();
            compteurSlide = 0;
            compteurMov = 1;
            movLeft = 0;
        }

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