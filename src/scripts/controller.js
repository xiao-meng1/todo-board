import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

const addNewList = (listTitle, listColor) => {
    const newListKey = model.createList(listTitle, listColor);
    const newList = model.getList(newListKey);
    view.createList(newList);
};

const editList = (key, name, color) => {
    model.editList(key, name, color);
    view.editList(key, name, color);
};

const exitPopup = () => {
    view.removePopup();
    view.removeBoardBlocker();
};

const getListTitle = (listKey) => {
    const list = model.getList(listKey);
    return list.name;
};

const getListColor = (listKey) => {
    const list = model.getList(listKey);
    return list.color;
};

const deleteList = (listKey) => {
    model.deleteList(listKey);
    view.deleteList(listKey);
};

export {init,
        addNewList,
        editList,
        exitPopup,
        getListTitle,
        getListColor,
        deleteList,
};