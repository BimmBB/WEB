const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskValue = taskInput.value;
    
    if (taskValue.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(taskText);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(listItem);
    listItem.appendChild(taskText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
    
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function editTask(taskElement) {
    const newTask = prompt('Edit your task:', taskElement.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskElement.textContent = newTask;
    }
}

function deleteTask(taskElement) {
    taskElement.remove();
}
