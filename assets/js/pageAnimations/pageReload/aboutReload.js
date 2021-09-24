export function aboutReload () {
	let aboutReloadDesktop = gsap.timeline()
	aboutReloadDesktop.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('.content-number', {duration: 0.7, scale: 0}, '-=0.4')
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.about-top-line', {duration: 0.5, width: 0}, '-=0.5')
	.from('.download', {duration: 0.7, opacity: 0})
	.from('h3', {duration: 0.7, opacity: 0, x: "-50%"}, '-=0.7')
	.from('.about-bottom-line', {duration: 0.5, width: 0}, '-=0.4')
	.from('.phrase', {duration: 0.7, opacity: 0, x: "50%", stagger: 0.3})
	.from('.tool-icon', {duration: 0.5, opacity: 0, x: "-50%", stagger: 0.3}, '-=1')
	.fromTo('li', {y: "-100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3})
	.fromTo('.social-link', {y: "100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3}, '-=1')
    
    return aboutReloadDesktop;
}

export function aboutReloadMobile () {
	let aboutReloadMobile = gsap.timeline()
	aboutReloadMobile.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('.content-number', {duration: 0.7, scale: 0}, '-=0.4')
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.about-top-line', {duration: 0.5, width: "0%"}, '-=0.3')
	.from('.about-bottom-line', {duration: 0.5, width: "0%"}, '-=0.5')
	.from('.download', {duration: 0.7, opacity: 0})
	.from('.tool-icon', {duration: 0.5, opacity: 0, y: "-50%", stagger: 0.3}, '-=0.7')
	.from('.phrase', {duration: 0.7, opacity: 0, x: "100%", stagger: 0.3}, '-=2')
	.fromTo('.hamburger', {y: "-50%"}, {duration: 0.5, opacity: 1, y: "0%"})

	return aboutReloadMobile;
}

export function aboutReloadTablet () {
	let aboutReloadTablet = gsap.timeline()
	aboutReloadTablet.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('.content-number', {duration: 0.7, scale: 0}, '-=0.4')
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.download', {duration: 0.7, opacity: 0})
	.from('.phrase', {duration: 0.7, opacity: 0, y: "50%", stagger: 0.3})
	.from('.about-bottom-line', {duration: 0.5, width: 0}, '-=1.3')
	.from('.tool-icon', {duration: 0.5, opacity: 0, y: "-50%", stagger: 0.3}, '-=0.2')
	.fromTo('li', {y: "-100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3})
	.fromTo('.social-link', {y: "100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3}, '-=1')

	return aboutReloadTablet;
}