(() => {
    if (getLocalStorageKey("darkMode")) {
        darkMode();
        insideCircleChangeLeft(true);
    } else {
        whiteMode();
        insideCircleChangeLeft(false);
    }
})();