const hamburgerButton = document.querySelector('.btn-menu-burger');
const navigation = document.querySelector('.nav-link-burger');
hamburgerButton.addEventListener('click', toggleNav)
function toggleNav(){
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('active')
}