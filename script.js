// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('open');
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
  
  // Close menu on mobile
  const menu = document.getElementById('nav-menu');
  menu.classList.remove('open');

  // Highlight menu
  setActiveMenu(index);
}

// Highlight menu item
function setActiveMenu(index) {
  const menuItems = document.querySelectorAll('nav ul li');
  menuItems.forEach(item => item.classList.remove('active'));
  menuItems[index].classList.add('active');
}

// Back to Top Button
window.onscroll = function() {
  const btn = document.getElementById('backToTop');
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }

  // Fade-in cards on scroll
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.classList.add('fade-in');
    }
  });
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
