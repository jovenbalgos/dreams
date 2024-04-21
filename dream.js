document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;

    function toggleNavbarBackground() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('fixed-bg');
        } else {
            navbar.classList.remove('fixed-bg');
        }
    }

    window.addEventListener('scroll', toggleNavbarBackground);

    toggleNavbarBackground(); // Call on page load
});

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'


}

