var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", myFunction);

function myFunction() {
	var noOfCurrentElement = document.getElementsByTagName("li").length;
	var element = document.createElement("li");
	element.innerHTML = "item " + noOfCurrentElement;
	list.appendChild(element);
};


