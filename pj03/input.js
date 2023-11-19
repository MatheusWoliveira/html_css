function menuShow(){
    var menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "midia/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "midia/close_white_36dp.svg"
    }
}