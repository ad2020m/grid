

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "top top",
        end: "bottom+=50% 50%",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        markers: true,
    }
});
tl1.from('.box1 h2',{
    y: '100px',
    opacity: '0',
    }
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
        end: "bottom+=50% 50%",
        scrub: 1,
        pin: true,
        // pinSpacing: false,
        markers: true,
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

