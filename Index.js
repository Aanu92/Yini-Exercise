const Root = document.documentElement;
let Theme = localStorage.getItem("Yini Theme") || "White";

if (Theme === "White") {
    Root.classList.remove("Dark-Mode");
} else if (Theme === "Black") {
    Root.classList.add("Dark-Mode");
} else {
    Root.classList.remove("Dark-Mode");
}

function ToggleTheme() {
    Theme = Theme === "White" ? "Black" : "White";
    Root.classList.toggle("Dark-Mode");
    localStorage.setItem("Yini Theme", Theme)
}