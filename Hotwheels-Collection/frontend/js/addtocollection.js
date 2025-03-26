function addToCollection(carId) {
  let myCollection = JSON.parse(localStorage.getItem("myCollection")) || [];

  // Find the selected car
  let selectedCar = cars.find((car) => car.id === carId);

  // Check if it's already added
  if (!myCollection.some((car) => car.id === carId)) {
    myCollection.push(selectedCar);
    localStorage.setItem("myCollection", JSON.stringify(myCollection));
    alert(`${selectedCar.name} added to My Collection!`);
  } else {
    alert("This car is already in your collection!");
  }
}
