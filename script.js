// 🎯 Part 1: Variables & Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are eligible to vote";
  } else if (age > 0) {
    result.textContent = "You are not eligible to vote";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}

// ❤️ Part 2: Functions
function calculateCart(items) {
  // Function that takes an array of prices and returns the sum
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i];
  }
  return total;
}

function formatCurrency(amount) {
  // Function to format number into currency
  return "$" + amount.toFixed(2);
}

// 🔁 Part 3: Loops
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list

  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
}

function calculateTotal() {
  let prices = [10.99, 5.50, 3.25]; // sample cart items
  let total = calculateCart(prices); // using custom function
  document.getElementById("cartTotal").textContent =
    "Cart Total: " + formatCurrency(total);
}

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function () {
  let msg = document.getElementById("toggleMessage");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});
