import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

const addNewList = (listTitle, listColor) => {
    const newListIndex = model.createList(listTitle, listColor);
    const newList = model.getList(newListIndex);
    view.createList(newList);
};

const editList = (index, name, color) => {
    model.editList(index, name, color);
    view.editList(index, name, color);
};

const exitPopup = () => {
    view.removePopup();
    view.removeBoardBlocker();
};

const getListTitle = (listIndex) => {
    const list = model.getList(listIndex);
    return list.name;
};

const getListColor = (listIndex) => {
    const list = model.getList(listIndex);
    return list.color;
};

export {init, addNewList, editList, exitPopup, getListTitle, getListColor};