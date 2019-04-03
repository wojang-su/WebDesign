window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
		document.getElementByID("scrollUp").style.display = "blcok";
	} else {
		document.getElementByID("scrollUp").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}











