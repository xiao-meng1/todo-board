import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

const addNewList = () => {
    const newListIndex = model.createList("Sample list", "blue");
    const newList = model.getList(newListIndex);
    view.createList(newList);
}

export {init, addNewList};