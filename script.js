import Slider from './slider.js';
import {Slide} from './slide.js';

 const images = [
     new Slide ('img/london.jpg', 'Londra', 0),
     new Slide('img/lisbona.jpg', 'Lisbona', 1),
     new Slide('img/newyork.jpg', 'New York', 2)
];


const slider = new Slider(document.querySelector('#slider'), images);



slider.addPrevEvent();
slider.addNextEvent();

