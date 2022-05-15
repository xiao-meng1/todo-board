import * as controller from "./controller.js"

let board;
let lowestAvailableListKey = 0;
let lowestAvailableTaskKey = 0;

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

const List = (title, color) => {
    const content = {};
    const key = lowestAvailableListKey.toString();
    const updateTitle = (newTitle) => {title = newTitle};
    const updateColor = (newColor) => {color = newColor};

    lowestAvailableListKey++;

    return {title,
            color,
            key,
            content,
            updateTitle,
            updateColor};
};

const createList = (title, color) => {
    const newList = List(title, color);
    addList(newList.key, newList);
    
    return newList.key;
};

const editList = (key, title, color) => {
    board[key].title = title;
    board[key].color = color;
};

const addList = (key, list) => {
    board[key] = list;
};

const getList = (key) => Object.assign({}, board[key]);

const deleteList = (key) => {
    delete board[key];
};

const Task = (listKey, title, datetime, priority) => {
    const updateTitle = (newTitle) => {title = newTitle};
    const updateDatetime = (newDatetime) => {datetime = newDatetime};
    const key = lowestAvailableTaskKey.toString();

    lowestAvailableTaskKey++;

    return {listKey,
            title,
            key,
            datetime,
            priority,
            updateTitle,
            updateDatetime,
    };
};

const createTask = (listKey, title, datetime, priority) => {
    const newTask = Task(listKey, title, datetime, priority);
    addTask(newTask);

    return newTask.key;
};

const addTask = (task) => {
    board[task.listKey].content[task.key] = task;
};

const getTask = (listKey, key) => {
    const task = board[listKey].content[key];

    return Object.assign({}, task);
};

const getTaskTitle = (listKey, key) => {
    const taskTitle = board[listKey].content[key].title;
    return taskTitle;
};

const getTaskDatetime = (listKey, key) => {
    const taskDatetime = board[listKey].content[key].datetime;
    return taskDatetime;
};

const getTaskPriority = (listKey, key) => {
    const taskPriority = board[listKey].content[key].priority;
    return taskPriority;
};

const editTask = (listKey, taskKey, title, datetime, priority) => {
    board[listKey].content[taskKey].title = title;
    board[listKey].content[taskKey].datetime = datetime;
    board[listKey].content[taskKey].priority = priority;
};

const deleteTask = (listKey, taskKey) => {
    delete board[listKey].content[taskKey];
};

export {initializeBoard,
        createList,
        editList,
        getList,
        deleteList,
        createTask,
        getTask,
        getTaskTitle,
        getTaskDatetime,
        getTaskPriority,
        editTask,
        deleteTask,
};