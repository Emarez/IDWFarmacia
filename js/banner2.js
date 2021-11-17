var slideIndexx = 1;
showSlidesi(slideIndexx);

// Next/previous controls
function plusSlidesi(n) {
  showSlidesi(slideIndexx += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesi(slideIndexx = n);
}

function showSlidesi(n) {
  var i;
  var slides = document.getElementsByClassName("itemdestacado");
  if (n > slides.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndexx-1].style.display = "block";
}