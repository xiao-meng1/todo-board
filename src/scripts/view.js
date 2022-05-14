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

    addNewList.addEventListener("click", createAddNewListPopup);

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
    const listTitle = document.createElement("div");
    const newTaskContainer = document.createElement("div");
    const plusIconContainer = document.createElement("div");
    const plusIcon = document.createElement("img");
    const addNewTask = document.createElement("div");

    list.dataset.key = listObject.key;
    list.classList = "list";
    list.style.borderLeftColor = listObject.color;
    listTitle.textContent = listObject.title;
    listTitle.classList = "list-title";
    newTaskContainer.classList = "new-task-container";
    plusIconContainer.classList = "plusIconContainer";
    addNewTask.textContent = "Add new task";
    addNewTask.classList = "add-new-task";
    plusIcon.classList = "icon";
    plusIcon.src = "../src/icons/add_black_24dp.svg"

    listTitle.addEventListener("click", createEditListPopup);
    newTaskContainer.addEventListener("click", createAddNewTaskPopup);

    list.appendChild(listTitle);
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
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");

    popupContainer.id = "add-new-list";
    popupTitle.placeholder = "Enter list title";
    
    popupContent.appendChild(colorPickerFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createEditListPopup = (e) => {
    const listKey = e.srcElement.parentNode.dataset.key;
    const listColor = controller.getListColor(listKey);
    const colorPickerFieldset = createColorPickerFieldset(listColor);
    const popup = createPopupTemplate();
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");
    const deleteButton = document.createElement("div");

    popupContainer.id = "edit-list";
    popupContainer.dataset.listKey = listKey;
    popupTitle.value = controller.getListTitle(listKey);
    popupTitle.placeholder = "Enter list title";
    deleteButton.textContent = "Delete list";
    deleteButton.classList = "button delete-list";

    deleteButton.addEventListener("click", () => {
        controller.exitPopup();
        controller.deleteList(listKey);
    });

    popupContent.appendChild(colorPickerFieldset);
    popupContent.appendChild(deleteButton);

    addPopup(popup);
    addBoardBlocker();
};

const createPopupTemplate = () => {
    const popupTemplate = document.createDocumentFragment();
    const popupContainer = document.createElement("div");
    const iconContainer = document.createElement("div");
    const icon = document.createElement("img");
    const popupContent = document.createElement("div");
    const popupTitle = document.createElement("input");

    popupContainer.classList = "popup-container";
    iconContainer.classList = "icon-container";
    icon.classList = "icon";
    icon.src = "../src/icons/close_black_24dp.svg";
    popupContent.classList = "popup-content";
    popupTitle.type = "text";
    popupTitle.classList = "popup-title";

    icon.addEventListener("click", controller.exitPopup);

    popupTemplate.appendChild(popupContainer);
    popupContainer.appendChild(iconContainer);
    popupContainer.appendChild(popupContent);
    iconContainer.appendChild(icon);
    popupContent.appendChild(popupTitle);

    return popupTemplate;
};

const createColorPickerFieldset = (selectedButton = "black") => {
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
    const buttons = {
        red: redButton,
        green: greenButton,
        blue: blueButton,
        orange: orangeButton,
        teal: tealButton,
        lightgrey: lightgreyButton,
        grey: greyButton,
        darkgrey: darkgreyButton,
        black: blackButton,
        magenta: magentaButton,
    };

    for (const button in buttons) {
        buttons[button].type = "radio";
        buttons[button].name = "color";
        buttons[button].id = button;
        buttons[button].value = button;
    }

    buttons[selectedButton].setAttribute("checked", "");
    legend.textContent = "List Color";
    colorButtons.classList = "color-buttons";

    fieldset.appendChild(legend);
    fieldset.appendChild(colorButtons);

    for (const button in buttons) {
        colorButtons.appendChild(buttons[button]);
    }
    
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

    boardBlocker.addEventListener("click", boardBlockerClick);
    board.appendChild(boardBlocker);
};

const boardBlockerClick = (e) => {
    const popupContainer = document.querySelector(".popup-container");
    const popupType = popupContainer.id;
    const popupTitle = document.querySelector(".popup-title");
    let selectedColorButton;
    let selectedDateTime;
    let selectedPriorityButton;

    if (!(popupFilled())) {
        controller.exitPopup(e);

        return;
    }
    
    switch(popupType) {
        case "add-new-list":
            selectedColorButton = 
                document.querySelector("input[name='color']:checked");
                
            controller.addNewList(
                popupTitle.value,
                selectedColorButton.value
            );
            break;
        case "edit-list":
            selectedColorButton = 
                document.querySelector("input[name='color']:checked");

            controller.editList(
                popupContainer.dataset.listKey,
                popupTitle.value,
                selectedColorButton.value
            );
            break;
        case "add-new-task":
            selectedDateTime =
                document.querySelector("input[name='datetime']");
            selectedPriorityButton =
                document.querySelector("input[name='priority']:checked");

            controller.addNewTask(
                popupContainer.dataset.listKey,
                popupTitle.value,
                selectedDateTime.value,
                selectedPriorityButton.value
            );

    }

    controller.exitPopup();

    return;
};

const removeBoardBlocker = () => {
    const board = document.querySelector(".board");
    const boardBlocker = document.querySelector(".board-blocker");
    
    board.style.opacity = 1;
    boardBlocker.remove();
};

const popupFilled = () => {
    const popupTitle = document.querySelector(".popup-title");
    
    return (popupTitle.value === "") ? false : true;
};

const editList = (key, title, color) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    const listTitle = list.querySelector(".list-title");

    list.style.borderLeftColor = color;
    listTitle.textContent = title;
};

const deleteList = (key) => {
    const list = document.querySelector(`.list[data-key='${key}']`)
    list.remove();
};

const createAddNewTaskPopup = (e) => {
    const popup = createPopupTemplate();
    const popupContainer = popup.querySelector(".popup-container");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popup.querySelector("input.popup-title");
    const dateTimeFieldset = createDateTimeFieldset();
    const priorityFieldset = createPriorityFieldset();
    const listKey = e.currentTarget.parentNode.dataset.key;

    popupContainer.id = "add-new-task";
    popupContainer.dataset.listKey = listKey;
    popupTitle.placeholder = "Enter task title";

    popupContent.appendChild(dateTimeFieldset);
    popupContent.appendChild(priorityFieldset);

    addPopup(popup);
    addBoardBlocker();
};

const createDateTimeFieldset = () => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const input = document.createElement("input");

    legend.textContent = "Date/time";
    input.type = "datetime-local";
    input.name = "datetime";
    input.classList = "datetime-picker";

    fieldset.appendChild(legend);
    fieldset.appendChild(input);

    return fieldset;
};

const createPriorityFieldset = (selectedButton = "medium") => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const priorityButtons = document.createElement("div");
    const radioContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const lowRadio = document.createElement("input");
    const mediumRadio = document.createElement("input");
    const highRadio = document.createElement("input");
    const lowText = document.createElement("div");
    const mediumText = document.createElement("div");
    const highText = document.createElement("div");
    const buttons = {
        low: lowRadio,
        medium: mediumRadio,
        high: highRadio,
    };

    for (const button in buttons) {
        buttons[button].type = "radio";
        buttons[button].name = "priority";
        buttons[button].classList = button;
        buttons[button].value = button;
    }

    buttons[selectedButton].setAttribute("checked", "");
    legend.textContent = "Priority";
    priorityButtons.classList = "priority-buttons";
    radioContainer.classList = "radio container";
    textContainer.classList = "text container";
    lowText.textContent = "Low";
    lowText.classList = "low";
    mediumText.textContent = "Med";
    mediumText.classList = "medium";
    highText.textContent = "High";
    highText.classList = "high";

    fieldset.appendChild(legend);
    fieldset.appendChild(priorityButtons);
    priorityButtons.appendChild(radioContainer);
    priorityButtons.appendChild(textContainer);
    radioContainer.appendChild(lowRadio);
    radioContainer.appendChild(mediumRadio);
    radioContainer.appendChild(highRadio);
    textContainer.appendChild(lowText);
    textContainer.appendChild(mediumText);
    textContainer.appendChild(highText);

    return fieldset;
};

export {initializeTemplate,
        createList,
        removePopup,
        removeBoardBlocker,
        editList,
        deleteList,
};