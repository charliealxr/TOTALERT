gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title", {
    opacity: 1,
    y: -20,
    duration: 1.4,
    ease: "power4.out"
});

gsap.to(".hero-subtitle", {
    opacity: 1,
    y: -10,
    duration: 1.6,
    delay: 0.3,
    ease: "power4.out"
});

gsap.utils.toArray(".section").forEach(section => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
