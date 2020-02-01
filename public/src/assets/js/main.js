$(document).ready(() => {
      document.querySelector("#current_year").innerHTML = new Date().getFullYear();
});

$(document).ready(() => {
    rangeSlide();
});


/** slick slider - recommended products slide */
$(document).ready(() => {
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


/** quantity incrementor or decrementor initialization */
$(document).ready(() => {
	qty();
});



$(document).ready(() => {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});


const rangeSlide = () => {
	let rangeSlider = document.getElementById("price_range");
  let output = document.getElementById("show_price");
output.innerHTML = rangeSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rangeSlider.oninput = function() {
 output.innerHTML = this.value;
}
}

/** quantity incrementor or decrementor */
const qty = () => {
	let qty = Number($("#qty_value").val());
	$("#plus").click(() => {
		qty += 1;
		$("#qty_value").val(qty);
	})

  $(".minus").on('click', () => {
		qty -= 1;
		if(qty <= 0) {
      $("#qty_value").val(1);
    }else {
      $("#qty_value").val(qty);
    } 
	});
}

/** smooth scroll */
$(document).ready(() => {
  // Add smooth scrolling to all links
  $("a.btn_smooth").on('click', function(event) {

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
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});