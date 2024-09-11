// function page1Aniamtion(){
//     var tl = gsap.timeline()
    
//     tl.from("nav h1, .nav-links a, .nav-links button", {
//         y: -20,
//         opacity: 0,
//         delay: 1,
//         duration: .8,
//         stagger: .15
//     })
    
//     tl.from(".center .center-part1 h1" , {
//         x: -200,
//         opacity: 0,
//         duration: .4
//     }, "-=0.4")
    
//     tl.from(".center .center-part1 p", {
//         x: -100, 
//         opacity: 0,
//         duration: .4
//     })
    
//     tl.from(".center .center-part1 button", {
//         opacity: 0,
//         duration: .4
//     })
    
//     tl.from(".center .center-part2 img", {
//         opacity: 0,
//         duration: .5
//     }, "-=1")
    
//     tl.from(".section-bottom img", {
//         opacity: 0,
//         duration: .6,
//         stagger: 0.1,
//         y: 30
//     })
// }

    
let tl = gsap.timeline({
    scrollTrigger: {
     trigger: ".section2",   
     scroller: "body",
     markers: true,
     start: "top 50%",
     end: "top 0",
     scrub: 2
    }
})


tl.from(".services", {
    x: -300,
    opacity: 0
})

tl.from('.elem.line1.left', {
    x: -300,
    opacity: 0,
    duration: .5
}, 'animateTogether')

tl.from('.elem.line1.right', {
    x: 300,
    opacity: 0,
    duration: .5
}, "animateTogether")

tl.from('.elem.line2.left', {
    x: -300,
    opacity: 0,
    duration: .5
}, "secondAnimateTogether")

tl.from('.elem.line2.right', {
    x: 300,
    opacity: 0,
    duration: .5
}, 'secondAnimateTogether')