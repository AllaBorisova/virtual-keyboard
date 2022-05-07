import helpers from './view';
import "../assets/styles/style.css";
import "../assets/styles/style.scss";
import catJpg from '../assets/img/cat.jpg';

const wrapper = document.getElementById('wrapper');



const { createDiv, createImg } = helpers;

createDiv('test', wrapper);

createImg(catJpg, wrapper);
