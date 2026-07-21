const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const imageDiv = document.getElementById("image");

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 0.3,
    ease: "power3.out",
  });
});

imageDiv.addEventListener("mouseenter", (event) => {
    cursor.innerHTML = "View More"
  gsap.to(cursor, {
    scale:3,
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "power3.out",
    backgroundColor:"#ffffff48",
  });
});
imageDiv.addEventListener("mouseleave", (event) => {
    cursor.innerHTML = ""
  gsap.to(cursor, {
    scale:1,
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "power3.out",
    backgroundColor:"#ffffff",
  });
});
