$(document).ready(function() {

  //sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    // Update the active section in the header
    updateActiveSection();
  });

  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();

    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }

    // Iterate through each section and update the active class in the header
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();

      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }

});


$(document).ready(function() {

  $(".header ul li a").click(function(e) {
    e.preventDefault(); 
  
    var target = $(this).attr("href");
  
    if ($(target).hasClass("active-section")) {
      return; 
    }
  
    if (target === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0 
        },
        500
      );
    } else {
      var offset = $(target).offset().top - 40; 
  
      $("html, body").animate(
        {
          scrollTop: offset
        },
        500
      );
    }
  
    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
  });

});

