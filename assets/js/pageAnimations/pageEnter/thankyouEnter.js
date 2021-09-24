export function thankyouEnter () {
	let thankyouEnter = gsap.timeline()
	thankyouEnter.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('h1', {duration: 1, opacity: 0, x: "-50%"})
	.from('h3', {duration: 0.7, opacity: 0, x: "-50%"}, '-=0.7')
	.fromTo('li', {y: "-100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3})
	.fromTo('.social-link', {y: "100%"}, {duration: 0.5, opacity: 1, y: "0%", stagger: 0.3}, '-=1')
    
    return thankyouEnter;
}

export function thankyouEnterMobile () {
	let thankyouEnterMobile = gsap.timeline()
	thankyouEnterMobile.fromTo('main', {scale: 0}, {duration: 0.7, opacity: 1, delay: 0.3, scale: 1})
	.from('h1', {duration: 1, opacity: 0, x: "-50%"})
	.from('h3', {duration: 0.7, opacity: 0, x: "-50%"}, '-=0.7')
	.fromTo('.hamburger', {y: "-50%"}, {duration: 0.5, opacity: 1, y: "0%"})

	return thankyouEnterMobile;
}