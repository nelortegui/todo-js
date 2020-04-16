import './styles.css';

import {Todo, TodoList} from './classes'; //busca index.js por defecto
import {crearTodoHtml} from './js/componentes.js';

export const todoList  = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml( todo ));  //equivalente al de abajo 
todoList.todos.forEach(crearTodoHtml);       //debido a que en ambos el argumento es el mismo, todo

console.log( 'todos' , todoList.todos);