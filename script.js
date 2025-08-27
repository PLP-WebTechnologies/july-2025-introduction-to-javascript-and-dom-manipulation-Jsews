
// Variables & Conditionals
let age = 18; // example variable
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Capture user input & greet
document.getElementById("greet-btn").addEventListener("click", function() {
  let name = document.getElementById("username").value;

  if (name.trim() === "") {
    document.getElementById("result").innerText = "Please enter a valid name.";
  } else {
    document.getElementById("result").innerText = `Hello, ${name}! 👋`;
  }
});

// ----------------------------


// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total price: $" + calculateTotal(10, 3)); // Example usage

// Function 2: Format a greeting string
function formatGreeting(name) {
  return `Welcome to JavaScript, ${name}! `;
}
console.log(formatGreeting("Student"));


// ----------------------------

// For loop: Print numbers 1–5
let numbers = "";
for (let i = 1; i <= 5; i++) {
  numbers += i + " ";
}
document.getElementById("loop-output").innerText = "Counting: " + numbers;

// While loop: Countdown
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}


// ----------------------------

// Example 1: Change content
document.getElementById("welcome-text").innerText = "Welcome to my JS Assignment!";

// Example 2: Toggle message visibility
document.getElementById("toggle-btn").addEventListener("click", function() {
  let message = document.getElementById("toggle-text");
  message.classList.toggle("hidden");
});

// Example 3: Dynamically create an element
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added using JavaScript! ";
document.body.appendChild(newPara);