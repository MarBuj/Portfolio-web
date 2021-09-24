export function leave() {
    let animationLeave = gsap.timeline()
    animationLeave.to('.content', {duration: 1, opacity: 0})

    return animationLeave;
}

export function leaveMobile() {
    const navMobileBtn = document.getElementById('navToggle');
    let animationLeaveMobile = gsap.timeline()
    animationLeaveMobile.to('.mobile-nav-link', {duration: 0.3, opacity: 0, y: "100%"})
    .to('.mobile-nav-number', {duration: 0.3, opacity: 0, x: "100%", stagger: 0.2}, '-=0.2')
    .to('.social-link-mobile', {duration: 0.3, opacity: 0}, '-=0.5')
    .to('.navbarMobile', {duration: 0.3, xPercent: 0})
    .to('.content', {duration: 0.5, opacity: 0}, '-=0.2')
    navMobileBtn.classList.remove('active');

    return animationLeaveMobile;
}
