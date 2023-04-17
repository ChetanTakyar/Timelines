const theme = document.querySelector("#theme-type");

if (localStorage.getItem("theme") == null) {
	theme.href = "../styles/lightmode.css"
} else theme.href = localStorage.getItem("theme");

function DarkModeToggle() {
	if (theme.getAttribute("href") == "../styles/lightmode.css") {
		theme.href = "../styles/darkmode.css";
		localStorage.setItem("theme", "../styles/darkmode.css")
	} else {
		theme.href = "../styles/lightmode.css";
		localStorage.setItem("theme", "../styles/lightmode.css")
	}
}