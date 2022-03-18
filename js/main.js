'use strict';

const inputTodo = document.getElementById('input-todo');
const addTaskTarget = document.getElementById('addTask-target');
const todos = [];

const onClickAdd = () => {
  const todo = {
    todoComment: inputTodo.value,
    status: '作業中',
  };

  todos.push(todo);

  createTodo(inputTodo);
  inputTodo.value = '';
};

const createTodo = (text) => {
  addTaskTarget.textContent = '';
  
  todos.forEach((todo,number) => {
    const todoRow = document.createElement('tr');
    addTaskTarget.appendChild(todoRow);
    
    const todoId = document.createElement('td');
    const todoComment = document.createElement('td');
    const todoStatus = document.createElement('td');
    const todoAction= document.createElement('td');
    
    todoId.textContent = number;
    todoComment.textContent = todo.todoComment;
    todoRow.appendChild(todoId);
    todoRow.appendChild(todoComment);
    todoRow.appendChild(todoStatus);
    todoRow.appendChild(todoAction);
    
    todoStatus.appendChild(createStatusButton(todo));
    todoAction.appendChild(createDeleteButton(todoRow));
    
    console.log(todoStatus);
    
    
  });
};

document
.getElementById('add-btn')
.addEventListener('click', () => onClickAdd());

const createStatusButton = (todo) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = todo.status;
  statusButton.addEventListener('click', () => {
    if (todo.status === '作業中') {
      todo.status = '完了';
    } else {
      todo.status = '作業中';
    };
    createTodo(todo);
  });
  return statusButton;

  console.log(statusButton);
};


const createDeleteButton = (todoRow) => {
  const index = todoRow.rowIndex - 1;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    todos.splice(index, 1);
    createTodo();
  });
  return deleteButton
};