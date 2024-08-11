document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-Icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };


/*......................scroll section active link................*/

let sections = document.querySelectorAll('section'); // Corrected "section" to "sections"
let navLinks = document.querySelectorAll('header nav a'); // Corrected "docuent" to "document"

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Corrected "getAttributer" to "getAttribute"

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Corrected "links" to "link"
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*......................sticky navbar................*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*......................remove toggle icon and navbar................*/
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove('active');
};

/*..............scroll reveal........................*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Added missing "."
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Corrected "buttom" to "bottom"
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*..............typed js........................*/
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer', 'UI/UX Designer', '.Net Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
});