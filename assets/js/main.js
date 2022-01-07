$(document).ready(function(){


    $(".slide").width($(".slider").width() - 10);
    
    $(window).scroll(function(){
    
        var scroll = $(window).scrollTop();
        var dh = $(document).height();
        var wh = $(window).height();
        var scrollPourcent = (scroll / (dh - wh)) * 100;
    
        var scrollValue = 100 - scrollPourcent;
    
        $(".photoMateo img").css("top", scrollValue+"px");
    });

});

