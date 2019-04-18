var slideIndex = 1;
var prevSlideIndex = slideIndex;

showSlide(slideIndex);

function plusSlide(n){
  prevSlideIndex = slideIndex;
  showSlide(slideIndex += n);
}

function currentSlide(n){
  prevSlideIndex = slideIndex;
  showSlide(slideIndex = n);
}

function showSlide(n){
  var i;
  var slides = document.querySelectorAll(".mySlides");
  var dots = document.querySelectorAll(".dots");
  if (n >slides.length){slideIndex=1}
  if (n<1) {slideIndex = slides.length}
  for(i = 0; i < slides.length ; i++){
    slides[i].classList.add('hide');
  }
  for(i = 0; i <dots.length; i++){
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.remove("hide");
  dots[slideIndex - 1].classList.add("active");


  }
