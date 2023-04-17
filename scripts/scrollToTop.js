let scrollButton = document.getElementById("scrollToTop");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
    console.log("You are scrolling?");
  } else scrollButton.style.display = "none";
}

function topFunction() {
  // Works on Safari
  document.body.scrollTop = 0;

  // Works on Chrome, Firefox, IE and Opera
  document.documentElement.scrollTop = 0;
}