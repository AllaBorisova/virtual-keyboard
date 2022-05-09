// import helpers from './view';
// import "../assets/styles/style.css";
import "../assets/styles/style.scss";
// import catJpg from '../assets/img/cat.jpg';

const wrapper = document.getElementById('wrapper');

let language = "rus";


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


function generateButton(button, rustext, addClass, engtext) {
	button.className = "button";
	if (addClass) {
		button.classList.add(addClass);
	}
	if (language === "rus") {
		button.textContent = rustext;
	} else {
		button.textContent = engtext;
	}

	keyboard.appendChild(button);
}

const Backquote = document.createElement("div");
generateButton(Backquote, "ё", "", "`")


const Digit1 = document.createElement("div");
generateButton(Digit1, "1")


const Digit2 = document.createElement("div");
generateButton(Digit2, "2")

const Digit3 = document.createElement("div");
generateButton(Digit3, "3")


const Digit4 = document.createElement("div");
generateButton(Digit4, "4")

const Digit5 = document.createElement("div");
generateButton(Digit5, "5")

const Digit6 = document.createElement("div");
generateButton(Digit6, "6")

const Digit7 = document.createElement("div");
generateButton(Digit7, "7")

const Digit8 = document.createElement("div");
generateButton(Digit8, "8")

const Digit9 = document.createElement("div");
generateButton(Digit9, "9")

const Digit0 = document.createElement("div");
generateButton(Digit0, "0")

const Minus = document.createElement("div");
generateButton(Minus, "-")

const Equal = document.createElement("div");
generateButton(Equal, "=")

const Backspace = document.createElement("div");
generateButton(Backspace, "Backspace", "Backspace")
// Backspace.className = "button";
// Backspace.classList.add("Backspace");
// Backspace.textContent = "Backspace";
// keyboard.appendChild(Backspace);

const Tab = document.createElement("div");
generateButton(Tab, "Tab", "Tab")

const KeyQ = document.createElement("div");
generateButton(KeyQ, "й", "", "q")
const KeyW = document.createElement("div");
generateButton(KeyW, "ц", "", "w")
const KeyE = document.createElement("div");
generateButton(KeyE, "у", "", "e")

const KeyR = document.createElement("div");
generateButton(KeyR, "к", "", "r")

const KeyT = document.createElement("div");
generateButton(KeyT, "е", "", "t")

const KeyY = document.createElement("div");
generateButton(KeyY, "н", "", "y")

const KeyU = document.createElement("div");
generateButton(KeyU, "г", "", "u")

const KeyI = document.createElement("div");
generateButton(KeyI, "ш", "", "i")

const KeyO = document.createElement("div");
generateButton(KeyO, "щ", "", "o")

const KeyP = document.createElement("div");
generateButton(KeyP, "з", "", "p")

const BracketLeft = document.createElement("div");
generateButton(BracketLeft, "х", "", "[")

const BracketRight = document.createElement("div");
generateButton(BracketRight, "ъ", "", "]")

const Backslash = document.createElement("div");
generateButton(Backslash, "\\", "", "\\")


const Delete = document.createElement("div");
generateButton(Delete, "Del", "", "Del")


function showButton(button) {
	button.classList.add('active');
	setTimeout(() => {
		button.classList.remove('active');
	}, 300);
	textarea.textContent += button.textContent;
}

document.addEventListener('keydown', function (event) {
	console.log(event);
	if (event.code !== 'Backspace') {
		showButton(eval(event.code));
	}
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
