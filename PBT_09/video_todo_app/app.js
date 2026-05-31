const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;

    const li = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = input.value;

    text.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(text);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
    input.focus();
});
