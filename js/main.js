var dp=jQuery;
var hoverDone;

console.log = function(){};

dp(document).ready(function() {


    Grid.init();
    dp('.bg-about').parallax("10%", 1);
    // dp("#backtotop").backToTop();
    var videobackground = new dp.backgroundVideo(dp('.home-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "cn_s1",
        "types": ["mp4", "ogg", "webm"]
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
    stayTuned.hover(function(e){
        hoverDone = true;
        e.preventDefault();
        $(".fullfilter-hover").animate({
            opacity: 1
        },0);
    }, function () {
        $(".fullfilter-hover").animate({
            opacity: 0
        },1500);
    });
    stayTuned.click(function(e){
        $(".fullfilter-hover").fadeOut();
        $(".fullfilter").css("background","linear-gradient(0deg,#bd1ebf, hsla(186, 100%, 50%, 0.98),#213994)");
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

    var gettingOut = false;
    var gotOut = true;

        setTimeout(function(){
            setInterval(function(){
            // setTimeout(function(){
            //     console.log('check neon fadeIn');
                if (!hoverDone && !gettingOut){
                    $(".fullfilter-hover").animate({
                        opacity: 1
                    },500, function(){
                        gotOut = false;
                        gettingOut = true;
                        console.log('gettingOut', gettingOut);
                    });
                    console.log('neon fadeIn');
                }
            }, 15100);
            setInterval(function(){
            // setTimeout(function(){
                console.log('check neon fadeOut');
                if (!hoverDone && gettingOut && !gotOut) {
                    $(".fullfilter-hover").animate({
                        opacity: 0
                    },1500, function () {
                        gotOut = true;
                        setTimeout(function(){
                            gettingOut = false;
                            console.log('neon fadeOut timeout');
                            console.log('gettingOut', gettingOut);
                        },30000);
                    });
                    console.log('neon fadeOut');
                }
            },16000);
        },5000);
}
