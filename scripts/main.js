var importantIconClass = "fa-solid fa-star";
var nonImportantIconClass = "fa-regular fa-star"  ;
var isImportant = false;

function toggleImportant() {
	console.log('Icon clicked');
	if (!isImportant) {
		$('#iImportant').removeClass(nonImportantIconClass);
		$('#iImportant').css("color", "#ffd166");
		$('#iImportant').addClass(importantIconClass);
		isImportant=true;
	}
	else{
		$('#iImportant').removeClass(importantIconClass);
		$('#iImportant').css("color", "#2f3e46");
		$('#iImportant').addClass(nonImportantIconClass);
		isImportant=false;
	}
}

function init() {
	console.log("Task manager page!!");

	$('#iImportant').click(toggleImportant);
}

window.onload = init;
