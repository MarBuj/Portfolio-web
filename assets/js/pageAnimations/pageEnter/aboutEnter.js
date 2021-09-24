export function aboutEnter () {
	let aboutEnter = gsap.timeline()
	aboutEnter.from('.content-number', {duration: 0.7, scale: 0, delay: 0.3})
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.about-top-line', {duration: 0.5, width: 0}, '-=0.5')
	.from('.download', {duration: 0.7, opacity: 0})
	.from('h3', {duration: 0.7, opacity: 0, x: "-50%"}, '-=0.7')
	.from('.about-bottom-line', {duration: 0.5, width: 0}, '-=0.4')
	.from('.phrase', {duration: 0.7, opacity: 0, x: "50%", stagger: 0.3})
    .from('.tool-icon', {duration: 0.3, opacity: 0, x: "-50%", stagger: 0.15}, '-=1')
    
    return aboutEnter;
}

export function aboutEnterMobile () {
	let aboutEnterMobile = gsap.timeline()
	aboutEnterMobile.from('.content-number', {duration: 0.7, scale: 0, delay: 0.3})
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.about-top-line', {duration: 0.7, width: "0%"}, '-=0.3')
	.from('.about-bottom-line', {duration: 0.7, width: "0%"}, '-=0.5')
	.from('.download', {duration: 0.7, opacity: 0})
	.from('.tool-icon', {duration: 0.5, opacity: 0, y: "-50%", stagger: 0.3}, '-=0.7')
	.from('.phrase', {duration: 0.3, opacity: 0, x: "100%", stagger: 0.15}, '-=2')

	return aboutEnterMobile;
}

export function aboutEnterTablet () {
	let aboutEnterTablet = gsap.timeline()
	aboutEnterTablet.from('.content-number', {duration: 0.7, scale: 0, delay: 0.3})
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
	.from('.download', {duration: 0.7, opacity: 0})
	.from('.phrase', {duration: 0.7, opacity: 0, y: "50%", stagger: 0.3})
	.from('.about-bottom-line', {duration: 0.5, width: "0%"}, '-=1.3')
	.from('.tool-icon', {duration: 0.3, opacity: 0, y: "-50%", stagger: 0.15}, '-=0.2')

	return aboutEnterTablet;
}