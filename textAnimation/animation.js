const breakText = ()=>{

    let h1 = document.querySelector(".main h1");
    
    let  h1Text = h1.textContent ;
    
    let splitText = h1Text.split("");

    let halfText = Math.floor(splitText.length / 2);

    
    let clutter = ""; 
    
    splitText.forEach((element,index)=>{
        if(index < halfText ){
            clutter += `<span class="left">${element}</span>`;
        }else{
            clutter += `<span class="right">${element}</span>`;
        }
    })
    
    h1.innerHTML = clutter;
}


breakText();

let tl = gsap.timeline();

gsap.from(".main h1 .left",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.16,
})
gsap.from(".main h1 .right",{
    y:80,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.16,
})

