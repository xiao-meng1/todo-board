let board = {};
let lowestAvailableListKey = 0;
let lowestAvailableTaskKey = 0;

const initializeBoard = () => {
    if (storageAvailable("localStorage") && boardInStorage()) {
        board = JSON.parse(localStorage.getItem("board"));
        lowestAvailableListKey = JSON.parse(
            localStorage.getItem("lowestAvailableListKey"));
        lowestAvailableTaskKey = JSON.parse(
            localStorage.getItem("lowestAvailableTaskKey"));
    } 
    else if (storageAvailable("localStorage")) {
        createExampleBoard();
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

const updateLocalStorage = () => {
    if (storageAvailable("localStorage")) {
        localStorage.setItem("board", JSON.stringify(board));
        localStorage.setItem("lowestAvailableListKey", 
            JSON.stringify(lowestAvailableListKey));
        localStorage.setItem("lowestAvailableTaskKey", 
            JSON.stringify(lowestAvailableTaskKey));
    }
};

const boardInStorage = () => {
    return (localStorage.getItem("board") ? true : false);
};

const getBoard = () => Object.assign({}, board);

const List = (title, color) => {
    const content = {};
    const key = lowestAvailableListKey.toString();

    lowestAvailableListKey++;

    return {title,
            color,
            key,
            content,
    };
};

const createList = (title, color) => {
    const newList = List(title, color);
    addList(newList.key, newList);
    
    return newList.key;
};

const editList = (key, title, color) => {
    board[key].title = title;
    board[key].color = color;
    updateLocalStorage();
};

const addList = (key, list) => {
    board[key] = list;
    updateLocalStorage();
};

const getList = (key) => Object.assign({}, board[key]);

const deleteList = (key) => {
    delete board[key];
    updateLocalStorage();
};

const Task = (listKey, title, datetime, priority) => {
    const key = lowestAvailableTaskKey.toString();

    lowestAvailableTaskKey++;

    return {listKey,
            title,
            key,
            datetime,
            priority,
    };
};

const createTask = (listKey, title, datetime, priority) => {
    const newTask = Task(listKey, title, datetime, priority);
    addTask(newTask);

    return newTask.key;
};

const addTask = (task) => {
    board[task.listKey].content[task.key] = task;
    updateLocalStorage();
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
    updateLocalStorage();
};

const deleteTask = (listKey, taskKey) => {
    delete board[listKey].content[taskKey];
    updateLocalStorage();
};

const createExampleBoard = () => {
    const listKey0 = createList("Sales", "orange");
    const taskKey00 = createTask(listKey0, "Do sales proposal", 
        "2024-05-05T16:00", "high");
    const taskKey01 = createTask(listKey0, "Create campaign emails", 
        "2024-05-08T09:00", "medium");
    const taskKey02 = createTask(listKey0, "Agree list of contacts", 
        "2024-06-08T10:00", "medium");
    const taskKey03 = createTask(listKey0, "Follow up on calls", 
        "2024-06-08T14:00", "low");
    const taskKey04 = createTask(listKey0, "Create video interpreter", 
        "2024-06-08T15:35", "low");
    const taskKey05 = createTask(listKey0, "Record monthly sales", 
        "2024-06-08T17:00", "medium");
    const taskKey06 = createTask(listKey0, "Meet Q2 sales goals", 
        "", "high");

    const listKey1 = createList("Video Content", "blue");
    const taskKey10 = createTask(listKey1, "Send quote to Bob", 
        "2024-06-08T15:35", "medium");  
    const taskKey11 = createTask(listKey1, "Send quote to Bill", 
        "2024-06-08T15:45", "medium");
    const taskKey12 = createTask(listKey1, "Brainstorm video ideas", 
        "", "low");
    const taskKey13 = createTask(listKey1, "Edit video backlog", 
        "", "low");

    const listKey2 = createList("Marketing", "teal");
    const taskKey20 = createTask(listKey2, "Meet with marketing lead", 
        "2024-06-08T15:35", "high");  
}

export {initializeBoard,
        getBoard,
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