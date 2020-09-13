function DarkModeToggle() {
	const theme = document.querySelector("#theme-type");
	if (theme.getAttribute("href") == "lightmode.css") {
		theme.href = "darkmode.css";
	} else {
		theme.href = "lightmode.css";
	}
}
