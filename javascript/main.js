
window.onload = function() {
    handeNavigationMobile();
}

function handeNavigationMobile() {
    let navigationMobile = document.querySelector('.navigation-mobile')
    let mask = document.querySelector('.mask');
    let btnOpenNavigation = document.querySelector('.bars-navigation');
    let btnCloseNavigation = document.querySelector('.close-navigation');
    let navigationItems = document.querySelectorAll('.navigation-mobile .navigation-item')
    btnCloseNavigation.onclick = function() {
        if(navigationMobile) {
            closeNavigationMobile();
        }
    }

    btnOpenNavigation.onclick = function() {
        if(navigationMobile) {
            openNavigationMobile();
            mask.classList.toggle('hidden');
        }
        console.log('aa')
    }

    mask.onclick = function() {
        if(mask) {
            mask.classList.toggle('hidden');
            closeNavigationMobile();
        }
    }

    navigationItems.forEach(function(item) {
        item.onclick = function() {
            mask.classList.toggle('hidden');
            closeNavigationMobile();
        }
    })

    function closeNavigationMobile() {
        navigationMobile.style.right = '-300' + 'px';
    }
    function openNavigationMobile() {
        navigationMobile.style.right = '0' + 'px';
    }
}
