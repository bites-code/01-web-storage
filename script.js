const key = "NAME";
const userInput = document.getElementById("input");
const button = document.getElementById("button");
const nameDiv = document.getElementById("name");


// Handle the button onclick event
button.addEventListener("click", onClick);

// If web storage is not supported, don't do anything:
if (typeof(Storage) !== "undefined") {
    // try and get the saved name from storage
    let savedName = getFromWebStorage();

    // if a name has been saved, carry on
    if (savedName !== null)
        nameDiv.innerHTML = `Welcome back, ${savedName}`;
} else {
    console.log("Web storage is not supported.");
}

function onClick() {
    // early out if the user doesn't enter anything
    if (userInput.value !== "") {
        // Set the value of the empty div to welcome the user by name
        nameDiv.innerHTML = `Welcome, ${userInput.value}`;
        saveToWebStorage(userInput.value);
    }
}

function saveToWebStorage(value) {
    localStorage.setItem(key, value);
}

function getFromWebStorage() {
    return localStorage.getItem(key);
}