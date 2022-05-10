import "./styles.css";
import * as controller from "./scripts/controller.js";

controller.init();

//Planning
//Index
//  controller.init();
//Model
//  board (array) -> list (object: name (num), color (str), content (array), 
//                      updateName(), updateColor(),
//                      delete(), deleteAllCompletedTasks())
//      content (array) -> task (object: name (str), dateTime (str), 
//                              priority (str), complete (boolean), 
//                              updateName(), updateDateTime(), updatePriority(), updateComplete(),
//                              delete())
//  init(), createList(), createTask(), addList(), addTask(), getList(), getTask(), updateList(),
//      updateTask(), deleteList(), deleteTask()
//
//View
//  DOMBodyModel (nodelist)
//  newListPopup (nodeList)
//  newTaskPopup (nodelist)
//  editListPopup (nodeList)
//  editTaskPopup (nodeList)
//  init(), renderDOMBody(), addPopup(), removePopup(), createList(), 
//  createTask(), addList(), addTask()
//  
//Controller
//  init(), addNewListPopup(e), addNewTaskPopup(e), exitPopup(e), 
//  createNewList(e), createNewTask(e), updateList(e), updateTask(e),
//  deleteList(e), deleteAllCompletedLists(e), deleteTask(e)