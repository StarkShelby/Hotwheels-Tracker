document.addEventListener("DOMContentLoaded", () => {
  const myCollectionNav = document.getElementById("my-collection-nav");
  const buttons = document.querySelectorAll(".add-to-collection");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".car-card");
      if (!card) return;

      // Clone the card for animation
      const clone = card.cloneNode(true);
      document.body.appendChild(clone);

      // Get card and nav positions
      const cardRect = card.getBoundingClientRect();
      const navRect = myCollectionNav.getBoundingClientRect();

      // Position the clone over the original card
      clone.style.position = "fixed";
      clone.style.top = `${cardRect.top}px`;
      clone.style.left = `${cardRect.left}px`;
      clone.style.width = `${cardRect.width}px`;
      clone.style.height = `${cardRect.height}px`;
      clone.style.transition = "all 0.8s ease-in-out";
      clone.style.zIndex = "1000";
      clone.style.opacity = "1";

      // Animate to My Collection nav
      setTimeout(() => {
        clone.style.transform = `translate(${navRect.left - cardRect.left}px, ${
          navRect.top - cardRect.top
        }px) scale(0.5)`;
        clone.style.opacity = "0";
      }, 50);

      // Remove the clone after animation
      setTimeout(() => {
        clone.remove();
      }, 900);
    });
  });
});
