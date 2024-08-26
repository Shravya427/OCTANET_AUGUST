document.getElementById('add-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    // Create task card
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    // Create task text element
    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;

    // Create action buttons container
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskCard.remove();
    });

    // Append everything
    taskActions.appendChild(deleteButton);
    taskCard.appendChild(taskTextElement);
    taskCard.appendChild(taskActions);
    taskList.appendChild(taskCard);
}
