if (typeof navMobileBtn !== 'undefined') {
    navMobileBtn.addEventListener('click', () => {
        if (navMobileBtn.classList.contains('active')) {
            navMobileBtn.classList.remove('active');
            navbarMobileOpen.timeScale(3).reverse();
        } else {
            navMobileBtn.classList.add('active');
            navbarMobileOpen.timeScale(1).play();
        }
    });
} else {
    const navMobileBtn = document.getElementById('navToggle');
    navMobileBtn.addEventListener('click', () => {
        if (navMobileBtn.classList.contains('active')) {
            navMobileBtn.classList.remove('active');
            navbarMobileOpen.timeScale(3).reverse();
        } else {
            navMobileBtn.classList.add('active');
            navbarMobileOpen.timeScale(1).play();
        }
    });

    let navbarMobileOpen = gsap.timeline()
    navbarMobileOpen.paused(true);
    navbarMobileOpen.to('.navbarMobile', {duration: 0.7, xPercent: -100})
    .from('.mobile-nav-number', {duration: 0.5, opacity: 0, x: "-100%", stagger: 0.3}, '-=0.2')
    .from('.mobile-nav-link', {duration: 0.5, opacity: 0, stagger: 0.3}, '-=0.5')
    .from('.social-link-mobile', {duration: 0.5, opacity: 0, stagger: 0.3}, '-=0.2')
}