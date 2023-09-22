let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')

};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', wnidow.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};


ScrollReveal({
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content ,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img ,.services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p ,.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Amazon Virtual Assistant'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true

});

var logo = querySelector(".logo");
//logo.style.color ="red";
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hashimqaimkhani784@gmail.com",
        Password : "AB2C190F9BE4CD56739D4B8CD397C3A1F455",
        To : 'has666143@gmail.com',
        From : 'hashimqaimkhani784@gmail.com',
        Subject : "New Contact From My Website EcommerceWithAwaisKK",
        Body : "My Name: "+document.getElementById("name").value 
        +"<br> My Email: "+document.getElementById("email").value
        +"<br> My Number: "+document.getElementById("number").value
        + "<br> subject for mail: "+document.getElementById("subject").value
        + "<br> Interseted in course: "+document.getElementById("select").value
        + "<br> Message: "+document.getElementById("msg").value
    }).then(
      message => alert(message)
    );
}