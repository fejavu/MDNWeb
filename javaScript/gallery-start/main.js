var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

function setDisplayImg (src) {
	displayedImage.setAttribute('src',src);
}

  for (var i = 0; i < 5 ; i++) {
	  var newImage = document.createElement('img');
	  newImage.setAttribute('src', 'images/pic'+(i+1)+'.jpg');
	  thumbBar.appendChild(newImage);
	  newImage.onclick = function(e) {
	  	var imgSrc = e.target.getAttribute("src");
	  	setDisplayImg(imgSrc)
	  }
}
/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
	if(btn.getAttribute("class")==="dark"){
		btn.setAttribute("class","light");
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	}else{
		btn.setAttribute("class","dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}