
// load firebase.js
$.getScript("https://cdn.firebase.com/js/client/2.2.1/firebase.js");

var urlLocation = location.href;

if(urlLocation.charAt(urlLocation.length - 1) === '#'){
	urlLocation = urlLocation.substr(0, urlLocation.length-1);
}

if(urlLocation.charAt(urlLocation.length - 1) === '/'){
	urlLocation = urlLocation.substr(0, urlLocation.length-1);
}





