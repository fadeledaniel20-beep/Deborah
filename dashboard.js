// ================= CONFIG =================
const message = "YOU ARE A HOE 🥸🖕";
const container = document.getElementById("loveText");

// Timing controls (makes animation smoother and more premium)
const letterDelay = 180;
const bounceDuration = 600;

// ================= CREATE LETTER =================
function createLetter(char, index) {
 const span = document.createElement("span");
 
 span.textContent = char;
 span.classList.add("letter");
 
 // Add slight random softness to make it feel more natural
 const randomOffset = Math.random() * 10;
 
 span.style.animationDelay = `${index * 0.05}s`;
 span.style.transform = `translateY(${40 + randomOffset}px)`;
 
 return span;
}

// ================= ANIMATE TEXT =================
function animateText(text) {
 container.innerHTML = ""; // clear first
 
 text.split("").forEach((char, index) => {
  setTimeout(() => {
   const letter = createLetter(char, index);
   
   container.appendChild(letter);
   
   // Add a second subtle bounce after appearing (premium feel)
   setTimeout(() => {
    letter.style.transform = "translateY(0)";
   }, bounceDuration);
   
  }, index * letterDelay);
 });
}

// ================= EXTRA EFFECT (soft loop pulse) =================
function addSoftGlow() {
 setInterval(() => {
  container.style.textShadow = "0 0 20px rgba(255, 46, 99, 0.6)";
  
  setTimeout(() => {
   container.style.textShadow = "0 0 5px rgba(255, 46, 99, 0.2)";
  }, 800);
  
 }, 2000);
}

// ================= INIT =================
window.addEventListener("load", () => {
 animateText(message);
 addSoftGlow();
});
