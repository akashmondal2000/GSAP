const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const imageDiv = document.getElementById("#image");


main.addEventListener("mousemove",(event)=>{
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        duration : 0.3,
        ease: "power3.out",
    })
})