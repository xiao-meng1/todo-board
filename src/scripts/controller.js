import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

const addNewList = () => {
    const listFromModel = model.createList("Sample list", "blue");
    model.addList(listFromModel);
    const listFromView = view.createList(listFromModel);
    view.addList(listFromView);
}

export {init, addNewList};