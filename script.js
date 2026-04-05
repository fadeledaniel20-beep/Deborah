 // 2011 in binary
const correctPassword = "goodgirl";

function checkPassword() {
 const input = document.getElementById("password").value;
 const message = document.getElementById("message");
 
 if (input === correctPassword) {
  window.location.href = "dashboard.html";
 } else {
  message.textContent = "Wrong password 🖕";
 }
}

/* ================= FLOATING HEARTS ================= */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
 const heart = document.createElement("div");
 heart.classList.add("heart");
 
 // Randomly choose heart or kiss
 const symbols = ["🖕", "🤘🏼", "💩", "😈", "🧠"];
 heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
 
 heart.style.left = Math.random() * 100 + "vw";
 heart.style.fontSize = Math.random() * 20 + 15 + "px";
 heart.style.animationDuration = Math.random() * 3 + 4 + "s";
 
 heartsContainer.appendChild(heart);
 
 setTimeout(() => {
  heart.remove();
 }, 7000);
}

// Generate hearts continuously
setInterval(createHeart, 300);
