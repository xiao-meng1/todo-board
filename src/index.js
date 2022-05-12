import "./styles.css";
import * as controller from "./scripts/controller.js";

//controller.init();

//test function calls
//controller.addNewList();

//Planning
//Index
//  controller.init();
//Model
//  board (array) -> list (object: name (str), color (str), content (array), 
//                      updateName(), updateColor(),
//                      delete(), deleteAllCompletedTasks())
//      content (array) -> task (object: name (str), dateTime (str), 
//                              priority (str), complete (boolean), 
//                              updateName(), updateDateTime(), updatePriority(), updateComplete(),
//                              delete())
//  inititializeBoard(), createList(), createTask(), addList(), addTask(), getList(), getTask(), updateList(),
//      updateTask(), deleteList(), deleteTask()
//
//View
//  newListPopup (nodeList)
//  newTaskPopup (nodelist)
//  editListPopup (nodeList)
//  editTaskPopup (nodeList)
//  initializeTemplate(), createTemplate(), addTemplate() addPopup(), removePopup(), createList(), 
//  createTask(), addList(), addTask()
//  
//Controller
//  init(), addNewListPopup(e), addNewTaskPopup(e), editListPopup(e),
//  editTaskPopup(e), exitPopup(e), 
//  addNewList(e), addNewTask(e), editList(e), editTask(e),
//  deleteList(e), deleteAllCompletedLists(e), deleteTask(e)