// Get current time in a specific time zone
function getTime(timezone) {
  const now = new Date();
  const options = {timeZone: timezone};
  return now.toLocaleTimeString('en-US', options);
}

// Update the clock for each time zone
function updateClocks() {
  document.getElementById('et').innerHTML = getTime('America/New_York');
  document.getElementById('ct').innerHTML = getTime('America/Chicago');
  document.getElementById('mt').innerHTML = getTime('America/Denver');
  document.getElementById('pt').innerHTML = getTime('America/Los_Angeles');
}

// Update the clocks every second
setInterval(updateClocks, 1000);

// Select all the cards and arrows
let cards = document.querySelectorAll(".card");
let leftArrow = document.querySelector(".arrow.left");
let rightArrow = document.querySelector(".arrow.right");

// Add event listeners to the arrows
leftArrow.addEventListener("click", function() {
  changeCard(-1); // Move to previous card
});
rightArrow.addEventListener("click", function() {
  changeCard(1); // Move to next card
});

// Define a function that can change the display property of the cards
function changeCard(n) {
  // Hide all cards
  for (let card of cards) {
    card.style.display = "none";
  }
  // Show only one card based on current index
  let currentIndex = getCurrentIndex();
  let newIndex = currentIndex + n;
  // Wrap around if index is out of bounds
  if (newIndex < 0) {
    newIndex = cards.length - 1;
  }
  if (newIndex > cards.length - 1) {
    newIndex = 0;
  }
  // Display new card and update current index attribute
  cards[newIndex].style.display = "block";
  document.body.setAttribute("data-current-index", newIndex);
}

// Define a variable that can keep track of the current card index using a data attribute on body element
function getCurrentIndex() {
  return parseInt(document.body.getAttribute("data-current-index")) || 0;
}

// Initialize by showing first card only
changeCard(0);