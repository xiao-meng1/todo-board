import * as controller from "./controller.js"

let _board;

const initializeBoard = () => {
    if (_storageAvailable("localStorage") && _boardInStorage()) {
        _board = localStorage.getItem("board");
    }
    else {
        _board = [];
    }
};

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
};

const _boardInStorage = () => {
    return (localStorage.getItem("board") ? true : false);
};

const CreateList = (name, color) => {
    const content = [];
    const updateName = (newName) => {name = newName};
    const updateColor = (newColor) => {color = newColor};

    return {name, color, content, updateName, updateColor};
};

const addList = (list) => {_board.push(list)};

export {initializeBoard,
        CreateList,
        addList,
};