import { folders } from "./logic";

// Render the form for adding a task
function renderTaskForm(folders) {
  const body = document.querySelector("body");

  // Form element
  const form = document.createElement("form");
  form.setAttribute("id", "task-form");

  // Title label
  const taskTitleLabel = document.createElement("label");
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleLabel.textContent = "Title";

  // Title input
  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "task-title");
  taskTitleInput.setAttribute("placeholder", "What needs to be done?");
  taskTitleInput.required = true;

  // Due date label
  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.setAttribute("for", "task-due-date");
  taskDueDateLabel.textContent = "Due Date";

  // Due date input
  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.setAttribute("type", "date");
  taskDueDateInput.setAttribute("id", "task-due-date");
  taskDueDateInput.required = true;

  // Priority label
  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.setAttribute("for", "task-priority");
  taskPriorityLabel.textContent = "Priority";

  // Priority select
  const taskPrioritySelect = document.createElement("select");
  taskPrioritySelect.setAttribute("id", "task-priority");

  // Priority options
  const priorityOptions = ["Low", "Medium", "High"];
  for (let i = 0; i < priorityOptions.length; i++) {
    const taskPriorityOption = document.createElement("option");
    taskPriorityOption.setAttribute("value", priorityOptions[i].toLowerCase());
    taskPriorityOption.textContent = priorityOptions[i];
    taskPrioritySelect.appendChild(taskPriorityOption);
  }

  // Folder label
  const taskFolderLabel = document.createElement("label");
  taskFolderLabel.setAttribute("for", "task-folder");
  taskFolderLabel.textContent = "Folder";

  // Folder select
  const taskFolderSelect = document.createElement("select");
  taskFolderSelect.setAttribute("id", "task-folder");

  // Folder options
  for (let i = 0; i < folders.length; i++) {
    const taskFolderOption = document.createElement("option");
    taskFolderOption.setAttribute("value", folders[i].name.toLowerCase());
    taskFolderOption.textContent = folders[i].name;
    taskFolderSelect.appendChild(taskFolderOption);
  }

  // Description label
  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.setAttribute("for", "task-description");
  taskDescriptionLabel.setAttribute("class", "task-description");
  taskDescriptionLabel.textContent = "Description";

  // Description textarea
  const taskDescriptionTextarea = document.createElement("textarea");
  taskDescriptionTextarea.setAttribute("id", "task-description");
  taskDescriptionTextarea.setAttribute(
    "placeholder",
    "Add details about this task..."
  );

  // Add button
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("class", "add");
  addButton.textContent = "ADD";

  body.appendChild(form);
  form.appendChild(taskTitleLabel);
  form.appendChild(taskDueDateLabel);
  form.appendChild(taskPriorityLabel);
  form.appendChild(taskFolderLabel);
  form.appendChild(taskDescriptionLabel);
  form.appendChild(addButton);
  taskTitleLabel.appendChild(taskTitleInput);
  taskDueDateLabel.appendChild(taskDueDateInput);
  taskPriorityLabel.appendChild(taskPrioritySelect);
  taskFolderLabel.appendChild(taskFolderSelect);
  taskDescriptionLabel.appendChild(taskDescriptionTextarea);
}

// Render the form for adding a folder
function renderFolderForm() {
  const body = document.querySelector("body");

  // Form element
  const form = document.createElement("form");
  form.setAttribute("id", "folder-form");

  // Name label
  const folderNameLabel = document.createElement("label");
  folderNameLabel.setAttribute("for", "folder-name");
  folderNameLabel.textContent = "Name";

  // Name input
  const folderNameInput = document.createElement("input");
  folderNameInput.setAttribute("type", "text");
  folderNameInput.setAttribute("id", "folder-name");
  folderNameInput.setAttribute(
    "placeholder",
    "What should we name the folder?"
  );
  folderNameInput.required = true;

  // Add button
  const addButton = document.createElement("button");
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("class", "add");
  addButton.textContent = "ADD";

  body.appendChild(form);
  form.appendChild(folderNameLabel);
  form.appendChild(addButton);
  folderNameLabel.appendChild(folderNameInput);
}

// Add click listener to the task form button
function taskFormButton() {
  const button = document.querySelector("#task-form-button");

  button.addEventListener("click", function () {
    // If the folder form is present, remove it
    if (document.querySelector("form#folder-form")) {
      document.querySelector("form#folder-form").remove();
    }
    // Or if the task form is already present, do nothing
    else if (document.querySelector("#task-form")) {
      return;
    }
    renderTaskForm(folders);
  });
}

// Add click listener to the folder form button
function folderFormButton() {
  const button = document.querySelector("#folder-form-button");

  button.addEventListener("click", function () {
    // If the task form is present, remove it
    if (document.querySelector("form#task-form")) {
      document.querySelector("form#task-form").remove();
    }
    // Or if the folder form is already present, do nothing
    else if (document.querySelector("#folder-form")) {
      return;
    }
    renderFolderForm();
  });
}

export { taskFormButton, folderFormButton };
