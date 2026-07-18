gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:2,
    rotate:360,
    backgroundColor:"#23d926",
    borderRadius : "50%",
})

gsap.from('#box2',{
    x:1000,
    duration:2,
    delay:3
})

gsap.to("#box3",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    repeat: 2,
    yoyo:true,
})

gsap.from(".text-box h1",{
    opacity:0,
    duration:1,
    delay:2,
    y:40,
    stagger:-1,
})

/* Time Line*/ 

let tl = gsap.timeline();

tl.from(".logo h1",{
    opacity:0,
    y:200,
    x:-300,
    duration: 1,
    delay:1
})

tl.from(".menu ul li",{
    opacity:0,
    y:-20,
    duration: 0.5,
    stagger: 0.4,
})

tl.from(".hero h1",{
    opacity:0,
    scale:0.2,
    duration: 1,
})