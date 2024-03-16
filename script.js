
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
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

locomotiveAnimation();

function navbar() {
    gsap.to("#nav-part1 svg", {

        transform:"translateY(-100%)",

        scrollTrigger:{
            scroller:"#main",
            trigger:"#page1",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    });

    gsap.to("#nav-part2 #links", {

        transform:"translateY(-100%)",

        opacity:0,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page1",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }

    })
}

navbar();


function loaderaniamtion() {
    

var videocon = document.querySelector("#video-container")
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn, {
        scale:1,
        opacity:1
    })
})


videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn, {
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
    left:dets.x-70,
    top:dets.y-70

    })
})
}

loaderaniamtion();


function page1anime() {

    var tl = gsap.timeline()
tl.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.6,
    stagger:0.3
})

tl.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
  
    duration: 0.5,
})
}

page1anime(); 


function cursoranimation() {

    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor", {
            left:dets.x,
            top:dets.y
        });

    })

    document.querySelector("#child1").addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',

            backgroundColor: "#EECFC3"

        })
    })
    document.querySelector("#child1").addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)'

        })
    })

    document.querySelector("#child2").addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',

            backgroundColor: "#B7E2E0"
        })
    })

    document.querySelector("#child2").addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)',

            backgroundColor: "#B7E2E0"
        })
    })


    document.querySelector("#child3").addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',

            backgroundColor: "#F2E9E5"

        })
    })
    document.querySelector("#child3").addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)'

        })
    })


    document.querySelector("#child4").addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)',

            opacity:0.6,
            backgroundColor: "#D6EFEE"
        })
    })

    document.querySelector("#child4").addEventListener("mouseleave", function(){
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)',

            backgroundColor: "#D6EFEE"
        })
    })
}

cursoranimation();


function page5animation() {

    var clutter = "";

    document.querySelector("#page5 h1").textContent.split("").forEach(function(dets){
        clutter = clutter + `<span>${dets}</span>`

        document.querySelector("#page5 h1").innerHTML = clutter;
    })

    gsap.to("#page5 h1 span", {
        scrollTrigger:{
            trigger:"#page5 h1 span",
            start:"top bottom",
            end:"bottom top",
            scroller:"#main",
            scrub:.5
        },
        stagger: .2,
        color: "black"
    })
}

page5animation();

function lastanimation() {

    gsap.from("#center-page6 img", {
        y:100,
        opacity:0,
        duration:0.8,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#center-page6 img",
            start:"top 70%",
            end:"top 69%",
            scrub:3 ,
            // markers:true
        }
    
    })
}


lastanimation();