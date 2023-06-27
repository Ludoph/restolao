const btnMenu = document.querySelector('.btn-menu-burger');
const navigation = document.querySelector('.menu-burger');
btnMenu.addEventListener('click', toggleNav)
function toggleNav(){
    btnMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.addEventListener('scroll', function() {
    var image = document.getElementById('img-logo');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0){
        image.style.width = '100px';
    } else {
        image.style.width = '160px';
    }
  });