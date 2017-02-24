Backendless.initApp("BBAC1668-2789-1F0B-FF0C-12AEDFFE7200","84EDADBA-8D4A-56F0-FFA8-179F5DC6E100","v1");


function Tasks() {
    
    this.Task = "";
}

$(document).on("pageshow","#page1", onPageShow);
$(document).on("click", "#addTaskButton", onAddTask);


function onAddTask(){
    var taskVal = $("#textIn").val();
    console.log("task has been clicked with the following value = " + taskVal);
    var newTask = new Tasks();
    newTask.Task = taskVal;
    
    
    Backendless.Persistence.of( Tasks ).save(newTask);
    onPageShow();
    
}

function onPageShow() {
	console.log("page shown");
	
   //run query
	var tasks = Backendless.Persistence.of( Tasks ).find().data;
	updateList(tasks);	
    
}

function getItems()
{
    return;
}

function updateList(tasks) {
	
	//wipe the list clean
	$('#taskList').empty();
	
    console.log(tasks[0].Task);
    
	//add each tasks
	for (var i = 0; i < tasks.length; i++) { 
      	$('#taskList').append("<label><li><input type='checkbox'>" + tasks[i].Task +"</li></label>");
    }
	
	//refresh the listview
	$('#taskList').listview('refresh');
}

  function saveSuccess(task){
	  console.log("Task saved: " + task.get('Task')); 
	  
  }

	
function error(error) {
	alert("Error: " + error.code + " " + error.message);
}


$(document).ready(function(){

console.log("DOM ready");
    
 });

