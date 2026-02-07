
const scroll = new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true
})

function videoconAnimation(){
var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn , {
        scale : 1,
        opacity :1
    })
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn , {
        scale : 0,
        opacity :0
    })
})

videocon.addEventListener("mousemove", function(dets){
   gsap.to(playbtn , {
    left: dets.x,
    top: dets.y
   })
})

}

// videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1", {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2
})
}

loadingAnimation()

gsap.from("#image-container img" , {
    delay:1,
    duration:0.8,
    opacity:0,
})

