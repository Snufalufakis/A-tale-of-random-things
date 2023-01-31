import axios from 'axios'; // importing axios from axios

const url = 'https://jsonplaceholder.typicode.com/todos/1' //fetch url

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // response data properties
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
  The Todo with ID ${ID} has been successfully
  The ${title} has been successfully
  An don't forget to update the ${completed} status}`)
})