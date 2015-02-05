function MainImageSize() {
    var windowWidth = parseFloat($(window).width());
    var windowHeight = parseFloat($(window).height());
    $(".main-images").css("width", "100%").css("height", windowHeight + "px");
    if(windowWidth/windowHeight>1.6){
        $(".main-images img").removeAttr("style").css("width","100%");
    }
    else {
        $(".main-images img").removeAttr("style").css("height","100%");
    }

}

$(document).ready(function(){
    MainImageSize();
    $(window).resize(function(){
        MainImageSize();
    });
});