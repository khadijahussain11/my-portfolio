
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


// Typewriter effect
const phrases = [
  "UI/UX Enthusiast",
  "Web Developer",
  "App Developer",
  "Graphic Designer"
];

let i = 0, j = 0;
let currentPhrase = [], isDeleting = false;
const typeTarget = document.querySelector(".typewriter");

function typeLoop() {
  typeTarget.innerHTML = currentPhrase.join('');

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(typeLoop, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}

typeLoop();

// Modal Logic
document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.getElementById(button.dataset.modal);
    modal.classList.add('active');
  });
});

document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').classList.remove('active');
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal-overlay.active').forEach(modal => {
    if (e.target === modal) modal.classList.remove('active');
  });
});



// CONTACT FORM VALIDATION
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgBox = document.getElementById('form-msg');

  if (!name || !email || !message) {
    msgBox.textContent = "⚠️ Please fill out all fields.";
    msgBox.style.color = "orange";
    clearMessage();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    msgBox.textContent = "📧 Please enter a valid email.";
    msgBox.style.color = "orange";
    clearMessage();
    return;
  }

  msgBox.textContent = "✅ Thank you! Your message has been sent.";
  msgBox.style.color = "lightgreen";

  // Clear form fields
  this.reset();

  // Remove the message after 5 seconds
  clearMessage();
});

// Function to remove message after 5 seconds
function clearMessage() {
  setTimeout(() => {
    document.getElementById('form-msg').textContent = "";
  }, 5000); // 5000 ms = 5 seconds
}


// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".scroll-progress");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});


