gsap.registerPlugin(ScrollTrigger);

gsap.from(".ui-img", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".ui-gallery",
        start: "top 75%"
    }
});

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
// Animación del logo de inicio estilo Apple
// ANIMACIÓN DEL LOGO INICIAL
gsap.to(".logo-intro-img", {
    opacity: 1,
    scale: 1,
    duration: 1.4,
    ease: "power4.out"
});

gsap.to(".logo-intro", {
    opacity: 0,
    delay: 2,
    duration: 1.2,
    ease: "power2.out",
    onComplete: () => {
        document.querySelector(".logo-intro").classList.add("hidden");
    }
});


gsap.to(".logo", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power4.out"
});

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
