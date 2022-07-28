var solidIcon = "fa-solid fa-star";
var regularIcon = "fa-regular fa-star";
var isImportant = false;

function toggleImportant() {
	if (!isImportant) {
		$('#isImportant').removeClass(regularIcon).css("color", "#ffd166").addClass(solidIcon);
		// $('#isImportant').css("color", "#ffd166");
		// $('#isImportant').addClass(solidIcon);
		console.log("Task was made important")
		isImportant = true;
	}
	else {
		$('#isImportant').removeClass(solidIcon).css("color", "#2f3e46").addClass(regularIcon);
		// $('#isImportant').css("color", "#2f3e46");
		// $('#isImportant').addClass(regularIcon);
		console.log("Task was un-important")
		isImportant = false;
	}
};

function saveTask() {
	console.log('Task Saved');

	let title = $('#txtTitle').val();
	let description = $('#txtDescription').val();
	let color = $('#selColor').val();
	let dueDate = $('#selDate').val();
	let status = $('#selStatus').val();
	let location = $('#txtLocation').val();
	let notification = $('#chkNotification').prop("checked");

	let newTask = new Task(isImportant, title, description, color, dueDate, status, location, notification);
	// NOW WE NEED TO SAVE OR "POST" IT TO THE SERVER DATABASE
	// console.log(newTask)
	$.ajax({
		type: "POST",
		url: "https://fsdiapi.azurewebsites.net/api/tasks/",
		data: JSON.stringify(newTask), //USING JSON.stringify() function for PAYLOAD newTask
		contentType: "application/json",
		success: function (res) {
			console.log("The server responded with JSON: ", res);
			displayTask(newTask);
		},
		error: function (errorDetails) {
			console.log("Error: ", errorDetails)
		}
	});

	clearInputs();
};
function displayStar(bool) {
	if (bool === true) {
		return '<i class="fa-solid fa-star" style="color:yellow"></i>';
	}
	else {
		return "";
	}
}
function displayTask(task) {
	console.log('Task Displayed');
	let syntax = `

	<div class="tsk " style="border: ${task.color} solid 2px">

		<div class="important-container>
			<h5><i class="fa-regular fa-star"></i></h5>
			<p>${displayStar(task.important)}</p>
		</div>
		<div class="title-desc-container">
			<h5>${task.title}</h5>
			<p>${task.desc}</p>
		</div>
		<div class="location-container">
			<h5><i class="fa-solid fa-location-dot"></i></h5>
			<p>${task.location}</p>
		</div>
		<div class="due-date-container">
			<h5><i class="fa-solid fa-clock"></i></h5>
			<p>Due on: ${task.dueDate}</p>
		</div>
		<div class="status-container">
			<h5><i class="fa-solid fa-circle-info"></i></h5>
			<p>${task.status}</p>
		</div>

	</div>
	`;

	$("#pendingTasks").append(syntax);
};

function testRequest() {
	$.ajax({
		type: "GET",
		url: "https://fsdiapi.azurewebsites.net/",
		success: function (res) {
			console.log("The server responded with: ", res);
		},
		error: function (errorDetails) {
			console.log("Error: ", errorDetails)
		}
	})
};

function fetchTasks() {
	// GET  https://fsdiapi.azurewebsites.net/api/tasks
	$.ajax({
		type: "GET",
		url: "https://fsdiapi.azurewebsites.net/api/tasks",
		success: function (res) {
			let task = JSON.parse(res);
			console.log("The server responded with: ", task);
			for (let i = 0; i < task.length; i++) {
				if (task[i].name === "Timothy Thomas") {
					displayTask(task[i]);
				}
			}
		},
		error: function (errorDetails) {
			console.log("Error retrieving tasks: ", errorDetails)
		}
	})
	// console log the response from the server
};
function clearInputs() {
	$(forReset)[0].reset()
}
function init() {

	// Assign events
	$('#isImportant').click(toggleImportant);
	$('#btnSave').click(saveTask);

	// Load initial data
	fetchTasks();

}

window.onload = init;
