$(document).ready(function(){
    $("div.header .menu-icon-mobile").click(function(){
        if($(this).is(".clicked")){
            $(this).removeClass("clicked");
            $("div.header").removeClass("clicked");
            $("div.content").removeClass("clicked");
        }
        else {
            $(this).addClass("clicked");
            $("div.header").addClass("clicked");
            $("div.content").addClass("clicked");

        }

    });

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
    //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration
        );
    });
});

$(document).ready(function(){
    function validateForm(x) {
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos< 1 || dotpos<atpos+1 || dotpos+1>=x.length) {
            return false;
        }
        else {
            return true;
        }
    }
    $("#login").click(function(){
        $(".autorisation-menu .content-style-form-1").attr("style","display:inline-block");
        $(".autorisation-menu").fadeIn("400");
    });
    $("#register").click(function(){
        $(".autorisation-menu .content-style-form-2").attr("style","display:inline-block");
        $(".autorisation-menu").fadeIn("400");
    });
    $(".autorisation-menu").click(function(){
        $(this).fadeOut(400,function(){
            $(".autorisation-menu .content-style-form").removeAttr("style");
        });
    }).children().click(function(e){
        e.stopPropagation();
    });
    $(".autorisation-menu .content-style-form .icon-close").click(function(){
        $(".autorisation-menu").fadeOut(400,function(){
            $(".autorisation-menu .content-style-form").removeAttr("style");
        });
    });

    $("#register-email").keydown(function(){
            var val=$(this).val();
        if(validateForm(val))
            $(this).attr("style","border-color:green;color:green");
        else {
            $(this).removeAttr("style");
        }

    });
    $(".autorisation-menu .content-style-form-2 input[name='password']").keydown(function(){
        if($(this).val().length>7) {
            $(this).attr("style","border-color:yellow;color:yellow");
        }
        else {
            $(this).removeAttr("style");
        }
    });

    $(".autorisation-mobile .loginMob").click(function(){
        if($(".mobile-forms.down").length>0){
            if($(".mobile-forms .content-style-form-1").attr("style")=="display:inline-block"){
                $(".mobile-forms.down").removeClass("down");
                var inter=setInterval(function(){
                    $(".mobile-forms .content-style-form-1").removeAttr("style");
                    clearInterval(inter);
                },400);
            }
            else {
                $(".mobile-forms .content-style-form-2").fadeOut("400",function(){
                    $(".mobile-forms .content-style-form-1").css({
                        opacity: 0,
                        display: 'inline-block'
                    }).animate({opacity:1},400,function(){
                        $(this).attr("style","display:inline-block")
                    });
                    $(".mobile-forms .content-style-form-2").removeAttr("style");
                })
            }
        }
        else {
            $(".mobile-forms .content-style-form-1").attr("style", "display:inline-block");
            $(".mobile-forms").addClass("down");
        }
    });

    $(".autorisation-mobile .registerMob").click(function(){
        if($(".mobile-forms.down").length>0){
            if($(".mobile-forms .content-style-form-2").attr("style")=="display:inline-block"){
                $(".mobile-forms.down").removeClass("down");
                var inter=setInterval(function(){
                    $(".mobile-forms .content-style-form-2").removeAttr("style");
                    clearInterval(inter);
                },400);
            }
            else {
                $(".mobile-forms .content-style-form-1").fadeOut("400",function(){
                    $(".mobile-forms .content-style-form-2").css({
                        opacity: 0,
                        display: 'inline-block'
                    }).animate({opacity:1},400,function(){
                        $(this).attr("style","display:inline-block")
                    });
                    $(".mobile-forms .content-style-form-1").removeAttr("style");
                })
            }
        }
        else {
            $(".mobile-forms .content-style-form-2").attr("style", "display:inline-block");
            $(".mobile-forms").addClass("down");
        }
    });

    $(".mobile-forms .content-style-form .icon-close").click(function(){
        $(".mobile-forms.down").removeClass("down");
        var inter=setInterval(function(){
            $(".mobile-forms .content-style-form").removeAttr("style");
            clearInterval(inter);
        },400);
    });

    $(".mobile-forms").click(function(){
        $(".mobile-forms.down").removeClass("down");
        var inter=setInterval(function(){
            $(".mobile-forms .content-style-form").removeAttr("style");
            clearInterval(inter);
        },400);
    });
    $(".mobile-forms").children().click(function(e){
        e.stopPropagation();
    });

    $("form.orders ul li").click(function(){
        var $this=$(this);
        if (!$this.is(".checked")){
            $this.addClass("checked");
            $this.find("input[type='checkbox']").attr("checked", true);
        }
        else {
            $this.removeClass("checked");
            $this.find("input[type='checkbox']").attr("checked", false);

        }
    });
});