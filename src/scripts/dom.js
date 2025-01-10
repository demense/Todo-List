function renderTaskForm(folders) {
  const body = document.querySelector("body");

  const form = document.createElement("form");

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
  addButton.setAttribute("id", "add");
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

export { renderTaskForm };
