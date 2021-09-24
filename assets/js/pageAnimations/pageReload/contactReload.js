export function contactReload () {
	let contactReload = gsap.timeline()
	contactReload.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('.content-number', {duration: 0.7, scale: 0}, '-=0.4')
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
    .from('h2', {duration: 1, opacity: 0, x: "-50%"})
    .to('.line', {duration: 0.7, width: "100%", stagger: 0.3})
    .to('.label', {duration: 0.7, opacity: 1, stagger: 0.3}, '-=0.3')
	.from('.send', {duration: 0.7, opacity: 0, y: "50%"})
	.fromTo('li', {y: "-100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3})
	.fromTo('.social-link', {y: "100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3}, '-=1')
    
    return contactReload;
}

export function contactReloadMobile () {
	let contactReloadMobile = gsap.timeline()
	contactReloadMobile.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('.content-number', {duration: 0.7, scale: 0}, '-=0.4')
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
    .from('h2', {duration: 1, opacity: 0, x: "-50%"})
    .to('.line', {duration: 0.7, width: "100%", stagger: 0.3})
    .to('.label', {duration: 0.7, opacity: 1, stagger: 0.3}, '-=0.3')
	.from('.send', {duration: 0.7, opacity: 0, y: "50%"})
	.fromTo('.hamburger', {y: "-50%"}, {duration: 0.5, opacity: 1, y: "0%"})

	return contactReloadMobile;
}