async function loadConfig() {
    var date = new Date();
    var time = date.getHours();

    var themes = await import("./theme.mjs");

    if (time >= 18 && time <= 6) {
        themes.setDarkTheme();
    } else {
        themes.setLightTheme();
    }
}

loadConfig();