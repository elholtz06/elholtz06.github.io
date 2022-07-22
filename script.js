/* .js files add interaction to your website */
var inputBtn = document.getElementById("inputBtn");
var displayMessage = document.getElementById("message");

inputBtn.addEventListener("click", displayHS);

function displayHS() {
  var inputHS = document.getElementById("inputHS").value;
  var inputState = document.getElementById("inputState").value;
  displayMessage.innerHTML = "Congrats! "+inputHS+" in "+inputState+" is now on the waiting list.";

}
