function init() {
	console.log(window.catalog);

	document.getElementsByClassName('itm1')[0].childNodes[1].innerHTML = window.catalog[8].title;
	document.getElementsByClassName('itm1')[0].childNodes[3].innerHTML += window.catalog[8].price;

	document.getElementsByClassName('itm2')[0].childNodes[1].innerHTML = window.catalog[7].title;
	document.getElementsByClassName('itm2')[0].childNodes[3].innerHTML += window.catalog[7].price;

	document.getElementsByClassName('itm3')[0].childNodes[1].innerHTML = window.catalog[9].title;
	document.getElementsByClassName('itm3')[0].childNodes[3].innerHTML += window.catalog[9].price;

	document.getElementsByClassName('itm4')[0].childNodes[1].innerHTML = window.catalog[5].title;
	document.getElementsByClassName('itm4')[0].childNodes[3].innerHTML += window.catalog[5].price;
}

function init_catalog() {
	console.log(window.catalog);

	document.getElementsByClassName('itm1')[0].childNodes[1].innerHTML = window.catalog[8].title;
	document.getElementsByClassName('itm1')[0].childNodes[3].innerHTML += window.catalog[8].price;

	document.getElementsByClassName('itm2')[0].childNodes[1].innerHTML = window.catalog[7].title;
	document.getElementsByClassName('itm2')[0].childNodes[3].innerHTML += window.catalog[7].price;

	document.getElementsByClassName('itm3')[0].childNodes[1].innerHTML = window.catalog[9].title;
	document.getElementsByClassName('itm3')[0].childNodes[3].innerHTML += window.catalog[9].price;

	document.getElementsByClassName('itm4')[0].childNodes[1].innerHTML = window.catalog[5].title;
	document.getElementsByClassName('itm4')[0].childNodes[3].innerHTML += window.catalog[5].price;

	document.getElementsByClassName('itm5')[0].childNodes[1].innerHTML = window.catalog[4].title;
	document.getElementsByClassName('itm5')[0].childNodes[4].innerHTML = window.catalog[4].placeholder;

	document.getElementsByClassName('itm6')[0].childNodes[1].innerHTML = window.catalog[1].title;
	document.getElementsByClassName('itm6')[0].childNodes[3].innerHTML += window.catalog[1].discountedPrice;

	document.getElementsByClassName('itm7')[0].childNodes[1].innerHTML = window.catalog[11].title;
	document.getElementsByClassName('itm7')[0].childNodes[3].innerHTML += window.catalog[11].price;

	document.getElementsByClassName('itm8')[0].childNodes[1].innerHTML = window.catalog[0].title;
	document.getElementsByClassName('itm8')[0].childNodes[3].innerHTML += window.catalog[0].price;

	document.getElementsByClassName('itm9')[0].childNodes[1].innerHTML = window.catalog[12].title;
	document.getElementsByClassName('itm9')[0].childNodes[3].innerHTML += window.catalog[12].price;

	document.getElementsByClassName('itm10')[0].childNodes[1].innerHTML = window.catalog[13].title;
	document.getElementsByClassName('itm10')[0].childNodes[3].innerHTML += window.catalog[13].price;

	document.getElementsByClassName('itm11')[0].childNodes[1].innerHTML = window.catalog[10].title;
	document.getElementsByClassName('itm11')[0].childNodes[3].innerHTML += window.catalog[10].price;

	document.getElementsByClassName('itm12')[0].childNodes[1].innerHTML = window.catalog[2].title;
	document.getElementsByClassName('itm12')[0].childNodes[3].innerHTML += window.catalog[2].price;
}

function init_item() {

}

function init_bag() {
	console.log(window.catalog);

	document.getElementsByClassName('itm1')[0].childNodes[1].innerHTML = window.catalog[8].title;
	document.getElementsByClassName('itm1')[0].childNodes[3].innerHTML += window.catalog[8].discountedPrice;
	document.getElementsByClassName('itm1')[0].childNodes[5].innerHTML += window.catalog[8].colors;
	document.getElementsByClassName('itm1')[0].childNodes[7].innerHTML += window.catalog[8].sizes;

	document.getElementsByClassName('itm2')[0].childNodes[1].innerHTML = window.catalog[13].title;
	document.getElementsByClassName('itm2')[0].childNodes[3].innerHTML += window.catalog[13].discountedPrice;
	document.getElementsByClassName('itm2')[0].childNodes[5].innerHTML += window.catalog[13].colors;
	document.getElementsByClassName('itm2')[0].childNodes[7].innerHTML += window.catalog[13].sizes;

	document.getElementsByClassName('itm3')[0].childNodes[1].innerHTML = window.catalog[1].title;
	document.getElementsByClassName('itm3')[0].childNodes[3].innerHTML += window.catalog[1].discountedPrice;
	document.getElementsByClassName('itm3')[0].childNodes[5].innerHTML += window.catalog[1].colors;
	document.getElementsByClassName('itm3')[0].childNodes[7].innerHTML += window.catalog[1].sizes;

	document.getElementsByClassName('itm4')[0].childNodes[1].innerHTML = window.catalog[7].title;
	document.getElementsByClassName('itm4')[0].childNodes[3].innerHTML += window.catalog[7].discountedPrice;
	document.getElementsByClassName('itm4')[0].childNodes[5].innerHTML += window.catalog[7].colors;
	document.getElementsByClassName('itm4')[0].childNodes[7].innerHTML += window.catalog[7].sizes;
}


//***   MENU   ***//

function OpenOrClose() {
	var menu = document.getElementsByClassName('menu-item')[0].childNodes;

	if (event.target == menu[0]) {
		event.preventDefault();

		document.getElementsByClassName("mobile-menu")[0].className += " mobile-menu-active";
		document.body.className = "lock";
		menu[0].style.display = "none";	
		menu[1].style.display = "block";
	}
	else if (event.target == menu[1]) {
		event.preventDefault();

		document.getElementsByClassName("mobile-menu")[0].className = "mobile-menu top_line";
		document.body.className = "";
		menu[0].style.display = "block";	
		menu[1].style.display = "none";
	}
}


function openForm() {
	event.target.style.display = "none";
	document.getElementById('form-f').style.display = "block";
}