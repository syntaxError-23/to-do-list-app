//DOM variables created
const todoButton = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const bodyTag = document.getElementsByTagName('body')[0];
const todoList = document.getElementById('todo-list');
const doneTodo = document.getElementById('checked-todo');
let clicks = 0;

//function to create and present to do items

 const submitTodo = () => {

    console.log('clicks: ', clicks);
    //create list item elements
    const listItemArea = document.createElement('div');
    listItemArea.classname = 'list-item-area'
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(todoInput.value);
    const cab = document.createElement('div'); //div to allow todo and buttons to be seperated via flexbox
    cab.classList.add('check-and-button');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');
    
    //event listener to delete to do 
    deleteButton.addEventListener('click', function(e){
        listItem.parentNode.removeChild(listItem);
    })
    const checkbox = document.createElement('input');
    checkbox.classList.add('unchanged');
    checkbox.type = 'checkbox';
    // checkbox.id = 'checkbox'

    //append li to ul and checkbox & button to li
    todoList.appendChild(listItem);
    listItem.appendChild(listItemText);
    listItem.appendChild(cab);
    cab.appendChild(checkbox);
    cab.appendChild(deleteButton);
    todoList.appendChild(listItem);

    //if statement to check if checkbox is checked and assign class based on status *should be AFTER inital appending*
    //if checked, todo is removed from initial ul and appended to new div inside the ul with a class of 'checked-todo' (see HTML). 
    //this div is styled differenly to indicate completed todo
    
    checkbox.addEventListener('click', function(e){
        if(checkbox.checked){
            listItem.classList = 'completed'
            checkbox.className = ('checked');
        }
    //if unchecked after initially being checked, todo is returned to it's default state (appended to ul directly instead of div)
        else if(checkbox.checked === false){
            listItem.classList = 'incomplete'
            checkbox.className = ('unchecked');
        }
    })
   
    todoInput.value = '';  //clears the input after all is said and done
    clicks++;
}

//submitTodo function executed on button click
todoButton.onclick = submitTodo;

//event listner to detect if enter key was pressed at initial input
todoInput.addEventListener('keydown', function(e){

    if(e.key === 'Enter'){
        submitTodo();
    }
})



