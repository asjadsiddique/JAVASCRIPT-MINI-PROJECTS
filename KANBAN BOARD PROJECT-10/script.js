const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
const tasks = document.querySelectorAll(".task")
const togglemodalBtn = document.querySelector("#toggle-modal")
const modal = document.querySelector(".modal")
const background = document .querySelector(".bg")
const addtaskButton = document.querySelector("#add-task-btn") 
let dragElement = null;
let tasksData = {}
let columns = [todo,progress,done]
tasks.forEach(task=>{
    
    task.addEventListener("drag",()=>{
      dragElement = task
    })

})

if (localStorage.getItem("tasks")) {
    
    const data = JSON.parse(localStorage.getItem("tasks"))

    for (const cols in data) {
        const column = document.querySelector(`#${cols}`)
        data[cols].forEach(task=>{
              
                  addTask(task.title,task.desc,column)
        })

        updateTaskCount()
    }
}

function addTask(title,desc,column) {
    const div = document.createElement("div")
    div.classList.add("task")
    div.setAttribute("draggable",true)
    div.innerHTML = `
                  <h3>${title}</h3>
                  <p>${desc}</p>
                  <button class = "delete">Delete</button>
    `
     div.addEventListener("drag",()=>{
          dragElement = div
       
     })

     column.appendChild(div)

     const deleteButton = div.querySelector(".delete")
     deleteButton.addEventListener("click",()=>{
        div.remove()
        updateTaskCount()
     })
     return div;

}

function updateTaskCount() {

    columns.forEach(col =>{

       const tasks = col.querySelectorAll(".task")
       const count = col.querySelector("#count")
      
         
       tasksData[col.id] = Array.from(tasks).map(t=>{
          return {
            title : t.querySelector("h3").innerText,
            desc : t.querySelector("p").innerText
          }
       })
       localStorage.setItem("tasks",JSON.stringify(tasksData))
            count.innerText = tasks.length;
       
    })
}


function addDragEvents(column) {
    
    column.addEventListener('dragenter',(e)=>{
        e.preventDefault()
        column.classList.add("hover-over")
    })
    column.addEventListener('dragleave',(e)=>{
        e.preventDefault()
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })
    column.addEventListener("drop",(e)=>{
        e.preventDefault()
        console.log("drop")
        column.classList.remove("hover-over")
        column.appendChild(dragElement)
           updateTaskCount()


    })
}

addDragEvents(todo)
addDragEvents(progress)
addDragEvents(done)

togglemodalBtn.addEventListener("click",()=>{
 
  modal.classList.toggle("active")
})

background.addEventListener("click",()=>{
  modal.classList.remove("active")

})

addtaskButton.addEventListener("click",()=>{
    
      const Tasktitle = document.querySelector("input").value
      const Taskdesc = document.querySelector("textarea").value

       addTask(Tasktitle,Taskdesc,todo)

       modal.classList.remove("active")
         
        document.querySelector("input").value = "";
        document.querySelector("textarea").value = "";
           updateTaskCount()


})


