var slideIndex = 1;
showItems(slideIndex);

function currentItem(n) {
  showItems(slideIndex = n);
}

function showItems(n) {
  var i;
  var big = document.getElementsByClassName("item-pr-big");
  var mini = document.getElementsByClassName("item-pr-small");

  if (n > big.length) 
    slideIndex = 1;

  if (n < 1) {
    slideIndex = big.length;
  }

  for (i = 0; i < big.length; i++) {
     big[i].style.display = "none";
  }

  for (i = 0; i < mini.length; i++) {
     mini[i].className = mini[i].className.replace(" mask-on", "");
  }

  big[slideIndex-1].style.display = "block";
  mini[slideIndex-1].className += " mask-on";
}




 var selectedBtn;
 var selectedBtn2;
 var first = document.getElementsByClassName('item-preview-info-sub')[0].getElementsByClassName('btn-item')[0];
 first.classList.add('clicked');
 var second = document.getElementsByClassName('item-preview-info-sub')[1].getElementsByClassName('btn-item')[1];
 second.classList.add('clicked');

 document.querySelector('#btn-clicked').getElementsByTagName('div')[0].onclick = function(e) {
    var target = e.target;
    if (target.classList == 'btn-item')
      highlight(target);
    return;
  }
  
  function highlight(node) {
    if(selectedBtn) {
      selectedBtn.classList.remove('clicked');
    }
    first.classList.remove('clicked');
    selectedBtn = node;
    selectedBtn.classList.add('clicked');
  }


  document.querySelector('#btn-clicked').getElementsByTagName('div')[1].onclick = function(e) {
    var target = e.target;
    if (target.classList == 'btn-item')
      highlight2(target);
    return;
  }

  function highlight2(node) {
    if(selectedBtn2) {
      selectedBtn2.classList.remove('clicked');
    }
    second.classList.remove('clicked');
    selectedBtn2 = node;
    selectedBtn2.classList.add('clicked');
  }



  