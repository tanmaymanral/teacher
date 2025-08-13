document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active class on tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.getAttribute('data-filter');

    // Show/hide cards based on filter
    document.querySelectorAll('.card').forEach(card => {
      if (card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
