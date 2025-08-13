let currentCard = 0;
const cardsPerView = 5;
const cardTrack = document.querySelector(".card-track");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;

function slideCards() {
  currentCard++;
  if (currentCard > totalCards - cardsPerView) {
    currentCard = 0;
  }
  cardTrack.style.transform = `translateX(-${currentCard * (100 / cardsPerView)}%)`;
}

setInterval(slideCards, 2000);

function showPoems() {
  document.querySelector('.carousel-wrapper').classList.add('poem-mode');
  document.querySelector('.carousel-wrapper').classList.remove('message-mode');

  const container = document.getElementById('carouselTrack');
  container.innerHTML = `...`; // your poem HTML
  stopSlider(); // poems stay still
}

function showMessages() {
  document.querySelector('.carousel-wrapper').classList.add('message-mode');
  document.querySelector('.carousel-wrapper').classList.remove('poem-mode');

  const container = document.getElementById('carouselTrack');
  container.innerHTML = `...`; // your message HTML
  stopSlider();
  startSlider();
}