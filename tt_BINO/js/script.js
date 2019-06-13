 $(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     event.preventDefault(); 
		var id  = $(this).attr('href'),  
			top = $(id).offset().top;  
		$('body,html').animate({scrollTop: top}, 1000); 
   });
 });


function changeColor(x, _this) {
    if(_this.checked)
        x.style.backgroundColor = '#e74e3e';
    else 
        x.style.backgroundColor = 'transparent';
}



