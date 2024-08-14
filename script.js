/* Variables and consts */
const taskNew = document.getElementById("taskNew");
const taskDelete = document.getElementById("taskDelete");
const taskEdit = document.getElementById("taskEdit");
const taskID = document.getElementById("taskID");
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const navDropdown = document.getElementById("navbarNavDropdown");
const taskDescription = document.getElementById("taskDescription");
const submitTask = document.getElementById("submitTask");
const list = document.getElementById("list");
let counterListPadding = 0;

/* Event Listeners */
submitTask.addEventListener("click", addTask);
taskDelete.addEventListener("click", dlete);
taskEdit.addEventListener("click", edit);

/* Functions */
function addTask(){
    var taskName = taskID.value;
    var taskContent = taskDescription.value;
    var newTask = document.createElement("li");
    var taskDes = document.createElement("p");
    var createName = document.createElement("h5");
    var content = document.createTextNode(taskContent);
    var name = document.createTextNode(taskName);

		if (taskName == "" || taskContent == "") {
			taskID.setAttribute("placeholder", "Set a valid Task Name");
			taskDescription.setAttribute("placeholder", "Set a valid Task Description");
            alert("Invalid task name and/or description, try again");
			return false;
        } else{
            newTask.appendChild(createName);
            newTask.setAttribute("id", taskName);
            createName.appendChild(name);
            newTask.appendChild(taskDes);
            taskDes.appendChild(content);
            list.appendChild(newTask);
            counterListPadding += 10;
            counterListFunction();
        };
    taskID.value = "";
    taskDescription.value = "";

};

function counterListFunction(){
    list.style.paddingBottom = `${counterListPadding}px`;
};

function dlete(){
    var deleteThis = prompt("What task do you want to delete?");
    var idTask = document.getElementById(deleteThis); 
    if (idTask){
        list.removeChild(idTask);
    } else {
        alert("Sorry, task not found. Try again!");
    };
};

function edit(){
    alert("Click on the element you want to edit");
    list.addEventListener("click", function(event){
        let targetElement = event.target;
        if (targetElement.tagName === 'H5' || targetElement.tagName === 'P') {
            let originalText = targetElement.textContent;
            let inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = originalText;
            targetElement.replaceWith(inputField);
            inputField.focus();
            inputField.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    let newElement = document.createElement(targetElement.tagName.toLowerCase());
                    newElement.textContent = inputField.value;
                    inputField.replaceWith(newElement);
                };
            });
            inputField.addEventListener('blur', function() {
                let newElement = document.createElement(targetElement.tagName.toLowerCase());
                newElement.textContent = inputField.value;
                inputField.replaceWith(newElement);
            });
        };
    });
};
