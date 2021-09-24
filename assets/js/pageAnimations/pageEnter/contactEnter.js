export function contactEnter () {
	let contactEnter = gsap.timeline()
	contactEnter.from('.content-number', {duration: 0.7, scale: 0})
	.from('.content-title', {duration: 0.7, scale: 0}, '-=0.7')
	.from('h2', {duration: 1, opacity: 0, x: "-50%"})
    .to('.line', {duration: 0.7, width: "100%", stagger: 0.3})
    .to('.label', {duration: 0.7, opacity: 1, stagger: 0.3}, '-=0.3')
    .from('.send', {duration: 0.7, opacity: 0, y: "50%"})
    
    return contactEnter;
}