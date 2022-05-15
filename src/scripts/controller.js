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
    const newTask = model.getTask(listKey, newTaskKey);

    if (!view.dateContainerExists(listKey, newTask.datetime)) {
        view.createDateContainer(listKey, newTask.datetime);
    }

    view.createTask(listKey, newTask);
};

const getTaskTitle = (listKey, taskKey) => {
    const taskTitle = model.getTaskTitle(listKey, taskKey);
    return taskTitle;
};

const getTaskDatetime = (listKey, taskKey) => {
    const taskDatetime = model.getTaskDatetime(listKey, taskKey);
    return taskDatetime;
};

const getTaskPriority = (listKey, taskKey) => {
    const taskPriority = model.getTaskPriority(listKey, taskKey);
    return taskPriority;
};

const editTask = (listKey, taskKey, title, datetime, priority) => {
    let task;
    let oldDateContainer

    model.editTask(listKey, taskKey, title, datetime, priority);
    task = model.getTask(listKey, taskKey);
    oldDateContainer = view.getDateContainer(listKey, taskKey);
    view.deleteTask(listKey, taskKey);

    if (view.dateContainerIsEmpty(oldDateContainer)) {
        view.deleteDateContainer(oldDateContainer);
    }

    if (!view.dateContainerExists(listKey, task.datetime)) {
        view.createDateContainer(listKey, task.datetime);
    }

    view.createTask(listKey, task);
};

const deleteTask = (listKey, taskKey) => {
    const oldDateContainer = view.getDateContainer(listKey, taskKey);

    model.deleteTask(listKey, taskKey);
    view.deleteTask(listKey, taskKey);

    if (view.dateContainerIsEmpty(oldDateContainer)) {
        view.deleteDateContainer(oldDateContainer);
    }
};

export {init,
        addNewList,
        editList,
        exitPopup,
        getListTitle,
        getListColor,
        deleteList,
        addNewTask,
        getTaskTitle,
        getTaskDatetime,
        getTaskPriority,
        editTask,
        deleteTask,
};