var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');

for (var i = 0; i < tabs.length; i++) {
	var tab = tabs[i];
	setTabHandler(tab,i);

}

function setTabHandler (tab,tabPos) {
	tab.onclick = function(){
		for (var i = 0; i < tabs.length; i++) {
			if(tabs[i].getAttribute('class')){
				tabs[i].removeAttribute('class');
			}
		}

		tab.setAttribute('class','active');

		for (var i = 0; i < panels.length; i++) {
			if(panels[i].getAttribute('class')){
				panels[i].removeAttribute('class');
			}
		}

		panels[tabPos].setAttribute('class','active-panel');
	}
}