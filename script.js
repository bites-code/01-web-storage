const userInput = document.getElementById("input");
const button = document.getElementById("button");
const nameDiv = document.getElementById("name");


// Handle the button onclick event
button.addEventListener("click", onClick);

function onClick() {
    // early out if the user doesn't enter anything
    if (userInput.value !== "") {
        // Set the value of the empty div to welcome the user by name
        nameDiv.innerHTML = `Welcome, ${userInput.value}`;
    }
}