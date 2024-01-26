var lastScrollLocation = 0;

$(window).scroll(function() {
  if ($(window).scrollTop() > lastScrollLocation) {
    lastScrollLocation = $(window).scrollTop();
    console.log("next section");
  } else {
    lastScrollLocation = $(window).scrollTop();
    console.log("previous section");
  }
});

function redirectToExample() {
    window.location.href = "https://www.wheelworks.com.ar";
}