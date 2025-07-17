const endpoint = "https://striveschool-api.herokuapp.com/api/product";

const yearInFooter = function () {
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear(); // anno corrente
};

console.log(location.search);
const parameters = new URLSearchParams(location.search); 
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

    // prendo l'immagine
    document.querySelector(".card-img-top").src = detailsbiscuits.imageUrl;

    //  prendo nome
    document.querySelector(".card-title").innerText = detailsbiscuits.name;

    // prendo la descrizione
    document.querySelector(".card-text.description").innerText =
      detailsbiscuits.description;

    //  prendo Brand
    document.querySelector(".card-text.brand").innerText =
      detailsbiscuits.brand;

    //   prendo Prezzo
    document.querySelector(".card-text.price").innerText =
      detailsbiscuits.price + " €";
  })

  .catch((err) => {
    console.log("ERRORE", err);
  });

const deleteBiscotto = function () {
  //  mando request  all'API di eliminare questa risorsa
  fetch(endpoint + "/" + biscuitId, {
    method: "DELETE", 
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Rip biscotto");
        // visto che la risorsa non esiste più, riportiamo l'utente in home
        location.assign("/homepage.html");
      } else {
        throw new Error("Errore in fase di eliminazione");
      }
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

const editBiscotto = function () {
  //direziona l'utente alla pagina backoffice con un parametro nell'URL per la modifica
  location.assign("/backoffice.html?biscuitId=" + biscuitId);
};


yearInFooter()