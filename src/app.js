let postCard1 = "Card 1"

const totalPost = 826;

init();

function init(){
    for(let i = 1; i <= totalPost; i ++){
        const nombreImagen = darNombreImagen(i);
        const mensajeImagen = darMensajeImagen(i);
        const imagenUrl = darUrlImagen(i);
        createPost(nombreImagen, mensajeImagen, imagenUrl);
    }
}

function createPost (name, message, imgURL){
    const container = document.getElementById("Container");

    const postDiv = document.createElement("div");
    postDiv.setAttribute("class","content");

    const postImg = document.createElement("img");
    postImg.setAttribute("src",imgURL);
    postImg.setAttribute("alt",name);
    postDiv.appendChild(postImg)

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("class", "card-content");

    const postH1 = document.createElement("h1");
    postH1.innerText = name;
    contentDiv.appendChild(postH1)
    
    const postP = document.createElement("p");
    postP.innerText = message;
    contentDiv.appendChild(postP);

    postDiv.appendChild(contentDiv);

    container.appendChild(postDiv);
}

function darUrlImagen(numeroImagen){
    return `https://rickandmortyapi.com/api/character/avatar/${numeroImagen}.jpeg`;
}

function darNombreImagen(numeroImagen){
    return `Character ${numeroImagen}`
}

function darMensajeImagen(numeroImagen){
    return `Esta es mi publicación número ${numeroImagen}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`
}