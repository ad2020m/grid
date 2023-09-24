

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "top top",
        end: "+=100%",
        // end: "bottom+=50% 50%",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        // markers: true,
    }
});
tl1.from('.box1 h2',{
    y: '100px',
    opacity: '0',
    }, '+=0.1'
)
tl1.from('.box1 p',{
    y: '100px',
    opacity: '0',
})
tl1.fromTo('.box1',{
    opacity: '1',
},{
    opacity: '0',
})

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box2",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        // markers: true,
    }
});
tl2.from('.box2 h2',{
    y: '100px',
    opacity: '0',
    }
)
tl2.from('.box2 p',{
    y: '100px',
    opacity: '0',
})
tl2.fromTo('.box2',{
    opacity: '1',
},{
    opacity: '0',
})






// https://codepen.io/GreenSock/full/QWdjEbx
LottieScrollTrigger({
    target: "#animation",
    path: "data.json",
    speed: "fast",
    scrub: 0 ,
    image: '.image'
});


function LottieScrollTrigger(vars) {
    let playhead = {frame: 0};
    let target = gsap.utils.toArray(vars.target)[0];
    let speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"};
    let st = {
        trigger: target, 
        // pin: true, 
        start: "top top", 
        // end: speeds[vars.speed] || "+=1000", 
        end: "bottom top", 
        scrub: 1,
        markers: true
    };
    let animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path
    });
    for (let p in vars) { 
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function() {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st
        });
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
    });
    return animation;
}
