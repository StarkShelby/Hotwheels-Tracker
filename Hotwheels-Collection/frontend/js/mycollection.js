function displayMyCollection() {
  const collectionContainer = document.getElementById(
    "my-collection-container"
  );
  collectionContainer.innerHTML = ""; // Clear previous content

  const myCollection = JSON.parse(localStorage.getItem("myCollection")) || [];

  myCollection.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.classList.add(
      "car-card",
      "p-4",
      "bg-white",
      "rounded-lg",
      "shadow-md"
    );

    carCard.innerHTML = `
      <img src="${car.image}" class="car-image" alt="${car.name}">
      <h3 class="text-lg font-bold mt-2">${car.name} (${car.year})</h3>
      <p><strong>Series:</strong> ${car.series}</p>
      <button class="remove-btn bg-red-500 text-white px-4 py-2 rounded mt-2" data-index="${index}">
        Remove
      </button>
    `;

    collectionContainer.appendChild(carCard);
  });

  // Attach event listeners to all Remove buttons
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", function () {
      removeCarFromCollection(this.dataset.index);
    });
  });
}

// Function to remove car from localStorage and update UI
function removeCarFromCollection(index) {
  let myCollection = JSON.parse(localStorage.getItem("myCollection")) || [];
  myCollection.splice(index, 1); // Remove car from array
  localStorage.setItem("myCollection", JSON.stringify(myCollection)); // Save updated list
  displayMyCollection(); // Refresh UI
}

// Call function to display the collection when the page loads
document.addEventListener("DOMContentLoaded", displayMyCollection);
