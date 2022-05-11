
import "../assets/styles/style.scss";

const wrapper = document.body;

console.log('Добрый день. Ветка https://github.com/AllaBorisova/virtual-keyboard/tree/gh-pages и исходный код в https://github.com/AllaBorisova/virtual-keyboard/tree/development. Чуть позже будет там пул реквест, не знаю как кинуть на него потом ссылку((');

let language = "rus";
let capsCheck = false;

if (localStorage.getItem("language") !== null) {
	language = localStorage.getItem("language");;
} else {
	localStorage.setItem("language", "rus");
}


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

const langBlock = document.createElement("p");
langBlock.className = "lang";
langBlock.innerHTML = language;
container.appendChild(langBlock);

const infoBlock = document.createElement("p");
infoBlock.className = "info";
infoBlock.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt";
container.appendChild(infoBlock);


//first line
const Backquote = document.createElement("div");
generateButton(Backquote, "ё", "", "`", "Backquote")

const Digit1 = document.createElement("div");
generateButton(Digit1, "1", "", "", "Digit1")

const Digit2 = document.createElement("div");
generateButton(Digit2, "2", "", "", "Digit2")

const Digit3 = document.createElement("div");
generateButton(Digit3, "3", "", "", "Digit3")

const Digit4 = document.createElement("div");
generateButton(Digit4, "4", "", "", "Digit4")

const Digit5 = document.createElement("div");
generateButton(Digit5, "5", "", "", "Digit5")

const Digit6 = document.createElement("div");
generateButton(Digit6, "6", "", "", "Digit6")

const Digit7 = document.createElement("div");
generateButton(Digit7, "7", "", "", "Digit7")

const Digit8 = document.createElement("div");
generateButton(Digit8, "8", "", "", "Digit8")

const Digit9 = document.createElement("div");
generateButton(Digit9, "9", "", "", "Digit9")

const Digit0 = document.createElement("div");
generateButton(Digit0, "0", "", "", "Digit0")

const Minus = document.createElement("div");
generateButton(Minus, "-", "", "", "Minus")

const Equal = document.createElement("div");
generateButton(Equal, "=", "", "", "Equal")

const Backspace = document.createElement("div");
generateButton(Backspace, "Backspace", "Backspace", "", "Backspace")


//second line
const Tab = document.createElement("div");
generateButton(Tab, "Tab", "Tab", "", "Tab")

const KeyQ = document.createElement("div");
generateButton(KeyQ, "й", "", "q", "KeyQ")

const KeyW = document.createElement("div");
generateButton(KeyW, "ц", "", "w", "KeyW")

const KeyE = document.createElement("div");
generateButton(KeyE, "у", "", "e", "KeyE")

const KeyR = document.createElement("div");
generateButton(KeyR, "к", "", "r", "KeyR")

const KeyT = document.createElement("div");
generateButton(KeyT, "е", "", "t", "KeyT")

const KeyY = document.createElement("div");
generateButton(KeyY, "н", "", "y", "KeyY")

const KeyU = document.createElement("div");
generateButton(KeyU, "г", "", "u", "KeyU")

const KeyI = document.createElement("div");
generateButton(KeyI, "ш", "", "i", "KeyI")

const KeyO = document.createElement("div");
generateButton(KeyO, "щ", "", "o", "KeyO")

const KeyP = document.createElement("div");
generateButton(KeyP, "з", "", "p", "KeyP")

const BracketLeft = document.createElement("div");
generateButton(BracketLeft, "х", "", "[", "BracketLeft")

const BracketRight = document.createElement("div");
generateButton(BracketRight, "ъ", "", "]", "BracketRight")

const Backslash = document.createElement("div");
generateButton(Backslash, "\\", "", "\\", "Backslash");

const Delete = document.createElement("div");
generateButton(Delete, "Del", "", "Del", "Delete")


//third line
const CapsLock = document.createElement("div");
generateButton(CapsLock, "CapsLock", "CapsLock", "", "CapsLock")

const KeyA = document.createElement("div");
generateButton(KeyA, "ф", "", "a", "KeyA")

const KeyS = document.createElement("div");
generateButton(KeyS, "ы", "", "s", "KeyS")

const KeyD = document.createElement("div");
generateButton(KeyD, "в", "", "d", "KeyD")

const KeyF = document.createElement("div");
generateButton(KeyF, "а", "", "f", "KeyF")

const KeyG = document.createElement("div");
generateButton(KeyG, "п", "", "g", "KeyG")

const KeyH = document.createElement("div");
generateButton(KeyH, "р", "", "h", "KeyH")

const KeyJ = document.createElement("div");
generateButton(KeyJ, "о", "", "j", "KeyJ")

const KeyK = document.createElement("div");
generateButton(KeyK, "л", "", "k", "KeyK")

const KeyL = document.createElement("div");
generateButton(KeyL, "д", "", "l", "KeyL")

const Semicolon = document.createElement("div");
generateButton(Semicolon, "ж", "", ";", "Semicolon")

const Quote = document.createElement("div");
generateButton(Quote, "э", "", "'", "Quote")

const Enter = document.createElement("div");
generateButton(Enter, "Enter", "Enter", "", "Enter")


//fourth line

const ShiftLeft = document.createElement("div");
generateButton(ShiftLeft, "Shift", "ShiftLeft", "", "ShiftLeft")

const KeyZ = document.createElement("div");
generateButton(KeyZ, "я", "", "z", "KeyZ")

const KeyX = document.createElement("div");
generateButton(KeyX, "ч", "", "x", "KeyX")

const KeyC = document.createElement("div");
generateButton(KeyC, "с", "", "c", "KeyC")

const KeyV = document.createElement("div");
generateButton(KeyV, "м", "", "v", "KeyV")

const KeyB = document.createElement("div");
generateButton(KeyB, "и", "", "b", "KeyB")

const KeyN = document.createElement("div");
generateButton(KeyN, "т", "", "n", "KeyN")

const KeyM = document.createElement("div");
generateButton(KeyM, "ь", "", "m", "KeyM")

const Comma = document.createElement("div");
generateButton(Comma, "б", "", ",", "Comma")

const Period = document.createElement("div");
generateButton(Period, "ю", "", ".", "Period")

const Slash = document.createElement("div");
generateButton(Slash, ".", "", "/", "Slash")

const ArrowUp = document.createElement("div");
generateButton(ArrowUp, "▲", "", "", "ArrowUp")

const ShiftRight = document.createElement("div");
generateButton(ShiftRight, "Shift", "ShiftRight", "", "ShiftRight")

//fifth line
const ControlLeft = document.createElement("div");
generateButton(ControlLeft, "Ctrl", "ControlLeft", "", "ControlLeft")

const MetaLeft = document.createElement("div");
generateButton(MetaLeft, "Win", "", "", "MetaLeft")

const AltLeft = document.createElement("div");
generateButton(AltLeft, "Alt", "", "", "AltLeft")

const Space = document.createElement("div");
generateButton(Space, " ", "Space", "", "Space")

const AltRight = document.createElement("div");
generateButton(AltRight, "Alt", "", "", "AltRight")

const ArrowLeft = document.createElement("div");
generateButton(ArrowLeft, "◄", "", "", "ArrowLeft")

const ArrowDown = document.createElement("div");
generateButton(ArrowDown, "▼", "", "", "ArrowDown")

const ArrowRight = document.createElement("div");
generateButton(ArrowRight, "►", "", "", "ArrowRight")

const ControlRight = document.createElement("div");
generateButton(ControlRight, "Ctrl", "", "", "ControlRight")

function generateButton(button, rustext, addClass, engtext, name) {
	button.className = "button";
	if (addClass) {
		button.classList.add(addClass);
	}
	if (language === "rus") {
		button.textContent = rustext;
	} else {
		if (engtext) {
			button.textContent = engtext;
		} else {
			button.textContent = rustext;
		}
	}
	if (rustext && engtext) {
		button.dataset.rus = rustext;
		button.dataset.eng = engtext;
	}
	// console.log(button);
	button.dataset.name = name;

	keyboard.appendChild(button);

}

document.addEventListener("click", function (event) {
	if (event.target.classList.contains("button")) {
		switch (event.target.dataset.name) {
			case 'CapsLock':
				toggleCaps();
				showButton(eval(event.target.dataset.name));
				break;
			case 'Backspace':
				showButton(eval(event.target.dataset.name));
				textarea.value = textarea.value.substring(0, textarea.value.length - 1);
				break;
			case 'Delete':
				textarea.value = textarea.value.substring(0, textarea.selectionStart) + textarea.value.substring(textarea.selectionStart + 1, textarea.value.length);
				break;
			case 'Enter':
				showButton(eval(event.target.dataset.name));
				textarea.value = textarea.value + '\r\n';
				break;
			case 'Tab':
			case 'ControlRight':
			case 'AltRight':
			case 'ShiftLeft':
			case 'ShiftRight':
			case 'MetaLeft':
			case 'ArrowUp':
			case 'ArrowLeft':
			case 'ArrowRight':
			case 'ArrowDown':
			case 'AltLeft':
			case 'ControlLeft':
				showButton(eval(event.target.dataset.name));
				break;

			default:
				showButton(eval(event.target.dataset.name));
				executeButton(eval(event.target.dataset.name));
				break;
		}
	}

})



function showButton(button) {
	button.classList.add('active');
	setTimeout(() => {
		button.classList.remove('active');
	}, 300);

}

function executeButton(button) {
	textarea.value += button.textContent;
}

let letters = [Backquote, Semicolon, Quote, Comma, Period, BracketLeft, BracketRight, KeyA, KeyB, KeyC, KeyD, KeyE, KeyF, KeyG, KeyH, KeyI, KeyJ, KeyK, KeyL, KeyM, KeyN, KeyO, KeyP, KeyQ, KeyR, KeyS, KeyT, KeyU, KeyV, KeyW, KeyX, KeyY, KeyZ];

function toggleCaps() {
	//console.log('toggle');
	letters.forEach((element) => {
		let letter = element.innerText;
		if (letter == letter.toUpperCase()) {
			element.textContent = letter.toLowerCase();
		} else {
			element.textContent = letter.toUpperCase();
		}
	})
	if (capsCheck === true) {
		capsCheck = false;
		CapsLock.classList.remove("on");
	} else {
		capsCheck = true;
		CapsLock.classList.add("on");
	}
	//console.log(capsCheck);
}

function changeLanguage() {
	//console.log('Change language');
	if (language === "rus") {
		language = "eng";

		langBlock.innerHTML = language;
		letters.forEach((element) => {

			element.innerText = (capsCheck === true) ? element.dataset.eng.toUpperCase() : element.dataset.eng;
		})
	} else {
		language = "rus";
		langBlock.innerHTML = language;
		letters.forEach((element) => {
			element.innerText = (capsCheck === true) ? element.dataset.rus.toUpperCase() : element.dataset.rus;
		})
	}
	localStorage.setItem("language", language);


}


document.addEventListener('keydown', pressKey);

function pressKey(event) {
	console.log(event);

	switch (event.code) {
		case 'CapsLock':
			toggleCaps();
			showButton(eval(event.code));
			break;
		case 'Tab':
		case 'ControlRight':
		case 'AltRight':
		case 'Enter':
		case 'Backspace':
		case 'Delete':
		case 'ShiftLeft':
		case 'ShiftRight':
		case 'MetaLeft':
		case 'ArrowUp':
		case 'ArrowLeft':
		case 'ArrowRight':
		case 'ArrowDown':
			showButton(eval(event.code));
			break;
		case 'AltLeft':
			if (event.ctrlKey) {
				changeLanguage();

			}
			showButton(eval(event.code)); break;
		case 'ControlLeft':
			if (event.altKey) {
				changeLanguage();
			}
			showButton(eval(event.code));
			break;
		default: showButton(eval(event.code)); executeButton(eval(event.code)); break;
	}

}





