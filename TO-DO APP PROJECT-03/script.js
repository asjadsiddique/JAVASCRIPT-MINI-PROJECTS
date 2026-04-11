const input = document.getElementById('input-todo')
const addBtn = document.getElementById('add-Btn')
const list = document.getElementById('todo-list')


const saved = localStorage.getItem('todos')
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
    localStorage.setItem('todos' , JSON.stringify(todos))
}


function createTodoNode(todo,index) {
    const list = document.createElement('li')
    list.classList.add('content')


    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = !!todo.completed
    checkbox.classList.add('check')
    checkbox.addEventListener('click',()=>{
        todo.completed = checkbox.checked
         
      textSpan.style.textDecoration = todo.completed ? 'line-through' : '';
        saveTodos()
    })

    const textSpan = document.createElement('span')
    textSpan.textContent = todo.text;
    textSpan.classList.add('inner')
    textSpan.style.margin = '15px 15px'
    textSpan.addEventListener('dblclick',(e)=>{
        const newText = prompt('Edit-todo', todo.text)
        if (todo.text != null) {
            todo.text = newText.trim()
            textSpan.textContent = todo.text
            saveTodos()
        }
        if (todo.completed) {
            textSpan.style.textDecoration = 'line-through'
        }
    })

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.classList.add('delete')
    delBtn.addEventListener('click',()=>{
        todos.splice(index,1)
        saveTodos()
        render()
    })

    list.appendChild(checkbox)
    list.appendChild(textSpan)
    list.appendChild(delBtn)
    return list
}




function render() {
    list.innerText = '';
    todos.forEach((todo,index) => {
        const node = createTodoNode(todo,index)
        list.appendChild(node)
    });
}


function addTodos() {
    const text = input.value.trim()
      if (!text) {
        return
    }
   todos.push({text:text,completed:false})
    input.value = '';
  
    saveTodos()
    render()
}


input.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter') {
        addTodos()
    }
})
addBtn.addEventListener('click',addTodos)


render()