const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let answer = prompt("list item")
  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHTML++
  list.append(Object.assign(document.createElement('li'), {textContent: answer, id: itemCountSpan.innerHTML}));
  document.getElementById(itemCountSpan.innerHTML).classList.add("todo-container")
}
