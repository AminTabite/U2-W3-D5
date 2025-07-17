const yearInFooter = function () {
  const span = document.getElementById('year')
  span.innerText = new Date().getFullYear() // anno corrente
}

const endpoint ='https://striveschool-api.herokuapp.com/api/product/'

const getBiscuits = function () {
fetch(endpoint , {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8"
}
}) 
.then((Response) => {
    if (Response.ok) {
        return Response.json()
    } else { throw new Error ('errore prima fetch')}
})
.then((arrayOfBiscuits) => {

    console.log("array di biscotti", arrayOfBiscuits)
})
.then(arrayOfBiscuits.forEach(biscotti => {
    row.innerHtml += `
            <div class="col">
              <div class="card h-100 d-flex flex-column">
                <img src="https://psicologinews.it/wp-content/uploads/2024/02/1522324821926_1522324836.jpg-assistere_a_un_concerto_ogni_quindici_giorni_allunga_la_vita_di_nove_anni__scopri_i_risultati_della_ricerca_.jpeg" class="card-img-top" alt="immagine default concerto">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">parametro1</h5>
                  <p class="card-text flex-grow-1">parametro2</p>
                  <p class="card-text">parametro3</p>
                  <a href="./detail.html?eventId= id biscotto" class="btn btn-primary">Vai ai dettagli</a>
                </div>
              </div>
            </div>
          `
    
}))
.catch((err) => {
    console.log("errore per ora non c'é nulla",err )
})


}


yearInFooter()
getBiscuits()