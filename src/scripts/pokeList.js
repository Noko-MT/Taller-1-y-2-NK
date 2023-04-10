 const pokemon = document.getElementById("list");

function pokeSearch(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //649 5ta generacion
            .then(Response => Response.json())
            .then(data => { //console.log(data);
                crearLista(data);            
            })
            .catch(error => console.error(error));
}

const totalPoke = (total) => {
    for (let i = 1; i <= total; i++){
        pokeSearch(i);
    }
}
const crearLista = (data) => {
    const label = document.createElement("div");
    label.classList.add("estilo_label");

    const subLabel = document.createElement("div")
    subLabel.classList.add("estilos_subLabel")

    const labelImg = document.createElement("img");
    labelImg.classList.add("estilo_Imagen")
    labelImg.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
    subLabel.appendChild(labelImg);

    const idPoke = document.createElement("p");
    idPoke.textContent = `ID: #${data.id}`;

    const name = document.createElement('p');
    //name.classList.add("estilo_nombre")
    name.textContent = idMayus(data.name);

    label.appendChild(subLabel);
    label.appendChild(idPoke);
    label.appendChild(name);
    
    pokemon.appendChild(label);
}

totalPoke(151);

function idMayus(name){
    let firstLetter = name.slice(0, 1).toUpperCase() + name.slice(1);
    return firstLetter; 
}


