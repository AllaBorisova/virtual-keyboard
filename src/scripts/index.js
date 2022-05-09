// import helpers from './view';
// import "../assets/styles/style.css";
import "../assets/styles/style.scss";
// import catJpg from '../assets/img/cat.jpg';

const wrapper = document.getElementById('wrapper');


const container = document.createElement('div');
container.className = "container";
wrapper.appendChild(container);

const h1 = document.createElement("h1");
h1.textContent = "Виртуальная клавиатура";

container.appendChild(h1);

const textarea = document.createElement("textarea");
container.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
container.appendChild(keyboard);




const backquote = document.createElement("div");
backquote.className = "button";
backquote.textContent = "`";
keyboard.appendChild(backquote);

const Digit1 = document.createElement("div");
Digit1.className = "button";
Digit1.textContent = "1";
keyboard.appendChild(Digit1);

const Digit2 = document.createElement("div");
Digit2.className = "button";
Digit2.textContent = "2";
keyboard.appendChild(Digit2);

const Digit3 = document.createElement("div");
Digit3.className = "button";
Digit3.textContent = "3";
keyboard.appendChild(Digit3);

const Digit4 = document.createElement("div");
Digit4.className = "button";
Digit4.textContent = "4";
keyboard.appendChild(Digit4);

const Digit5 = document.createElement("div");
Digit5.className = "button";
Digit5.textContent = "5";
keyboard.appendChild(Digit5);

const Digit6 = document.createElement("div");
Digit6.className = "button";
Digit6.textContent = "6";
keyboard.appendChild(Digit6);

const Digit7 = document.createElement("div");
Digit7.className = "button";
Digit7.textContent = "7";
keyboard.appendChild(Digit7);

const Digit8 = document.createElement("div");
Digit8.className = "button";
Digit8.textContent = "8";
keyboard.appendChild(Digit8);

const Digit0 = document.createElement("div");
Digit0.className = "button";
Digit0.textContent = "0";
keyboard.appendChild(Digit0);

const Minus = document.createElement("div");
Minus.className = "button";
Minus.textContent = "-";
keyboard.appendChild(Minus);

const Equal = document.createElement("div");
Equal.className = "button";
Equal.textContent = "=";
keyboard.appendChild(Equal);

const Backspace = document.createElement("div");
Backspace.className = "button";
Backspace.classList.add("Backspace");
Backspace.textContent = "Backspace";
keyboard.appendChild(Backspace);

function showButton(button) {
	button.classList.add('active');
	setTimeout(() => {
		button.classList.remove('active');
	}, 300);
	textarea.textContent += button.textContent;
}

document.addEventListener('keydown', function (event) {
	console.log(event);
	showButton(eval(event.code));
	// if (event.code == 'Digit1') {
	// 	showButton(digit1);
	// }
	// if (event.code == 'Digit2') {
	// 	showButton(digit2)
	// }
	// if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
	// 	alert('Undo!')
	// }
});

// const { createDiv, createImg } = helpers;

// createDiv('test', wrapper);

// createImg(catJpg, wrapper);
