let initialPath = "M 10 100 Q 400 100 720 100";
let finalPath = "M 10 100 Q 400 100 720 100";

const string = document.querySelector(".string");

string.addEventListener("mousemove",(event)=>{
    let path = `M 10 100 Q ${event.x} ${event.y} 720 100`

    gsap.to("svg path",{
        duration:0.4,
        attr: {d:path},
        ease: "power.out",
    })
})

string.addEventListener("mouseleave",()=>{
      gsap.to("svg path",{
        duration:0.3,
        attr: {d:finalPath},
        ease: "elastic.out(1,0.1)",
        
    })
})