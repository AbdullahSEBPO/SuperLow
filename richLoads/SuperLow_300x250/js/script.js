function ftInit() {
    myFT.on("instantads", function (e) {
        preload();
    });
}
function preload() {
    var heightOffset = 0
    var variables = myFT.instantAds;
    var imageCount = 5, imageLoaded = 0;

    background.src = variables.background_img;
    background.addEventListener("load", iLoad, false);

    logo1.src = variables.logo1_img;
    logo1.addEventListener("load", iLoad, false);

    frame1Line1.src = variables.frame1Line1_img;
    frame1Line1.addEventListener("load", iLoad, false);

    frame1Line2.src = variables.frame1Line2_img;
    frame1Line2.addEventListener("load", iLoad, false);

    frame2.src = variables.frame2_img;
    frame2.addEventListener("load", iLoad, false);

    function iLoad() {
        imageLoaded++;
        if(imageLoaded == imageCount) {
        }
        
    }
    

    if(variables.cta_txt) {
        var ctaText = variables.cta_txt;
        cta.innerHTML = ctaText;
        cta.style.backgroundColor = variables.ctaBtn_hex;
    }

    var width = overlay.offsetWidth;
        var ctaWidth = cta.offsetWidth;
        while(ctaWidth + 5 > width) {
            ctaFont -= 1;
            if(ctaFont <= 5) break;
            cta.style.fontSize = ctaFont + 'px';
            var ctaWidth = cta.offsetWidth;
        }
        var ctaX = (width - cta.offsetWidth) / 2;
        cta.style.left = ctaX + 'px';
    
        
    }
    

    
    // ---------------------ANIMATIONS
    
    // tl.to('.fade1', .5, {autoAlpha: 1, delay: 1,});
    // tl.to('.fade1', .5, {autoAlpha:0, delay:2});
    // tl.to('.fade2', 1, {autoAlpha: 1, delay: 1,});
    // tl.to('.fade2', .5, {autoAlpha:0, delay:2});
    // tl.to('.fade3', 1, {autoAlpha: 1, delay: 1,});
    // tl.to('.fade3', 0.5, {autoAlpha: 0, delay: 2,});

    TweenMax.to('.fade2', 1, { x: 149, delay: 1 });
    TweenMax.to('.fade3', 1, { x: -148, delay: 1 });
    TweenMax.to('.fade2', 2, { x: 600, delay: 3 });
    TweenMax.to('.fade3', 2, { x: -600, delay: 3 });
     
    var tl = new TimelineMax();
    tl.to('.fade1', 2, {autoAlpha:1, delay:4});