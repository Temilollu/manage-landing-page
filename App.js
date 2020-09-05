const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('show')
})