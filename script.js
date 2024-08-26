document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('enter a task');
     }
    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'edit';
    editBtn.className = 'edit';
    editBtn.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            li.firstChild.textContent = newTaskText.trim();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}






