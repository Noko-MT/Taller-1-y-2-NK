function pokeSearch() {
    //Llamar elementos
    const pokemon = document.getElementById("pokeName").value;
    const result = document.getElementById("result");
    result.innerHTML = "";

    //LLamar a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`) //649 5ta generacion
    .then(Response => Response.json())
    .then(data => { //console.log(data.stats[0]);

        //Crear elemento donde se muestre p
        const name = document.createElement('p');
        name.classList.add("estilo_nombre");
        name.innerText = idMayus(data.name);
        result.appendChild(name);

        //Mostrara la imagen
        const image = document.createElement('img');
        image.classList.add("imagen");
        image.src = data.sprites.other['official-artwork'].front_default;
        //imagen.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
        result.appendChild(image);

        const idPoke = document.createElement('p');
        idPoke.innerText = `ID: #${data.id}`;
        result.appendChild(idPoke);
        const pokeType = document.createElement('p');
        //let tp = data.types.map(type => type.type.name);
        let tp = data.types;
        console.log(tp.length);
        pokeType.innerText = data.types[0].type.name;
        result.appendChild(pokeType);
        if(tp.length > 1){ 
            const pokeType1 = document.createElement('p');
            pokeType1.innerText = data.types[1].type.name;
            result.appendChild(pokeType1);
        }

        //stats(data.stats[0]);
        //const stats = document.createElement('p');
        const stats = document.createElement('p');
        stats.innerHTML = `PS: ${data.stats[0].base_stat}`;
        //stats.innerText = data.stats[0].base_stat;
        //stats.innerText = data.stats[0].stat.name;
        result.appendChild(stats);
    })
    //.catch(error => console.error(error));
    .catch(error => pokeNosearch());

}


const pokeNosearch = () => {
    const name = document.createElement('p');
    name.innerText = `Who's That Pokemon?`;
    result.appendChild(name);
    const image = document.createElement('img');
    image.src = `../../resources/pokeunkownEdit.png`;
    result.appendChild(image);
}
/*
const stats = (stat) => {
    console.log(stat);
    const namestat = document.createElement('p');
    namestat.innerText = stat.stat.name;;
    statsvue.appendChild(namestat);
    const valuestat = document.createElement('p');
    valuestat.innerText = stat.base_stat;
    statsvue.appendChild(valuestat);
}*/

// Funcion colocar primera mayuscula
function idMayus(name){
    let firstLetter = name.slice(0, 1).toUpperCase() + name.slice(1);
    return firstLetter; 
}




