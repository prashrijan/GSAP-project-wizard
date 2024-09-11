var tl = gsap.timeline()


tl.from("nav h1, .nav-links a, .nav-links button", {
    y: -20,
    opacity: 0,
    delay: 1,
    duration: .8,
    stagger: .15
})

tl.from(".center .center-part1 h1" , {
    x: -200,
    opacity: 0,
    duration: .4
})

tl.from(".center .center-part1 p", {
    x: -100, 
    opacity: 0,
    duration: .4
})

tl.from(".center .center-part1 button", {
    opacity: 0,
    duration: .4
})

tl.from(".center .center-part2 img", {
    opacity: 0,
    duration: .5
}, "-=1")