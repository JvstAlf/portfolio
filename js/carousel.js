let slideIndex = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides();
showSlides1();
showSlides2();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function nextSlide1() {
    slideIndex1++;
    showSlides1();
    timer1 = _timerr; // reset timer
  }

  function nextSlide2() {
    slideIndex2++;
    showSlides2();
    timer2 = _timerrr; // reset timer
  }

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

function prevSlide1() {
    slideIndex1--;
    showSlides1();
    timer1 = _timerr;
  }

  function prevSlide2() {
    slideIndex2--;
    showSlides2();
    timer2 = _timerrr;
  }

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}

function currentSlide1(n) {
    slideIndex1 = n - 1;
    showSlides1();
    timer1 = _timerr;
  }

  function currentSlide2(n) {
    slideIndex2 = n - 1;
    showSlides2();
    timer1 = _timerrr;
  }

function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  
  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  
  // show one slide base on index number
  slides[slideIndex].style.display = "block";
  
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  
  dots[slideIndex].classList.add("active");
}

function showSlides1() {
    let slides1 = document.querySelectorAll(".mySlides1");
    let dots1 = document.querySelectorAll(".dots1");
  
    if (slideIndex1 > slides1.length - 1) slideIndex1 = 0;
    if (slideIndex1 < 0) slideIndex1 = slides1.length - 1;
    
    // hide all slides
    slides1.forEach((slide) => {
      slide.style.display = "none";
    });
    
    // show one slide base on index number
    slides1[slideIndex1].style.display = "block";
    
    dots1.forEach((dot) => {
      dot.classList.remove("active1");
    });
    
    dots1[slideIndex1].classList.add("active1");
  }

  function showSlides2() {
    let slides2 = document.querySelectorAll(".mySlides2");
    let dots2 = document.querySelectorAll(".dots2");
  
    if (slideIndex2 > slides2.length - 1) slideIndex2 = 0;
    if (slideIndex2 < 0) slideIndex2 = slides2.length - 1;
    
    // hide all slides
    slides2.forEach((slide) => {
      slide.style.display = "none";
    });
    
    // show one slide base on index number
    slides2[slideIndex2].style.display = "flex";
    
    dots2.forEach((dot) => {
      dot.classList.remove("active2");
    });
    
    dots2[slideIndex2].classList.add("active2");
  }

// autoplay slides --------
let timer = 7; // sec
let timer1 = 7; // sec
let timer2 = 7; // sec
const _timer = timer;
const _timerr = timer1;
const _timerrr = timer2;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec

setInterval(() => {
    timer1--;
  
    if (timer1 < 1) {
      nextSlide1();
      timer1 = _timerr; // reset timer
    }
  }, 1000); // 1sec

  setInterval(() => {
    timer2--;
  
    if (timer2 < 1) {
      nextSlide2();
      timer2 = _timerrr; // reset timer
    }
  }, 1000); // 1sec