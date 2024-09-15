// Page 1 Animation
function page1Animation() {
    const tl = gsap.timeline();
    
    tl.from("nav h1, .nav-links a, .nav-links button", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    })
    .from(".center-part1 h1, .center-part1 p, .center-part1 button", {
        x: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    }, "-=0.4")
    .from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".section-bottom img", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1
    }, "-=0.3");
}

// Section 2 Animation
function section2Animation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "top 70%",
            end: "top 20%",
            scrub: 1
        }
    });

    tl.from(".services", {
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    .from(".elem", {
        x: (index, target) => target.classList.contains("left") ? -300 : 300,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2
    });
}

// Footer Animation
function footerAnimation() {
    const footerTl = gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        }
    });

    footerTl.from(".footer-content > div", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    })
    .from(".footer-bottom", {
        opacity: 0,
        duration: 0.4
    }, "-=0.2")
    .from(".social-icons a", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1
    }, "-=0.3");
}

// Initialize animations
function init() {
    gsap.registerPlugin(ScrollTrigger);
    page1Animation();
    section2Animation();
    footerAnimation();
}

// Run animations when the DOM is ready
document.addEventListener("DOMContentLoaded", init);