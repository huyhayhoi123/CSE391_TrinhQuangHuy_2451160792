const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');
const countText = document.querySelector('#countText');
const clearCompletedBtn = document.querySelector('#clearCompleted');
const filterButtons = document.querySelectorAll('.filter-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateCount() {
    const left = todos.filter(todo => !todo.completed).length;
    countText.textContent = `${left} items left`;
}

function getFilteredTodos() {
    if (currentFilter === 'active') return todos.filter(todo => !todo.completed);
    if (currentFilter === 'completed') return todos.filter(todo => todo.completed);
    return todos;
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) li.classList.add('completed');
    li.dataset.id = todo.id;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;
    span.title = 'Click để hoàn thành, double-click để sửa';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.type = 'button';
    deleteBtn.textContent = '❌';
    deleteBtn.ariaLabel = 'Xóa todo';

    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
}

function renderTodos() {
    list.textContent = '';
    getFilteredTodos().forEach(todo => list.appendChild(createTodoElement(todo)));
    updateCount();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    todos.push({ id: Date.now(), text, completed: false });
    input.value = '';
    input.focus();
    saveTodos();
    renderTodos();
});

list.addEventListener('click', (event) => {
    const li = event.target.closest('.todo-item');
    if (!li) return;

    const id = Number(li.dataset.id);

    if (event.target.classList.contains('delete-btn')) {
        todos = todos.filter(todo => todo.id !== id);
    } else if (event.target.classList.contains('todo-text')) {
        todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    }

    saveTodos();
    renderTodos();
});

list.addEventListener('dblclick', (event) => {
    if (!event.target.classList.contains('todo-text')) return;
    const li = event.target.closest('.todo-item');
    const id = Number(li.dataset.id);
    const oldText = event.target.textContent;

    const editInput = document.createElement('input');
    editInput.className = 'edit-input';
    editInput.value = oldText;
    event.target.replaceWith(editInput);
    editInput.focus();

    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const newText = editInput.value.trim();
            if (newText) {
                todos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
                saveTodos();
            }
            renderTodos();
        }
        if (e.key === 'Escape') renderTodos();
    });
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        renderTodos();
    });
});

clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
});

renderTodos();
