import * as controller from "./controller.js"

let board;
let lowestAvailableListKey = 0;

const initializeBoard = () => {
    if (storageAvailable("localStorage") && boardInStorage()) {
        board = localStorage.getItem("board");
    }
    else {
        board = {};
    }
};

const storageAvailable = (type) => {
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

const boardInStorage = () => {
    return (localStorage.getItem("board") ? true : false);
};

const List = (name, color) => {
    const content = [];
    const key = lowestAvailableListKey.toString();
    const updateName = (newName) => {name = newName};
    const updateColor = (newColor) => {color = newColor};

    lowestAvailableListKey++;

    return {name,
            color,
            key,
            content,
            updateName,
            updateColor};
};

const createList = (name, color) => {
    const newList = List(name, color);
    addList(newList.key, newList);
    return newList.key;
};

const editList = (key, name, color) => {
    board[key].name = name;
    board[key].color = color;
    console.log(board)
};

const addList = (key, list) => {board[key] = list};

const getList = (key) => Object.assign({}, board[key]);

const deleteList = (key) => {
    delete board[key];
    console.log(board)
};

export {initializeBoard,
        createList,
        editList,
        getList,
        deleteList,
};