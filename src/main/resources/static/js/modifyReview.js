'use strict';


//파일 개별 삭제
const $delFile = document.querySelectorAll('.delFile');

for(const button of $delFile){
	button.addEventListener("click",e=>{
		const storeFileName = e.target.getAttribute('data-storeFileName');
		const url = `/review/attach/${storeFileName}/`;
		console.log(url);
		if(confirm('삭제?')){
			request.delete(url)
						 .then(res=>res.json())
						 .then(res=>handler(res,e.target))
						 .catch(err=>console.log(err));
						 }
						 })
						 }
						 
const handler = (res,target) => {
	if(res.rtcd == '00'){
		console.log('성공');
		const $parent = target.closest('div');
		console.log($parent);
		$parent.remove($parent);
	}
	else{
		console.log('실패');
	}
		
}



var slideIndex = 0; //slide index

// HTML 로드가 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  // Auto Move Slide
  var sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}


// Next/previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " active";
}


