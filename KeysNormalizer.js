// ==UserScript==
// @name         KeyNormalizer
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Making key arrays to ASF standard 
// @author       Looney
// @match        */pages/command.html
// @grant        none
// ==/UserScript==

var d = document.createElement('input');
d.type = 'button';
d.value = 'Normalize';
document.getElementsByClassName('box-header')[0].appendChild(d);


d.onclick = function(){
	var laststr = "";
	var str = document.getElementById('commandInput').value;
	var splitted = str.split(' ');

	var counter = 0;
	for(var i = 0; i < splitted.length; ++i){
		if(splitted[i] != ""){
			++counter;
			laststr += splitted[i];
			if(counter > 2 && i != (splitted.length -1) && splitted[i][splitted[i].length -1] != ',') laststr += ",";
			else if (counter <= 2) laststr += " ";
		}
	}
	document.getElementById('commandInput').value = laststr;
};