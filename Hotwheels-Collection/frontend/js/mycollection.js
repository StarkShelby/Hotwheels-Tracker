document.addEventListener("DOMContentLoaded", async () => {
  const collectionContainer = document.getElementById("my-collection");

  try {
    const response = await fetch("http://localhost:5001/mycollection"); // API for user collection
    const cars = await response.json();

    if (!Array.isArray(cars)) {
      throw new Error("Invalid data format received");
    }

    collectionContainer.innerHTML = `<h2 class="text-xl font-bold mb-4">My Collection</h2>`;

    const carsGrid = document.createElement("div");
    carsGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4";

    cars.forEach((car) => {
      const carCard = document.createElement("div");
      carCard.className = "bg-white shadow-lg p-4 rounded-lg text-center";

      carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}" class="w-full h-32 object-cover">
        <p class="mt-2 font-semibold">${car.name}</p>
      `;

      carsGrid.appendChild(carCard);
    });

    collectionContainer.appendChild(carsGrid);
  } catch (error) {
    console.error("Error loading collection:", error);
    collectionContainer.innerHTML = `<p class="text-red-500">Failed to load your collection.</p>`;
  }
});
