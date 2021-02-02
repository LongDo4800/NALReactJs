const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++){
	let xxx = "images/pic"+i+".jpg";

	const newImage = document.createElement('img');
	newImage.setAttribute('src', xxx);
	newImage.onclick = function(){
		displayedImage.src = xxx;
	};
	thumbBar.appendChild(newImage);

}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
	let cls = btn.getAttribute("class");
	if(cls == "dark"){
		cls = "light";
		btn.setAttribute('class', cls);
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";	
	}else{
		cls = "dark";
		btn.setAttribute('class', cls);
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}	
}