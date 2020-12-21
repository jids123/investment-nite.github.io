const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("img", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("h2", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
AOS.init({
	duration:1200,});
