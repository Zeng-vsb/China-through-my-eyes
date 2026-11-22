// The buttons show one destination or all destinations.
const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.place-card');
const status = document.querySelector('#filter-status');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const place = button.dataset.place;

    cards.forEach(function(card) {
      if (place === 'all' || card.dataset.place === place) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });

    buttons.forEach(function(otherButton) {
      const active = otherButton === button;
      otherButton.classList.toggle('selected', active);
      otherButton.setAttribute('aria-pressed', active);
    });

    status.textContent = place === 'all' ? 'Showing all 3 places' : 'Showing 1 place';
  });
});
