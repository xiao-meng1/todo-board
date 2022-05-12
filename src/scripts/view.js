import * as controller from "./controller.js"

const initializeTemplate = () => {
    const template = createTemplate();
    addTemplate(template);
}

const createTemplate = () => {
    const template = document.createDocumentFragment();
    const header = document.createElement("header");
    const board = document.createElement("div");
    const addNewList = document.createElement("div");

    board.classList = "board";
    header.textContent = "Todo Board";
    addNewList.classList = "add-new-list";
    addNewList.textContent = "+ Add new list";

    addNewList.addEventListener("click", controller.addNewListPopup);

    template.appendChild(header);
    template.appendChild(board);
    board.appendChild(addNewList);

    return template;
};

const addTemplate = (template) => {
    const body = document.querySelector("body");
    body.appendChild(template);
};

const createList = (listObject) => {
    const list = document.createElement("div");
    const listName = document.createElement("div");
    const newTaskContainer = document.createElement("div");
    const plusIconContainer = document.createElement("div");
    const plusIcon = document.createElement("img");
    const addNewTask = document.createElement("div");

    list.dataset.index = listObject.index;
    list.classList = "list";
    list.style.borderLeftColor = listObject.color;
    listName.textContent = listObject.name;
    listName.classList = "list-name";
    newTaskContainer.classList = "new-task-container";
    plusIconContainer.classList = "plusIconContainer";
    addNewTask.textContent = "Add new task";
    addNewTask.classList = "add-new-task";
    plusIcon.classList = "icon";
    plusIcon.src = "../src/icons/add_black_24dp.svg"

    list.appendChild(listName);
    list.appendChild(newTaskContainer);
    newTaskContainer.appendChild(plusIconContainer);
    newTaskContainer.appendChild(addNewTask);
    plusIconContainer.appendChild(plusIcon);

    addList(list);
};

const addList = (list) => {
    const board = document.querySelector(".board");
    const addNewListButton = document.querySelector(".add-new-list");
    board.insertBefore(list, addNewListButton);
};

const createAddNewListPopup = () => {
    const popup = createPopupTemplate();
    const colorPickerFieldset = createColorPickerFieldset();
    const popupContent = popup.querySelector(".popup-content");
    const listTitle = popup.querySelector("input#list-title");

    listTitle.placeholder = "Enter List Title";
    
    popupContent.appendChild(colorPickerFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createPopupTemplate = () => {
    const popupTemplate = document.createDocumentFragment();
    const popupContainer = document.createElement("div");
    const iconContainer = document.createElement("div");
    const icon = document.createElement("img");
    const popupContent = document.createElement("div");
    const listTitle = document.createElement("input");

    popupContainer.classList = "popup-container";
    iconContainer.classList = "icon-container";
    icon.classList = "icon";
    icon.src = "../src/icons/close_black_24dp.svg";
    popupContent.classList = "popup-content";
    listTitle.type = "text";
    listTitle.id = "list-title";

    popupTemplate.appendChild(popupContainer);
    popupContainer.appendChild(iconContainer);
    popupContainer.appendChild(popupContent);
    iconContainer.appendChild(icon);
    popupContent.appendChild(listTitle);

    return popupTemplate;
};

const createColorPickerFieldset = () => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const colorButtons = document.createElement("div");
    const redButton = document.createElement("input");
    const greenButton = document.createElement("input");
    const blueButton = document.createElement("input");
    const orangeButton = document.createElement("input");
    const tealButton = document.createElement("input");
    const lightgreyButton = document.createElement("input");
    const greyButton = document.createElement("input");
    const darkgreyButton = document.createElement("input");
    const blackButton = document.createElement("input");
    const magentaButton = document.createElement("input");

    legend.textContent = "List Color";
    colorButtons.classList = "color-buttons";
    redButton.type = "radio";
    redButton.name = "color";
    redButton.id = "red";
    redButton.value = "red";
    greenButton.type = "radio";
    greenButton.name = "color";
    greenButton.id = "green";
    greenButton.value = "green";
    blueButton.type = "radio";
    blueButton.name = "color";
    blueButton.id = "blue";
    blueButton.value = "blue";
    orangeButton.type = "radio";
    orangeButton.name = "color";
    orangeButton.id = "orange";
    orangeButton.value = "orange";
    tealButton.type = "radio";
    tealButton.name = "color";
    tealButton.id = "teal";
    tealButton.value = "teal";
    lightgreyButton.type = "radio";
    lightgreyButton.name = "color";
    lightgreyButton.id = "lightgrey";
    lightgreyButton.value = "lightgrey";
    greyButton.type = "radio";
    greyButton.name = "color";
    greyButton.id = "grey";
    greyButton.value = "grey";
    darkgreyButton.type = "radio";
    darkgreyButton.name = "color";
    darkgreyButton.id = "darkgrey";
    darkgreyButton.value = "darkgrey";
    blackButton.type = "radio";
    blackButton.name = "color";
    blackButton.id = "black";
    blackButton.value = "black";
    blackButton.setAttribute("checked", "");
    magentaButton.type = "radio";
    magentaButton.name = "color";
    magentaButton.id = "magenta";
    magentaButton.value = "magenta";

    fieldset.appendChild(legend);
    fieldset.appendChild(colorButtons);
    colorButtons.appendChild(redButton);
    colorButtons.appendChild(greenButton);
    colorButtons.appendChild(blueButton);
    colorButtons.appendChild(orangeButton);
    colorButtons.appendChild(tealButton);
    colorButtons.appendChild(lightgreyButton);
    colorButtons.appendChild(greyButton);
    colorButtons.appendChild(darkgreyButton);
    colorButtons.appendChild(blackButton);
    colorButtons.appendChild(magentaButton);

    return fieldset;
};

const addPopup = (popup) => {
    const body = document.querySelector("body");
    body.appendChild(popup);
};

const removePopup = () => {
    const popup = document.querySelector(".popup-container");
    popup.remove();
};

const addBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.createElement("div");

    board.style.opacity = 0.4;
    boardBlocker.classList = "board-blocker";

    boardBlocker.addEventListener("click", controller.exitPopup);

    board.appendChild(boardBlocker);
};

const removeBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.querySelector(".board-blocker");
    
    board.style.opacity = 1;
    boardBlocker.remove();
};

export {initializeTemplate,
        createList,
        createAddNewListPopup,
        removePopup,
        removeBoardBlocker,
};