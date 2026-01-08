/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const myButton1 = document.getElementById("faq-button1")
myButton1.addEventListener("click",faqfunction)

const myButton2 = document.getElementById("faq-button2")
myButton2.addEventListener("click",faqfunction)

const myButton3 = document.getElementById("faq-button3")
myButton3.addEventListener("click",faqfunction)

const myButton4 = document.getElementById("faq-button4")
myButton4.addEventListener("click",faqfunction)

const myButton5 = document.getElementById("faq-button5")
myButton5.addEventListener("click",faqfunction)

function faqfunction(id) {
  var x = document.getElementById(id)
  
  if (x.style.display === "block") {
      x.style.display = "none";
      // myButton.style.transform="rotate(90deg)";
    } else {
      x.style.display = "block";
    }
}





// function plusSlides(n) {
//   let slideIndex = 1;
//   let slides = document.getElementsByClassName("testimonial-item");
//   if(slideIndex == 1){
//     slides[2].style.display ="none";

//   }
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("testimonial-item");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slides[slideIndex-1].style.display = "block";  
// }



// Declare index at the top level
let index = 0;

// Wait for DOM to be ready before allowing interactions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize: make sure first slide is active
  const slides = document.getElementsByClassName("testimonial-item");
  if (slides.length > 0 && !slides[0].classList.contains("active")) {
    slides[0].classList.add("active");
  }
});

function nextTestimonial() {
  const slides = document.getElementsByClassName("testimonial-item");
  
  // Check if slides exist
  if (slides.length === 0) {
    console.error('No testimonial items found');
    return;
  }

  const max = slides.length;
  console.log(slides[index]);
  
  // Remove active from current slide
  slides[index].classList.remove("active");
  
  // Move to next
  index++;
  
  // Loop back to start
  if (index >= max) {
    index = 0;
  }
  
  // Add active to new slide
  slides[index].classList.add("active");
}

function prevTestimonial() {
  const slides = document.getElementsByClassName("testimonial-item");
  
  if (slides.length === 0) {
    console.error('No testimonial items found');
    return;
  }

  const max = slides.length;
  
  slides[index].classList.remove("active");
  
  index--;
  
  if (index < 0) {
    index = max - 1;
  }
  
  slides[index].classList.add("active");
}




