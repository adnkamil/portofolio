$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar-nb').addClass('sticky')
        } else {
            $('.navbar-nb').removeClass('sticky')
        }
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["FullStack", "Backend", "Frontend"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing2", {
        strings: ["FullStack Dev", "Backend Dev", "Frontend Dev"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // toggle menu
    $('.menu-btn').click(() => {
        $('.navbar-nb .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })
})