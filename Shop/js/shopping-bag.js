function addItem() {

		if (typeof (localStorage) !== "undefined") {

		// var price = Number(window.catalog[6].discountedPrice); 
		localStorage.thing_count = Number(localStorage.thing_count) + 1;
		localStorage.price = Number(localStorage.price) + 180.60;
		document.getElementById("bag-info").innerHTML = "Bag &pound; " + localStorage.price + " ( " + localStorage.thing_count + " )";

	} else document.getElementById("bag-info").innerHTML = "Sorry, your browser does not support web storage...";
}


function buyItems() {

	removeItems();
	document.getElementById("shopBag-info").innerHTML = "Thank you for your purchase";
	emptyBag();
	document.getElementById("shopBag-info").style.display = "block"
}


function clearBag() {

	removeItems();
	document.getElementById("shopBag-info").innerHTML = "Your shopping bag is empty.<br><br> Use Catalog to add new items :)";
	console.log("removed");

	emptyBag();
	document.getElementById("shopBag-info").style.display = "block";
}



function loadBag() {
	if(typeof(localStorage) !== "undefined") {

		if(!localStorage.thing_count)
			localStorage.thing_count = 0;
		if(!localStorage.price)
			localStorage.price = 0;
		document.getElementById("bag-info").innerHTML = "Bag &pound; " + localStorage.price + " ( " + localStorage.thing_count + " )";
	}
	else
		document.getElementById("bag-info").innerHTML = "Sorry, your browser does not support web storage...";
}

function emptyBag() {
	if(typeof(Storage) !== "undefined") {
		localStorage.thing_count = 0;
		localStorage.price = 0;
		document.getElementById("bag-info").innerHTML = "Bag &pound;  " + localStorage.price + " ( " + localStorage.thing_count + " )";
	} else 
	document.getElementById("bag-info").innerHTML = "Sorry, your browser does not support web storage...";
}


function removeItems() {
	var items = document.getElementsByClassName("info");
	for (var i = 0; i < items.length; i++) 
		items[i].style.display = "none";
}

function removeThing(n) {
	var items = document.getElementsByClassName("info");
		items[n].style.display = "none";
}


document.addEventListener("load", loadBag,true);