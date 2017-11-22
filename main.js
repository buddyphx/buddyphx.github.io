 function sayThatWasEasy() {
 var thatWasEasy = new Audio("that_was_easy");
 thatWasEasy.play();
}

 $("#easy").on("click", sayThatWasEasy);
