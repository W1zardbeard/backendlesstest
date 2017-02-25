Backendless.initApp("BBAC1668-2789-1F0B-FF0C-12AEDFFE7200","84EDADBA-8D4A-56F0-FFA8-179F5DC6E100","v1");

//create task object
function Tasks() {
    
    this.Task = "";
}
//dataQuery and page size code taken from: https://backendless.com/feature-17-data-paging-or-how-to-efficiently-load-large-data-sets-in-a-mobile-app/
var dataQuery = new Backendless.DataQuery();
//set page size (amount of objects retrived)
var PAGESIZE = 80;
dataQuery.options = {
    pageSize: PAGESIZE
};

//set event listeners 
$(document).on("pageshow","#page1", onPageShow);
$(document).on("click", "#addTaskButton", onAddTask);

//add task function
function onAddTask(){
    //gathering text input data
    var taskVal = $("#textIn").val();
    //logging to console
    console.log("task has been clicked with the following value = " + taskVal);
    //creating new task
    var newTask = new Tasks();
    newTask.Task = taskVal;
    
    //checkingif text is not blank
    if(taskVal != "")
     {
    Backendless.Persistence.of( Tasks ).save(newTask);
    onPageShow();
     }
    //alert if blank
    else{alert("Task cannot be empty")}
    
}


//ran every time page is shown
function onPageShow() {
    //log
	console.log("page shown");
	
   //run query
	var tasks = Backendless.Persistence.of( Tasks ).find(dataQuery).data;
	updateList(tasks);	
    
}

function getItems()
{
    return;
}

//update list with data from table
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

//sucess function
  function saveSuccess(task){
	  console.log("Task saved: " + task.get('Task')); 
	  
  }

//error handling
function error(error) {
	alert("Error: " + error.code + " " + error.message);
}








//document ready function
$(document).ready(function(){

console.log("DOM ready");
    
    

    
    
    
    
    
    
    
    
    
 });

