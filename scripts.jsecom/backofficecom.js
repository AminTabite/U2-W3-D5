const yearInFooter = function () {
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear(); // anno corrente
};

const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const parameters = new URLSearchParams(location.search); // creo un oggetto con TUTTI i parametri in questo URL
const biscuitId = parameters.get("biscuitId");

class Biscuit {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imageUrl = _imageUrl;
    this.price = _price;
  }
}

const formBiscuits = document.getElementById("formBiscuits");
formBiscuits.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const priceInput = document.getElementById("price");

  const fullBiscuit = new Biscuit(
    nameInput.value, //tutti i valori che formano un oggetto biscotto grazie alla classe biscuit
    descriptionInput.value,
    brandInput.value,
    "https://www.saporitipicilaziali.it/1957/biscotti-frolla-glassati-assortiti-vassoio-fantasia-1000g-fresco-ambient-scadenza-90gg-il-forno-di-gargani.jpg",
    priceInput.value
  );

  console.log(fullBiscuit);

  let endpointToUse;
  if (biscuitId) {
    // abbiamo un ID nell'url, siamo qua per MODIFICARE un concerto!
    endpointToUse = endpoint + "/" + biscuitId;
  } else {
    // NON abbiamo un ID nell'url., siamo qua per CREARE un concerto!
    endpointToUse = endpoint;
  }

  let methodToUse;
  if (biscuitId) {
    // abbiamo un ID nell'url, siamo qua per MODIFICARE un concerto!
    methodToUse = "PUT";
  } else {
    // NON abbiamo un ID nell'url., siamo qua per CREARE un concerto!
    methodToUse = "POST";
  }

  fetch(endpointToUse, {
    method: methodToUse, // es: 'POST' per creare una nuova risorsa
    body: JSON.stringify(fullBiscuit), // converto l'oggetto JS in stringa JSON
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8",
      "Content-Type": "application/json", // indico che il body è in formato JSON
    },
  }).then((response) => {
    if (response.ok) {
      alert("Prodotto inserito correttamente!");
    } else {
      throw new Error("errore nel post", response.status);
    }
  });
});

const deleteBiscotto = function () {
  // con questa funzione chiedo all'API di eliminare questa risorsa
  fetch(endpoint + "/" + biscuitId, {
  method: "DELETE",         // metodo fuori da headers
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8"
  }
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
  // dobbiamo re-direzionare l'utente alla pagina backoffice con un parametro nell'URL
  location.assign('/backoffice.html?biscuitId=' + biscuitId)

}
