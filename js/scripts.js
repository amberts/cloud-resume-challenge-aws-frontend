/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


///////// Visitor Counter /////////

// Est. variables to be the page elements relevant to the counter
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

// Est. variable that will be the count
let count = 0;

// Create a function to update the display when count variable changes
function updateDisplay(){
    counterDisplayElem.innerHTML = count;
}

function naughty(){
    counterDisplayElem.innerHTML = `Liar, liar, pants on fire!`;
}

// Display current count when page loads (before any clicking happens)
updateDisplay();

// Add event listeners
counterPlusElem.addEventListener("click",() => {
    count++;
//    updateDisplay();
    naughty();
});

counterMinusElem.addEventListener("click",() => {
    count--;
//    updateDisplay();
    naughty();
});

document.addEventListener('DOMContentLoaded', (event) => {
    count++;
    updateDisplay();
});  
