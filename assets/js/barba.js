import { leave, leaveMobile } from './pageAnimations/pageLeave/animationLeave.js';
import { homeEnter } from './pageAnimations/pageEnter/homeEnter.js';
import { homeReload, homeReloadMobile } from './pageAnimations/pageReload/homeReload.js';
import { aboutReload, aboutReloadMobile, aboutReloadTablet } from './pageAnimations/pageReload/aboutReload.js';
import { aboutEnter, aboutEnterMobile, aboutEnterTablet } from './pageAnimations/pageEnter/aboutEnter.js';
import { contactReload, contactReloadMobile } from './pageAnimations/pageReload/contactReload.js';
import { contactEnter } from './pageAnimations/pageEnter/contactEnter.js';
import { thankyouEnter, thankyouEnterMobile } from './pageAnimations/pageEnter/thankyouEnter.js';

barba.hooks.after(() => {
	const header = document.querySelectorAll('.navbar-link'); 
	header.forEach((list) => {
		list.style.opacity = "1";
	});
	const main = document.querySelector('main');
	main.style.opacity = "1";
	const hamburger = document.querySelector('.hamburger'); 
	hamburger.style.opacity = "1";
	const footer = document.querySelectorAll('.social-link');
	footer.forEach((list) => {
		list.style.opacity = "1";
	})
})

barba.hooks.after(() => {
	const deviceViewport = window.matchMedia('(max-width: 1024px)'); 
	function checkMediaQuery(deviceViewport) {
		VanillaTilt.init(document.querySelector("main"), {
			max: 25,
			speed: 400,
			glare: true,
			"max-glare": 0.8,
		});   
		if (deviceViewport.matches) {
			document.querySelector("main").vanillaTilt.destroy();
			}
		}
	deviceViewport.addListener(checkMediaQuery);
	checkMediaQuery(deviceViewport);
})

barba.hooks.after(() => {
	const bottomDOM = document.getElementsByTagName("body")[0]
	const newScript = document.createElement("script")
	newScript.src = "assets/js/navMobile.js"
	newScript.className = "navMobile-script"
	bottomDOM.appendChild(newScript)
})

const mobileViewport = window.matchMedia('(max-width: 425px)');
const tabletViewport = window.matchMedia('(min-width: 426px) and (max-width: 768px)');

function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init ({
	views: [
		{
			namespace: 'about',
			beforeEnter() {
				const bottomDOM = document.getElementsByTagName("body")[0]
				const aboutScript = document.createElement("script")
				aboutScript.src = "assets/js/about.js"
				aboutScript.className = "about-script"
				bottomDOM.appendChild(aboutScript)
			}
		}
	],
	sync: true,
	transitions: [
		{
			to: {
				namespace: ['home']
			},
			async once({next}){
				if (mobileViewport.matches) {
					homeReloadMobile(next.container);
				} else {
					homeReload(next.container);
				}
			}, 
			async leave({current}){
				const done = this.async();

				if (mobileViewport.matches) {
					leaveMobile(current.container);
					await delay(1500);
					done();
				} else {
					leave(current.container);
					await delay(1500);
					done();
				}
			},
			async enter({next}){
				homeEnter(next.container);
			} 
		}, {
			to: {
				namespace: ['about']
			}, 
			async once({next}){
				if (mobileViewport.matches) {
					aboutReloadMobile(next.container);
				} else if (tabletViewport.matches) {
					aboutReloadTablet(next.container);
				} else {
					aboutReload(next.container);
				}
			}, 
			async leave({current}){
				const done = this.async();

				if (mobileViewport.matches) {
					leaveMobile(current.container);
					await delay(1500);
					done();
				} else {
					leave(current.container);
					await delay(1500);
					done();
				}
			},
			async enter({next}){
				if (mobileViewport.matches) {
					aboutEnterMobile(next.container);
				} else if (tabletViewport.matches) {
					aboutEnterTablet(next.container);
				} else {
					aboutEnter(next.container);
				}
			} 
		}, {
			to: {
				namespace: ['contact']
			}, 
			async once({next}){
				if (mobileViewport.matches) {
					contactReloadMobile(next.container);
				} else {
					contactReload(next.container);
				}
			}, 
			async leave({current}){
				const done = this.async();

				if (mobileViewport.matches) {
					leaveMobile(current.container);
					await delay(1500);
					done();
				} else {
					leave(current.container);
					await delay(1500);
					done();
				}
			},
			async enter({next}){
				contactEnter(next.container);
			} 
		}, {
			to: {
				namespace: ['thankyou']
			}, 
			async once({next}){
				if (mobileViewport.matches) {
					thankyouEnterMobile(next.container);
				} else {
					thankyouEnter(next.container);
				}
			}, 
			async leave({current}){
				const done = this.async();

				if (mobileViewport.matches) {
					leaveMobile(current.container);
					await delay(1500);
					done();
				} else {
					leave(current.container);
					await delay(1500);
					done();
				}
			},
			async enter({next}){
				if (mobileViewport.matches) {
					thankyouEnterMobile(next.container);
				} else {
					thankyouEnter(next.container);
				}
			} 
		}
	]
})




  