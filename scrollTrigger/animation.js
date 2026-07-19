gsap.to("#page1 #box1",{
    rotate:360,
    duration:2,
    delay:1,
}); 

gsap.to("#page2 #box2",{
    rotate:360,
    duration:1,

    scrollTrigger:{
        trigger:"#page2 #box2",
        start: "top 60%",
        end: "top 30%",
        scrub:true,
        // markers: true,
     
    }
})

gsap.to("#page3 #box3",{
    rotate:360,
    duration:1,


    scrollTrigger:{
        trigger:"#page3 #box3",
        start: "top 60%",
        end: "top 20%",
        scrub:true,
        // markers: true,
     
    }
})

/* */ 

gsap.from("#page4 h1",{
    transform: "translate(-100%)",

    scrollTrigger:{
        trigger:"#page4",
        start:"top 10%",
        end:"top -100%",
        scrub:true,
        pin:true, 
        markers: true,
    }

})