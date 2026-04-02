document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', (e) => {
    // Prevent the link from jumping if it's a '#' link
    e.preventDefault();
    
    const parent = button.parentElement;
    
    // Toggle the 'is-open' class on the parent container
    parent.classList.toggle('is-open');
    
    // Optional: Close the menu if you click anywhere else on the screen
    document.addEventListener('click', (event) => {
      if (!parent.contains(event.target)) {
        parent.classList.remove('is-open');
      }
    }, { once: true });
  });
});