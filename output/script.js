"use strict";
let facebookIcon = document.querySelector('#facebook');
let instragramIcon = document.querySelector('#instragram');
let pinterestIcon = document.querySelector('#pinterest');
let days = document.querySelector("#date");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let futureFinalY = 2022;
let futureFinalM = 10;
let futureTime = new Date(futureFinalY, futureFinalM, 29, 0, 0, 0); // year, month, day, hour, minute, second, and millisecond
let futureYear = futureTime.getFullYear();
let futureHour = futureTime.getHours();
let futureMin = futureTime.getMinutes();
let futureMon = futureTime.getMonth();
let futureDay = futureTime.getDay();
//current date
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentMonth = currentTime.getMonth();
let currentDay = currentTime.getDate();
let finalTime = futureTime.getTime();
//calculate time
function getRemainingTime() {
    const today = new Date().getTime();
    const remTime = finalTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let d = Math.floor(remTime / oneDay);
    let h = Math.floor((remTime % oneDay) / oneHour);
    let m = Math.floor((remTime % oneHour) / oneMinute);
    let s = Math.floor((remTime % oneMinute) / 1000);
    //time for less or greater than 0
    let finalDay = d < 10 ? `0${d}` : `${d}`;
    let finalHour = h < 10 ? `0${h}` : `${h}`;
    let finalMin = m < 10 ? `0${m}` : `${m}`;
    let finalSec = s < 10 ? `0${s}` : `${s}`;
    if (remTime < 0) {
        futureFinalM++;
        if (futureFinalM > 11) {
            futureFinalM = 0;
            futureFinalY++;
        }
    }
    else {
        days.innerText = `${finalDay}`;
        hour.innerText = `${finalHour}`;
        min.innerText = `${finalMin}`;
        sec.innerText = `${finalSec}`;
    }
}
setInterval(getRemainingTime, 100);
function overColor(e) {
    // console.log("Working");
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
