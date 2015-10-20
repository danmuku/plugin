alert("init")

// if jQuery is not loaded，load it
if(!window.jQuery){
	document.write("<script type=\"text/javascript\" src=\"https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js\"></script>");
}

// load firebase.js
$.getScript("https://cdn.firebase.com/js/client/2.2.1/firebase.js");

var urlLocation = location.href;

if(urlLocation.charAt(urlLocation.length - 1) === '#'){
	urlLocation = urlLocation.substr(0, urlLocation.length-1);
}

if(urlLocation.charAt(urlLocation.length - 1) === '/'){
	urlLocation = urlLocation.substr(0, urlLocation.length-1);
}

alert(urlLocation);