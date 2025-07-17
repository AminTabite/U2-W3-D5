
const endpoint = "https://striveschool-api.herokuapp.com/api/product";



const yearInFooter = function () {
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear(); // anno corrente
};

console.log(location.search);
const parameters = new URLSearchParams(location.search); // creo un oggetto con TUTTI i parametri in questo URL
const biscuitId = parameters.get("biscuitId");

fetch(endpoint + "/" + biscuitId, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore card biscotto");
    }
  })
  .then((detailsbiscuits) => {
  console.log("dettagli", detailsbiscuits);
  document.getElementById("spinner-container").classList.add("d-none");

  // 1. Imposta l'immagine
  document.querySelector(".card-img-top").src = detailsbiscuits.imageUrl;

  // 2. Imposta titolo
  document.querySelector(".card-title").innerText = detailsbiscuits.name;

// 3.
  document.querySelector(".card-text.description").innerText = biscotto.description;

  // 3. Brand
  document.querySelector(".card-text.brand").innerText = detailsbiscuits.brand;

  // 4. Prezzo
  document.querySelector(".card-text.price").innerText = detailsbiscuits.price + " €";
})

   .catch((err) => {
    console.log('ERRORE', err)
  })
