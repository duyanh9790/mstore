// handle navigation-moobile

var navigationMobile = document.querySelector('.navigation-mobile')

var openNavigation = document.querySelector('.bars-navigation');
var closeNavigation = document.querySelector('.close-navigation');
closeNavigation.onclick = function() {
    if(navigationMobile) {
        navigationMobile.style.right = '-300' + 'px';
    }
}

openNavigation.onclick = function() {
    if(navigationMobile) {
        navigationMobile.style.right = '0' + 'px';
    }
}
