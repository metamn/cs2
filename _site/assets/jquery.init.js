$(document).ready(function() {

  // Show the story of a portfolio item
  $('.portfolio .story').click(function() {
    $('body').addClass('story');
  });
  
});


// Scrolling to a div
// - if no div then scroll to top
function scrollTo(div) {
  (div.length) ? $("html, body").animate({ scrollTop: $(div).offset().top }, "slow") : $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}


// The window onload script
// - here we put all scripts which must run after the page is completelly loaded
$(window).load(function() {
  // Make portfolio images as background-image to enable scrolling
  $(".thumbs article").each(function() {
    var image = $(this).find('img').attr("src");
    $(this).css("background-image", "url(" + image + ")");
  });
});





// Scroll portfolio images on the background
var scrollSpeed = 70;    
// set the default position
var current = 0;
// set the direction
var direction = 'h';

function bgscroll() {
  // 1 pixel row at a time
  current -= 1;
  // move the background with backgrond-position css properties
  $('.thumbs article').css("backgroundPosition", (direction === 'h') ? current + "px 0" : "0 " + current + "px");
}

// Calls the scrolling function repeatedly
setInterval(bgscroll, scrollSpeed);    
