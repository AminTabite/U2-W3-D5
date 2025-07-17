const yearInFooter = function () {
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear(); // anno corrente
};

const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const parameters = new URLSearchParams(location.search); // creo un oggetto con TUTTI i parametri in questo URL
const biscuitId = parameters.get("biscuitId");

class Biscuit {
  constructor(_name, _description, _brand, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
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
    priceInput.value
  )

  console.log(fullBiscuit)


  let endpointToUse
  if (biscuitId) {
    // abbiamo un ID nell'url, siamo qua per MODIFICARE un concerto!
    endpointToUse = endpoint + '/' + biscuitId
  } else {
    // NON abbiamo un ID nell'url., siamo qua per CREARE un concerto!
    endpointToUse = endpoint
  }

  let methodToUse
  if (biscuitId) {
    // abbiamo un ID nell'url, siamo qua per MODIFICARE un concerto!
    methodToUse = 'PUT'
  } else {
    // NON abbiamo un ID nell'url., siamo qua per CREARE un concerto!
    methodToUse = 'POST'
  }

});
