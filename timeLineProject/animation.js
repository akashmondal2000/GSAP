const tl = gsap.timeline();
const menuBtn = document.querySelector("#nav i");
const crossBtn = document.querySelector("#menu i");

tl.to("#menu",{
    right: 0,
    duration: 0.5,
})

tl.from("#menu ul li",{
    x: 150,
    duration: 0.6,
    stagger: 0.3,
    opacity:0
})
    
tl.from("#menu i",{
    opacity:0,
})

tl.pause();

menuBtn.addEventListener("click",()=>{
    tl.play();
})

crossBtn.addEventListener("click",()=>{
    tl.reverse();
})