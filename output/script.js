"use strict";
let facebookIcon = document.querySelector('#facebook');
let instragramIcon = document.querySelector('#instragram');
let pinterestIcon = document.querySelector('#pinterest');
function overColor(e) {
    console.log("Working");
    e.children[0].setAttribute("fill", "#fb6087");
}
function outColor(e) {
    // console.log('working');
    e.children[0].setAttribute("fill", "#8385A9");
}
facebookIcon.addEventListener('mouseover', function () { overColor(facebookIcon); });
instragramIcon.addEventListener('mouseover', function () { overColor(instragramIcon); });
pinterestIcon.addEventListener('mouseover', function () { overColor(pinterestIcon); });
facebookIcon.addEventListener('mouseout', function () { outColor(facebookIcon); });
instragramIcon.addEventListener('mouseout', function () { outColor(instragramIcon); });
pinterestIcon.addEventListener('mouseout', function () { outColor(pinterestIcon); });
