"use strict";

//Toggle Sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
menuIcon.onclick = function() {
    sidebar.classList.toggle('hide');
}


//Toggle Slide-bar Sub-Menu
$(function() {

    $(".side-item").click(function() {
        $(this).next('.sub-menu').slideToggle();
    });

});//End jQuery



//Button To Top
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', function() {

    if ( this.scrollY >= 650 ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}