const changeThemeHTML = document.querySelector("#changeTheme");

const isDark = () => JSON.parse(localStorage.getItem("isDark"));
document.body.classList.toggle("darkmode", isDark());

changeThemeHTML.addEventListener("click", () => {
    if (isDark()) {
        localStorage.setItem("isDark", JSON.stringify(false));
        document.body.classList.remove("darkmode");
    } else {
        localStorage.setItem("isDark", JSON.stringify(true));
        document.body.classList.add("darkmode");

    }

});