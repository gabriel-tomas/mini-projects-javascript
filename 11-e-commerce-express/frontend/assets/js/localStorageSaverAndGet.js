function localStorageSave(key, value) {
    if(typeof key !== "string") throw("Key must be string");
    if(key.length < 3) throw("Key must be greater than 2");

    value = JSON.stringify(value);
    localStorage.setItem(key, value);
    /* console.log("Key:", key, "| value", value, "| > saved ");
    console.log(`Type of key: ${typeof key}, Type of value ${typeof value}`); */
}

function localStorageGet(key) {
    if(typeof key !== "string") throw("Key must be string");
    if(key.length < 3) throw("Key must be greater than 2");

    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

function localStorageRemove(key) {
    if(typeof key !== "string") throw("Key must be string");

    localStorage.removeItem(key);
}

export {localStorageSave, localStorageGet, localStorageRemove};