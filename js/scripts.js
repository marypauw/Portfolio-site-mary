//This is the start of the javascript file
console.log("Hello Welcome to my portfolio site!");

//alert "under construction"
$('.alert-button').on('click', function() {
  alert('This part of the website is under construction. Come back later!');
});

//smooth scrolling
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//Back to the top arrow

//Get the button:
arrowtop = document.getElementById("arrowtop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowtop.style.display = "block";
  } else {
    arrowtop.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Animation of background on scroll

var HighlightContainer = document.getElementsByClassName('highlight');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  if (scrollPosition >= 30) {
    Array.from(HighlightContainer).forEach (Element=>{Element.classList.add('show')})
  }
} );

