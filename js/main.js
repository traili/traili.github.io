var dp=jQuery;
var hoverDone;
// console.log = function(){};
dp(document).ready(function() {
    Grid.init();
    dp('.bg-about').parallax("10%", 1);
    // dp("#backtotop").backToTop();
    var videobackground = new dp.backgroundVideo(dp('.waves-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "cn_s1",
        "types": ["mp4", "ogg", "webm"],
        "videoid":"sea",
        "callback": function(){
            console.log('Done');
        }
    });

    var videobackgroundLightning1 = new dp.backgroundVideo(dp('.lightning-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "lightning_background",
        "types": ["mp4", "ogg", "webm"],
        "videoid":"lightning_1",
        "callback": function(){
            setTimeout(function(){
                $(".lightning-video").fadeIn(500);
                setTimeout(function () {
                    $(".fullfilter").animate({
                        opacity: 0.97
                    },2500);
                },2000);
                console.log('Done');
            }, 5000);
        }
    });
    // var videobackgroundFire = new dp.backgroundVideo(dp('.fire-video'), {
    //     "align": "centerXY",
    //     "muted": "muted",
    //     "width": 1280,
    //     "height": 720,
    //     "path": "video/",
    //     "filename": "3",
    //     "types": ["mp4", "ogg", "webm"],
    //     "videoid":"fire"
    // });
    dp(".animatez").waypoint(function (direction) {
        var effect = dp(this).attr('data-effect');
        dp(this).removeClass('animatez');
        dp(this).addClass('animated ' + effect);
    }, {offset: '70%'});
    // dp(".sscroll").smoothScroll();
    // dp("#sscroll_contact").smoothScroll({offset: 50});
    dp(".responsive-video").fitVids();
    if (dp.fn.backstretch) {
        var bg_image = dp(".home-image");
        var bg_image_src = bg_image.data("src");
        bg_image.backstretch(bg_image_src);
    }
    var stayTuned = $("#stay_tuned");
    stayTuned.hover(function(e){
        hoverDone = true;
        e.preventDefault();

        $(".lightning-video").animate({
            opacity: 1
        },0);
        $(".fullfilter-hover").animate({
            opacity: 0.92
        },0);
        $(".fullfilter").animate({
            opacity: 0
        },1500);
    }, function () {
        $(".fullfilter").animate({
            opacity: 0.97
        },0);
        $(".lightning-video").animate({
            opacity: 0.7
        },0);
        $(".fullfilter-hover").animate({
            opacity: 0
        },1500);
        // hoverDone = false;
    });
    stayTuned.click(function(e){
        $(".fullfilter-hover").fadeOut();
        // $(".fullfilter").css("background","linear-gradient(0deg,#bd1ebf, hsla(186, 100%, 50%, 0.98),#213994)");

        $(".fullfilter-clicked").animate({
            opacity: 1
        },1500);
        $(".fullfilter-clicked-2").animate({
            opacity: 1
        },1500);
        $(".fullfilter-clicked-3").animate({
            opacity: 1
        },1500);
        $(".fullfilter-clicked-4").animate({
            opacity: 1
        },1500);
        $(".fullfilter").animate({
            opacity: 0
        },2500);

        // setTimeout(function(){
        //     window.location = 'https://gitlab.com/traili/traili';
        //     // e.trigger();
        // },2000);
    });
    $(".fullfilter").click(function(){
        // $(".fullfilter").css("background","linear-gradient(0deg, #10364c, hsla(186, 100%, 50%, 0.98), #114b6d)");
        // $(".fullfilter-hover").css("background","linear-gradient(0deg,#1c5c82, hsla(186, 100%, 50%, 0.98),#1f80b9)");
    });

    pulseAnimation();
});

function pulseAnimation() {

    var neonMayFadeOut = false;
    var neonFadeOut = true;

        setTimeout(function(){

            setInterval(function(){
            // setTimeout(function(){
            //     console.log('check neon fadeIn');
                if (!hoverDone && !neonMayFadeOut){
                    $(".lightning-video").animate({
                        opacity: 1
                    },0);
                    $(".fullfilter-hover").animate({
                        opacity: 0.92
                    },500, function(){
                        neonFadeOut = false;
                        neonMayFadeOut = true;
                        console.log('neonMayFadeOut', neonMayFadeOut);
                    });
                    console.log('neon fadeIn');
                    $(".fullfilter").animate({
                        opacity: 0
                    },1500);
                }
            }, 5100);

            setInterval(function(){
            // setTimeout(function(){
                console.log('check neon fadeOut');
                if (!hoverDone && neonMayFadeOut && !neonFadeOut) {

                    $(".fullfilter").animate({
                        opacity: 0.97
                    },0);
                    $(".lightning-video").animate({
                        opacity: 0.7
                    },0);
                    $(".fullfilter-hover").animate({
                        opacity: 0
                    },1500, function () {
                        neonFadeOut = true;

                        setTimeout(function(){
                            neonMayFadeOut = false;
                            console.log('neon blink timeout');
                            console.log('neonMayFadeOut', neonMayFadeOut);
                        }, 25000);

                    });
                    console.log('neon fadeOut');
                }
            },22000);
        },8000);
}
