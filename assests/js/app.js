const API_OPTION = { // TODO pendiente implementar
    base_url: 'https://api.themoviedb.org/3/discover/movie?api_key=',
    img_url: 'https://image.tmdb.org/t/p/w185',
    token: '0a1883088aa71cb8561cd2c7093b1da8',
    aux: '&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
}

async function GetProgramas() {
    try {
        let url = API_OPTION.base_url + API_OPTION.token + API_OPTION.aux;
        const obj = await fetch(url);
        const response = await obj.json();

        return response;

    } catch (err) {
        console.error(err)
    }
}

function ConstruirTarjetas(Data) { //Todo pendiente
    let tarjetero = document.getElementById("tarjetero");
    Data.results.forEach(element => {
        let templete = `
        <div class="col-md-6 col-lg-4 p-4 mb-5 bg-gray rounded">
            <div class="card shadow " style="width:18rem; min-height:603px; ">
                <img src="${API_OPTION.img_url+element.poster_path}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.overview.substr(0,100)} </p>               
        </div>
      </div>
        </div>`
        tarjetero.innerHTML += templete;

    });

}

GetProgramas()
    .then(data => {
        ConstruirTarjetas(data);
    });