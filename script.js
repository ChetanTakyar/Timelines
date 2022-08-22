const theme = document.querySelector("#theme-type");
theme.href = localStorage.getItem("theme");

function DarkModeToggle() {
	if (theme.getAttribute("href") == "lightmode.css") {
		theme.href = "darkmode.css";
		localStorage.setItem("theme", "darkmode.css")
	} else {
		theme.href = "lightmode.css";
		localStorage.setItem("theme", "lightmode.css")
	}
}


window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}