"use strict";


// Card-First  Start
function cardFirst() {
    var newElement = document.createElement("li");
    newElement.id = "list-item";
    var newText = document.createTextNode("Button is clicked");
    newElement.appendChild(newText);
    var element = document.getElementById("card-first");
    element.appendChild(newElement);
}

function remove() {
    var parent = document.getElementById("card-first");
    var child = document.getElementById("list-item");
    parent.removeChild(child);
}

function changeColor() {
    document.getElementById("cardone").classList.add("card-first");
}
// Card-First END


// Card-Second  Start
function cardSecond() {
    var newElement = document.createElement("li");
    newElement.id = "list-item";
    var newText = document.createTextNode("Button is clicked");
    newElement.appendChild(newText);
    var element = document.getElementById("card-second");
    element.appendChild(newElement)
}

function removeSecond() {
    var parent = document.getElementById("card-second");
    var child = document.getElementById("list-item");
    parent.removeChild(child);
}

function changeColorSecond() {
    document.getElementById("secondCard").classList.add("card-second");
}

// Card-Second  END



// Card-Third  Start
function cardThird() {
    var newElement = document.createElement("li");
    newElement.id = "list-item";
    var newText = document.createTextNode("Button is clicked");
    newElement.appendChild(newText);
    var element = document.getElementById("card-third");
    element.appendChild(newElement)
}

function removeThird() {
    var parent = document.getElementById("card-third");
    var child = document.getElementById("list-item");
    parent.removeChild(child);
}

function changeColorThird() {
    document.getElementById("thirdCard").classList.add("card-third");
}
// Card-Third  END

