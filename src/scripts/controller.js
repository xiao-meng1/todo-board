import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

const addNewList = (title, color) => {
    const newListKey = model.createList(title, color);
    const newList = model.getList(newListKey);
    view.createList(newList);
};

const editList = (key, title, color) => {
    model.editList(key, title, color);
    view.editList(key, title, color);
};

const exitPopup = () => {
    view.removePopup();
    view.removeBoardBlocker();
};

const getListTitle = (listKey) => {
    const list = model.getList(listKey);
    return list.title;
};

const getListColor = (listKey) => {
    const list = model.getList(listKey);
    return list.color;
};

const deleteList = (listKey) => {
    model.deleteList(listKey);
    view.deleteList(listKey);
};

const addNewTask = (listKey, title, datetime, priority) => {
    const newTaskKey = model.createTask(listKey, title, datetime, priority);
    // const newTask = model.getTask(listKey, newTaskKey);
    // view.createTask(listKey, newTask);
};

export {init,
        addNewList,
        editList,
        exitPopup,
        getListTitle,
        getListColor,
        deleteList,
        addNewTask,
};