
import {colors,max,min, randomIntegerFromInterval} from './js/random-fanction'

import './sass/main.scss';

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
let timerColor = null;

start.addEventListener('click', changeColorOnlick);
stop.addEventListener('click', () => {
  clearInterval(timerColor);
  start.disabled = false;
});


function changeColorOnlick(evt) {
    timerColor = setInterval(() => {
    const color=colors[randomIntegerFromInterval(min, max)]
        document.body.style.backgroundColor = color;
    }, 1000);
    start.disabled = true;
  
};

 
