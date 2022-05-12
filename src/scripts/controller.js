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
}

const addNewListPopup = (e) => {
    view.createAddNewListPopup();
};

const exitPopup = (e) => {
    view.removePopup();
    view.removeBoardBlocker();
    return false;
};

export {init, addNewList, addNewListPopup, exitPopup};