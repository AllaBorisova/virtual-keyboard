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

//first line
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


//second line
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
generateButton(Backslash, "\\", "", "\\");

const Delete = document.createElement("div");
generateButton(Delete, "Del", "", "Del")


//third line
const CapsLock = document.createElement("div");
generateButton(CapsLock, "CapsLock", "CapsLock", "CapsLock")

const KeyA = document.createElement("div");
generateButton(KeyA, "ф", "", "a")

const KeyS = document.createElement("div");
generateButton(KeyS, "ы", "", "s")

const KeyD = document.createElement("div");
generateButton(KeyD, "в", "", "d")

const KeyF = document.createElement("div");
generateButton(KeyF, "а", "", "f")

const KeyG = document.createElement("div");
generateButton(KeyG, "п", "", "g")

const KeyH = document.createElement("div");
generateButton(KeyH, "р", "", "h")

const KeyJ = document.createElement("div");
generateButton(KeyJ, "о", "", "j")

const KeyK = document.createElement("div");
generateButton(KeyK, "л", "", "k")

const KeyL = document.createElement("div");
generateButton(KeyL, "д", "", "l")

const Semicolon = document.createElement("div");
generateButton(Semicolon, "ж", "", ";")

const Quote = document.createElement("div");
generateButton(Quote, "э", "", "'")

const Enter = document.createElement("div");
generateButton(Enter, "Enter", "Enter", "")


//fourth line

const ShiftLeft = document.createElement("div");
generateButton(ShiftLeft, "Shift", "ShiftLeft", "")

const KeyZ = document.createElement("div");
generateButton(KeyZ, "я", "", "z")

const KeyX = document.createElement("div");
generateButton(KeyX, "ч", "", "x")

const KeyC = document.createElement("div");
generateButton(KeyC, "с", "", "c")

const KeyV = document.createElement("div");
generateButton(KeyV, "м", "", "v")

const KeyB = document.createElement("div");
generateButton(KeyB, "и", "", "b")

const KeyN = document.createElement("div");
generateButton(KeyN, "т", "", "n")

const KeyM = document.createElement("div");
generateButton(KeyM, "ь", "", "m")

const Comma = document.createElement("div");
generateButton(Comma, "б", "", ",")

const Period = document.createElement("div");
generateButton(Period, "ю", "", ".")

const Slash = document.createElement("div");
generateButton(Slash, ".", "", "/")

const ArrowUp = document.createElement("div");
generateButton(ArrowUp, "▲", "")

const ShiftRight = document.createElement("div");
generateButton(ShiftRight, "Shift", "ShiftRight", "")

//fifth line
const ControlLeft = document.createElement("div");
generateButton(ControlLeft, "Ctrl", "ControlLeft", "")

const MetaLeft = document.createElement("div");
generateButton(MetaLeft, "Win", "", "")

const AltLeft = document.createElement("div");
generateButton(AltLeft, "Alt", "", "")

const Space = document.createElement("div");
generateButton(Space, " ", "Space", "")

const AltRight = document.createElement("div");
generateButton(AltRight, "Alt", "", "")

const ArrowLeft = document.createElement("div");
generateButton(ArrowLeft, "◄", "", "")

const ArrowDown = document.createElement("div");
generateButton(ArrowDown, "▼", "", "")

const ArrowRight = document.createElement("div");
generateButton(ArrowRight, "►", "", "")

const CtrlRight = document.createElement("div");
generateButton(CtrlRight, "Ctrl", "", "")



function showButton(button) {
	button.classList.add('active');
	setTimeout(() => {
		button.classList.remove('active');
	}, 300);
	textarea.textContent += button.textContent;
}

let letters = [Backquote, Semicolon, Quote, Comma, Period, BracketLeft, BracketRight, KeyA, KeyB, KeyC, KeyD, KeyE, KeyF, KeyG, KeyH, KeyI, KeyJ, KeyK, KeyL, KeyM, KeyN, KeyO, KeyP, KeyQ, KeyR, KeyS, KeyT, KeyU, KeyV, KeyW, KeyX, KeyY, KeyZ];

function toggleCaps() {
	console.log('toggle');
	letters.forEach((element) => {
		let letter = element.innerText;
		if (letter == letter.toUpperCase()) {
			element.textContent = letter.toLowerCase();
		} else {
			element.textContent = letter.toUpperCase();
		}
	})
}


document.addEventListener('keydown', function (event) {
	console.log(event);
	if (event.code == 'AltLeft' && (event.ctrlKey)) {
		console.log('Change language');
		lang = "eng";
	}
	switch (event.code) {
		case 'CapsLock': toggleCaps(); break;
		default: showButton(eval(event.code)); break;
	}
	// if ((event.code !== 'Backspace') && (event.code !== 'ArrowUp') && (event.code !== 'ShiftRight') && (event.code !== 'ShiftLeft') && (event.code !== 'Delete') && (event.code !== 'Enter') && (event.code !== 'CapsLock') && (event.code !== 'Tab')) {
	// 	showButton(eval(event.code));
	// }
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
