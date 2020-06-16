const downloadImage = document.querySelector('.download>img');
let images = ['images/bike.png',
			  'images/stuff.png',
			  'images/wood.png'];

let i = 1;

const slider = function() {

		setInterval(() => {

			if(i == images.length) {
				i = 0;
			}
			downloadImage.src=images[i];
			i += 1;

		}, 9000);

}


window.onload = function() {
	slider();
	downloadImage.style.animation = 'changeOpacity 9s infinite';

}


