const yearInFooter = function () {
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear(); // anno corrente
};

const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const getBiscuits = function () {
  fetch(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })
    .then((arrayOfBiscuits) => {
      console.log("array di biscotti:", arrayOfBiscuits);

      const row = document.getElementById("Biscuits row");    //genero la colonna con i valori dell' oggetto delle card biscotto

      arrayOfBiscuits.forEach((biscotti) => {
        row.innerHTML += `
          <div class="col">
            <div class="card h-100 d-flex flex-column">
              <img src="${biscotti.imageUrl}" class="card-img-top" alt="biscotti">
              <div class="card-body d-flex flex-column bg-secondary text-light">
                <h5 class="card-title">${biscotti.name}</h5>
                <p class="card-text flex-grow-1">${biscotti.description}</p>
                <p class="card-text">${biscotti.brand} - €${biscotti.price}</p>
                <a href="details.html?biscuitId=${biscotti._id}" class="btn btn-primary">Vai ai dettagli</a>
              </div>
            </div>
          </div>
        `;
      });
    })
    .catch((err) => {
      console.log("Errore:", err);
    });
};

yearInFooter();
getBiscuits();
