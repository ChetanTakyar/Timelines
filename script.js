function DarkModeToggle(){
	const toggleButton = document.querySelector("dark-mode-toggle");
	const theme = document.querySelector("#theme-type");

	if(theme.getAttribute("href") == "lightmode.css"){
		theme.href = "darkmode.css";
	} else{
		theme.href = "lightmode.css";
	}
}