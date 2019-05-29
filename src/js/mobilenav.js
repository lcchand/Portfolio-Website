// mobilenav.js - add functionality to Hamburger element on Mobile devices
// Testing Gulp by adding a comment...

const mobileNav = document.getElementById("mobilenav");

const mainNav = document.getElementById("main-nav");
const mainNavUl = document.querySelector('ul');
const mainNavLinks = mainNavUl.children;

mobileNav.addEventListener('click', function() {
    //console.log('click');
    mobileNav.classList.toggle('mobile-nav--open');
    // If it has a positive value
    // It is currently Open, set to null or 0 to close
    if (mainNav.style.maxHeight) {
	mainNav.style.maxHeight = null;
    } else {
	// Calculate the maxHeight of Nav contents
	// assign it to style which will display Nav as drop down menu
	mainNav.style.maxHeight = mainNav.scrollHeight + "px";
	mainNav.style.width = "calc(100vw)";
    }

});



mainNavUl.addEventListener('click', function() {
    mobileNav.classList.toggle('');
});

