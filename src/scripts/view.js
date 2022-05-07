function createImg(url, container) {
	const img = document.createElement('img');
	img.src = url;
	img.alt = '';
	container.appendChild(img);
}

function createDiv(text, container) {
	const div = document.createElement('div');
	div.className = 'new';
	div.textContent = text;
	container.appendChild(div);
}

export default {
	createDiv,
	createImg
}