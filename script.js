// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if(menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Card Toggle
function toggleCard(card) {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

// Show card via menu
function showCard(index) {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(c => c.classList.remove('active'));
  allCards[index].classList.add('active');
  window.scrollTo({ top: allCards[index].offsetTop - 100, behavior: 'smooth' });
}
