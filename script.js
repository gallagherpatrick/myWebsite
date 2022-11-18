let menuOpen = false;

let hamburger = document.querySelector('.svg-icon');

const openMenu = function () {
    if (menuOpen == false) {
        document.querySelector('#nav').style = 'Display: Block;';
        menuOpen = true;
    } else if (menuOpen == true) {
        document.querySelector('#nav').style = 'Display: None;'
        menuOpen = false;
    }
}

hamburger.addEventListener('click', openMenu);