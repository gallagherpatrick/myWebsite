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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt2J2TIITuSLixVLmeNVfl24cTQkO7M4E",
    authDomain: "patrickgallagherwebsite.firebaseapp.com",
    projectId: "patrickgallagherwebsite",
    storageBucket: "patrickgallagherwebsite.appspot.com",
    messagingSenderId: "613340694086",
    appId: "1:613340694086:web:178d92ff8ac8f8ebe66c47",
    measurementId: "G-K6D7T7N18B"
};