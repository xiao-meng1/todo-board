import * as controller from "./controller.js"

let _board;

const init = () => {
    if (_storageAvailable("localStorage") && _boardInStorage()) {
        _board = localStorage.getItem("board");
    }
    else {
        _board = [];
    }
}

const _storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
        let x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

const _boardInStorage = () => {
    return (localStorage.getItem("board") ? true : false);
}

export {init};