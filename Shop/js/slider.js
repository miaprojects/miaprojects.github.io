
var slideIndex = 0;
var slides = document.getElementsByClassName("slider-block-slides"),
    dots = document.getElementsByClassName("dot");
var interval = setInterval(arrowIsClicked, 3000, 1);

function arrowIsClicked(n) {
  clearInterval(interval);
  interval = setInterval(nextSlide, 10000, 1);
  nextSlide(n);
}

function nextSlide(n) {
  slideIndex += n;

  if(slideIndex < 0)
    slideIndex = slides.length-1;
  if(slideIndex == slides.length)
    slideIndex = 0;
  if(slides[slideIndex] != undefined)
    showSlide(slideIndex);
}


function dotIsClicked(n) {
  slideIndex = n;
  clearInterval(interval);
  interval = setInterval(nextSlide, 10000, 1);

  showSlide(slideIndex);
}


function showSlide(n) {

  for (i = 0; i < slides.length; i++) {
      slides[i].className = "slider-block-slides";
      dots[i].className = "dot";      
  }
  slides[n].className = "slider-block-slides fade";
  dots[n].className = "dot active";
}