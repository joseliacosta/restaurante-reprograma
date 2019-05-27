const comidas = [
  {
    nome: "Batata frita",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/Batata-frita.jpg"
  },
  {
    nome: "Macarronada",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/macarronada.jpg"
  },
  {
    nome: "Falafel",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/falafel.jpg"
  },
  {
    nome: "Creme de abóbora",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/creme-de-abobora.jpg"
  },

]

const container = document.querySelector('#items-cardapio')
// fetch(`localhost:3001`)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data) =>{

        comidas.forEach(prato => {
            console.log(prato)

            const mediaItem = document.createElement('div');
            mediaItem.setAttribute('class', 'media mb-4');
            mediaItem.innerHTML = `
            <img src="${prato.imagem}" alt="${prato.nome}" class="mr-3 img-thumbnail" width="200px">

            <div class="media-body>

                <h5 class="mt-0"><strong>${prato.nome}</strong></h5>
                ${prato.descricao}
              </div>`
              container.appendChild(mediaItem);
        }
        )
    // }
    // )
    // .catch((erro)=>{
    //     console.log(erro)
    // }