import "./styles.css";
import * as controller from "./scripts/controller.js";

controller.init();

//test function calls



//Planning
//Index
//  controller.init();
//Model
//  board (obj) -> list (object: title (str), color (str), content (obj),
//                      lowestAvailableTaskKey (num),
//                      updateTitle(), updateColor(),
//      content (obj) -> key: task (object: title (str), dateTime (str), 
//                              priority (str),
//                              updateName(), updateDateTime(), updatePriority(),
//  inititializeBoard(), createList(), createTask(), addList(), addTask(), getList(), getTask(), updateList(),
//      updateTask(), deleteList(), deleteTask()
//
//View
//  newListPopup (nodeList)
//  newTaskPopup (nodelist)
//  editListPopup (nodeList)
//  editTaskPopup (nodeList)
//  initializeTemplate(), createTemplate(), addTemplate(),
//  createAddNewListPopup(), createAddNewTaskPopup(), createEditListPopup(),
//  createEditTaskPopup(), addPopup(), removePopup(), addBoardBlocker(),
//  removeBoardBlocker(), createList(), 
//  createTask(), addList(), addTask()
//  
//Controller
//  init(), addNewListPopup(e), addNewTaskPopup(e), editListPopup(e),
//  editTaskPopup(e), exitPopup(e), 
//  addNewList(e), addNewTask(e), editList(e), editTask(e),
//  deleteList(e), deleteAllCompletedLists(e), deleteTask(e)