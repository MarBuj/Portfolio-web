export function homeEnter() {
	let homeEnter = gsap.timeline()
	homeEnter.from('.content-number', {duration: 0.7, scale: 0, delay: 0.3})
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('.box', {duration: 0.5, width: "0%"})
	.from('.hi', {duration: 0.5, opacity: 0, y: "50%"})
	.from('h1', {duration: 1, opacity: 0, x: "-50%", onComplete: () => wordsTL.play()})
	.to('.cursor', {opacity: 1, ease: "power2.inOut", repeat: -1})

	const words = ["A Front-end web developer", "A Back-end web developer", "A Full-stack web developer"]
	let wordsTL = gsap.timeline({repeat: -1}).pause()
	words.forEach(word => {
		let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay: 1})
		tl.to('.text', {duration: 1, text: word})
		wordsTL.add(tl)
    })
    
    return homeEnter;
}