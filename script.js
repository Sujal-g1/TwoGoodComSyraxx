
// const scroll = new LocomotiveScroll({
//     el:document.querySelector('#main'),
//     smooth:true
// })

function locomotiveAnimations() {
 gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimations() 

gsap.to(".navsvg svg" , {
    transform:"translateY(-100%)",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true
    }
})

gsap.to(".nav2 .links" , {
    transform:"translateY(-100%)",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        markers:true,
        start:"top 0",
        end:"top -5%",
        scrub:true,
        opacity:0
    }
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

function  imgHover(){

  document.querySelectorAll("#page2 .elem").forEach(elem => {
  const dets = elem.querySelector(".dets");
  const dets1 = elem.querySelector(".dets1");


  dets.addEventListener("mouseenter", () => {
   gsap.to(dets1 , {
    opacity:1,
    // y:0,
    duration:0.8,
    ease: "power3.out"
   })
  });

  dets.addEventListener("mouseleave", () => {
    gsap.to(dets1 , {
    // y: -30,
    opacity:0,
    ease: "power3.in",
    opacity: 0,
      duration: 0.5,
   })
  });
});

}

imgHover();

function page3effect() {
    document.addEventListener('mousemove' , function(dets){
    gsap.to("#cursor" , {
        left:dets.x,
        top:dets.y
    })
})

document.querySelectorAll("#child3 ,#child4, #child5 ,#child6").forEach(el => {el.addEventListener("mouseenter" , function(){
    gsap.to("#cursor" ,{
        transform : 'translate(-50% ,-50%) scale(1)'
    })
})})

document.querySelectorAll("#child3 ,#child4 , #child5 ,#child6").forEach(el => { el.addEventListener("mouseleave" , function(){
    gsap.to("#cursor" ,{
        transform : 'translate(-50% ,-50%) scale(0)'
    })
})})

}

page3effect() 