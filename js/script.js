 $(document).ready(function() {
	$("#menu_all").on("click","a", function (event) {
		event.preventDefault();  
		var id  = $(this).attr('href'),  
			top = $(id).offset().top;  //узнаем высоту от начала страницы до блока на который ссылается якорь
		$('body,html').animate({scrollTop: top}, 1000); 
	});
})


if(window.matchMedia('(max-width: 565px)').matches) {
  	var elem = document.querySelector("#descr");
	var elem2 = document.querySelector("#descr2");
	 
	elem.classList.remove("left", "text-right");
	elem2.classList.remove("right", "text-left");

	// console.log(elem.classList);
	// console.log(elem2.classList);
}


