var dp=jQuery;
var hoverDone, clicked, lightningVideoOpacity,fluidFilter = "turnedOn";
console.log = function(){};
dp(document).ready(function() {
    Grid.init();
    dp('.bg-about').parallax("10%", 1);
    // dp("#backtotop").backToTop();
    // var videobackground = new dp.backgroundVideo(dp('.waves-video'), {
    //     "align": "centerXY",
    //     "muted": "muted",
    //     "width": 1280,
    //     "height": 720,
    //     "path": "video/",
    //     "filename": "cn_s1",
    //     "types": ["mp4", "ogg", "webm"],
    //     "videoid":"sea",
    //     "callback": function(){
    //         console.log('Done');
    //     }
    // });

    var videobackgroundLightning1 = new dp.backgroundVideo(dp('.lightning-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1920,
        "height": 1080,
        "path": "video/",
        "filename": "lightning_background_1080_1.5",
        "types": ["mp4", "ogg", "webm"],
        "videoid":"lightning_1",
        "callback": function(){
            setTimeout(function(){
                $(".lightning-video").fadeIn(500);
                setTimeout(function () {
                    if (!clicked) {
                        $(".fullfilter").animate({
                            opacity: 0.97
                        },2500);
                    }
                },100);
                console.log('Done');
            }, 0);
            $("#preloader_gif").fadeOut();
        }
    });

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

    const player = new Plyr('#tr_plyr', {
        controls: [],
        autoplay: false,
        loop: {active: true}
    });

    // src: '/video/tr.webm',

    player.source = {
        type: 'video',
        title: 'Traili fluid',
        sources: [
            {
                src: 'https://psyfundvideo.s3.eu-west-3.amazonaws.com/tr.webm',
                // src: '/video/tr.webm',
                type: 'video/webm',
                size: 1080
            }
        ]
    };

    // var $video  = $('#fluid_container'),
    //     $window = $(window);
    //
    // $(window).resize(function(){
    //     var height = $window.height();
    //     $video.css('height', height);
    //
    //     var videoWidth = $video.width(),
    //         windowWidth = $window.width(),
    //         marginLeftAdjust =   (windowWidth - videoWidth) / 2;
    //
    //     $video.css({
    //         'height': height,
    //         'marginLeft' : marginLeftAdjust
    //     });
    // }).resize();


    stayTuned.hover(function(e){
        hoverDone = true;
        e.preventDefault();

        if (clicked) {
            // lightningVideoOpacity = 0.9;
            lightningVideoOpacity = 1;
        } else {
            lightningVideoOpacity = 1;
        }

        if (!clicked) {
            $(".lightning-video").animate({
                opacity: lightningVideoOpacity
            },0);

            $(".fullfilter").animate({
                opacity: 0
            },1500);

            $(".fullfilter-hover").animate({
                opacity: 0.92
            },500);
        } else {

            $(".fullfilter").animate({
                opacity: 0.8
            },1500);
            $(".fullfilter-hover").animate({
                opacity: 0.8
            },500);
        }



    }, function () {

        if (!clicked) {
            $(".fullfilter").animate({
                opacity: 0.97
            },0, function(){
                console.log('Set fullfilter 97')
            });
            $(".lightning-video").animate({
                opacity: 1
            },5000);
        } else {

        }
        $(".fullfilter-hover").animate({
            opacity: 0
        },1500);
        $(".fullfilter-clicked-rightblock").animate({
            opacity: 0
        },500);


        // hoverDone = false;
    });


    stayTuned.click(function(e){
        clicked = true;

        if (fluidFilter === "turnedOn") {
            fluidFilter = "turnedOff";
        } else {
            fluidFilter = "turnedOn";
        }

        // $(".lightning-video").fadeIn(500);

        $(".lightning-video").hide();

        // $(".lightning-video").animate({
        //     display: "none"
        // },0);
        // $(".waves-video").animate({
        //     opacity: 0
        // },0);

        // $(".fullfilter-hover").css("background", "linear-gradient(0deg, #ff006a, hsl(66deg 100% 50% / 98%), #a900ff)");
        // $(".fullfilter-hover").css("background", "linear-gradient(0deg, rgb(255, 0, 106), rgb(134, 8, 136), rgb(169, 0, 255))");
        $(".fullfilter-hover").css("background", "rgba(112, 12, 130, 0.64)");

        $(".fullfilter-clicked-rightblock").animate({
            opacity: 1
        },500);

        $(".fullfilter-clicked").animate({
            opacity: 1
        },500);
        $(".fullfilter-clicked-2").animate({
            opacity: 1
        },100);
        $(".fullfilter-clicked-3").animate({
            opacity: 1
        },100);
        $(".fullfilter-clicked-4").animate({
            opacity: 1
        },100);

        $(".fullfilter").animate({
            opacity: 0.4
        },500);

        // $(".fullfilter-clicked-2").css("background","linear-gradient(90deg, rgba(245, 35, 132, 0.99) 32%, rgb(239, 0, 255), rgba(46, 34, 142, 0) 36%)");

        setTimeout(function(){
            // $(".fullfilter-hover").animate({
            //     opacity: 0
            // },700);

            $("#fluid_container").fadeIn(1000);
            player.play();
        },0);

        if (fluidFilter === "turnedOff") {
            setTimeout(function(){
                $(".fullfilter").animate({
                    opacity: 0.8
                },2500);
                // fluidFilter = "turnedOn";
            },3000);

        }
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
                        opacity: 1
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
