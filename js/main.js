$(".header__burgir").click(function() {
    
    if($(".header__burgir").hasClass("active")) {
        $(".header__wrap").removeClass("active");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function () {
            $(".header__burgir").removeClass("active");
        }, 300);
    } else {
        $(".header__wrap").addClass("active");
        $(".header__burgir").addClass("active");
        setTimeout(function () {
            $(".header__burgir").addClass("rotate");
        }, 300);
    }
});