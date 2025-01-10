// format function to format the due date
import { format } from "date-fns";

// Tasks are objects containing a task properities and methods
class Task {
  constructor(title, description, dueDate, priority, folder) {
    (this.title = title),
      (this.description = description),
      // Formated date ex. Jan 01, 2025
      (this.dueDate = format(new Date(dueDate), "MMM dd, yyyy")),
      (this.priority = priority),
      (this.isComplete = false),
      (this.folder = folder);
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  changeDescription(newDesc) {
    this.description = newDesc;
  }

  changeDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  toggleCompletion() {
    if (this.isComplete === false) {
      this.isComplete = true;
    } else if (this.isComplete === true) {
      this.isComplete = false;
    }
  }

  changefolder(newFolder) {
    this.folder = newFolder;
  }
}

function createTask(title, description, dueDate, priority, folder) {
  const task = new Task(title, description, dueDate, priority, folder);

  // Push created task to selected folder
  pushTaskToFolder(task, folder);

  return task;
}

function pushTaskToFolder(task, folder) {
  const folderIndex = folders.findIndex((obj) => obj.name === folder);

  folders.at(folderIndex).content.push(todo);
}

// Folders are objects which will store tasks in their content array
class Folder {
  constructor(name) {
    this.name = name;
    this.content = [];
  }
  
  changeName(newName) {
    this.name = newName;
  }
}

// folders array contains all the created folders which  contains tasks:
// folders -> aFolderObject -> aTodoObject
let folders = [];

function createFolder(name) {
  let folder = new Folder(name);

  folders.push(folder);

  return folder;
}

export { Task, createTask, Folder, createFolder, folders };
