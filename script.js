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