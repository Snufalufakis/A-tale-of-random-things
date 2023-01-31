import axios from 'axios'; // importing axios from axios

const url = 'https://jsonplaceholder.typicode.com/todos/1' //fetch url

interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

axios.get(url).then(response => {
  // response data properties
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean ) => { 
  // assigns the todo log (tree) to be displayed in a certain order.
console.log(`
The Todo with ID ${id} has been successfully
The ${title} has been successfully
An don't forget to update the ${completed} status}`);
};