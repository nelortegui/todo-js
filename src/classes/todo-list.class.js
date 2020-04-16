//import { Todo } from ".";
import { Todo } from './todo.class';


export class TodoList {

        constructor (){
               
            this.cargarLocalStorage();
        }

        nuevoTodo (todo) {
            this.todos.push (todo);
            this.guardarLocalStorage();
        }

        eliminarTodo (id){
            this.todos = this.todos.filter(todo => todo.id != id);
            this.guardarLocalStorage();

        }

        marcarCompletado (id) {

            for (const todo of this.todos) {

                if (todo.id == id) {  //doble igual porque el id será string en un sitio y número en otro

                        todo.completado = !todo.completado; //cambia por el opuesto
                        this.guardarLocalStorage(); //guarda los datos al completar
                        break;      // salimos porque no habrá otro id igual

                }
            }
        }

        eliminarCompletados () {

            this.todos = this.todos.filter( todo => !todo.completado); // devuelve los elementos que no están completados
            
        }
        
        guardarLocalStorage(){          //guardado de datos
            localStorage.setItem('todo', JSON.stringify(this.todos) );  //JSON.srtingify convierte lo que sea a string
        }

        cargarLocalStorage(){

            this.todos  = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo'))  //JSON.parse devuelve string a su tipo
                        : [] ;

            //this.todos = this.todos.map(obj => Todo.fromJson (obj)); //se simplifica al de abajo
            this.todos = this.todos.map( Todo.fromJson );
        }

}