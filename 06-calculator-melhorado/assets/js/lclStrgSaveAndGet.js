function saveModeInStorage(key, mode) {
    mode = JSON.stringify(mode);
    localStorage.setItem(key, mode);
}

function getLocalStorageKey(key) {
    let mode = localStorage.getItem(key);
    return JSON.parse(mode);
}