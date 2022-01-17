const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const todos = [];

const renderTodos = todoArr => {
  if(todoArr.length) {
      return todoArr.forEach( element => {
        const todo_container = document.createElement('div');
        const todo_title = document.createElement('h3');
        const todo_description = document.createElement('p');
        const deleteIco = document.createElement('img');
        const likeBulanova = document.createElement('img');
        const like = document.createElement('span');
        likeBulanova.src = 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-like-essentials-prettycons-lineal-color-prettycons.png';
        deleteIco.src = 'https://img.icons8.com/color/48/000000/filled-trash.png';
        todo_container.className = 'content';
          console.log('renderTodos', element);
        todo_title.innerText = element.title;
        todo_description.innerText = element.description;

        likeBulanova.onclick = () => {
          let counter = 0;
          counter++;

          like.innerText = counter;
          console.log(counter);
        }

        deleteIco.onclick = () => {
          deleteIco.closest('div').remove();
        console.log('delete', element);
        }

        todo_container.append(todo_title, todo_description, deleteIco, likeBulanova, like);
        todos_container.append(todo_container);
      });
  }
};

const initApplication = () => {
  if(!localStorage.getItem('todos')) {
    return localStorage.setItem('todos', JSON.stringify([]))
  }

  return renderTodos(JSON.parse(localStorage.getItem('todos')));
}

submit_todo_btn.onclick = () => {
  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(JSON.parse(localStorage.getItem('todos')));
  todo_title_input.value = '';
  todo_description_text_area.value = '';
  getInputs();
}

const getInputs = () => {
  if(todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled',)
  } else {
  submit_todo_btn.setAttribute('disabled', true);
  }
}

todo_title_input.oninput = () => {
  getInputs()
};
todo_description_text_area.oninput = () => {
  getInputs()
};

initApplication();
