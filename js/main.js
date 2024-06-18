var cartas = [
    {
        name: 'Seven of Cups',
        value_int: 7,
        type: 'minor',
        meaning_up: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.', meaning_rev: 'Desire, will, determination, project',
        desc: 'Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
    },
    {
        name: 'Nine of Cups',
        value_int: 7,
        type: 'minor',
        meaning_up: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.', meaning_rev: 'Desire, will, determination, project.', desc: 'Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
    },
    {
        name: 'Five of wands',
        value_int: 7,
        type: 'minor',
        meaning_up: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.', meaning_rev: 'Desire, will, determination, project.', desc: 'Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
    },

    {
        name: 'Nine of Cups',
        value_int: 7,
        type: 'minor',
        meaning_up: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.', meaning_rev: 'Desire, will, determination, project.',
        desc: 'A goodly personage has feasted to his hearts content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects'
    }
];

var cartasTiradas = []

const openModalJogar = () => {
    const modal = document.getElementById('jogar-cartas-modal')
    modal.style.display = 'flex'
}

const openModalListar = () => {
    const modal = document.getElementById('listar-cartas-modal')
    modal.style.display = 'flex'
    listarCartas();
}

const openModalAtualizar = (nomeCarta) => {
    const modal = document.getElementById('atualizar-cartas-modal')
    modal.style.display = 'flex'
    mostrarDetalhesCarta(nomeCarta);
}

const openModalListarCartas = () => {
    const modal = document.getElementById('listar-todas-cartas-modal')
    modal.style.display = 'flex'
    listarCartasApi();
}


function fecharModalJogar() {
    var modal = document.getElementById("jogar-cartas-modal");
    modal.style.display = "none";
    limparCard();
}

function fecharModalListar() {
    var modal = document.getElementById("listar-cartas-modal");
    modal.style.display = "none";
}

function fecharModalAtualizar() {
    var modal = document.getElementById("atualizar-cartas-modal");
    modal.style.display = "none";
}

function fecharModalListarCartas() {
    var modal = document.getElementById("listar-todas-cartas-modal");
    modal.style.display = "none";
}

function limparCard() {
    document.getElementById("nome-carta").textContent = null;
    document.getElementById("valor-carta").textContent = null;
    document.getElementById("tipo-carta").textContent = null;
    document.getElementById("meaning-up-carta").textContent = null;
    document.getElementById("meaning-rev-carta").textContent = null;
    document.getElementById("descricao-carta").textContent = null;
}


function jogarTarot(event) {
    event.preventDefault();

    fetchTarotCartaAleatoria().then(data => {
        const card = data.cards[0];
       
    var saudacao = "Hi " + event.target.nome.value + ", this is you card, you can save it if you want: ";
    var valor = "VALUE:" + card.value_int;
    var tipo = "TYPE: Arcan " + card.type;
    var meaningUp = "MEANING UP: " + card.meaning_up;
    var meaningRev = "MEANING REV: " + card.meaning_rev;
    var descricao = "DESCRIPTION: " + card.desc;
    console.log("valor: ", valor)

    document.getElementById("nome-carta").textContent = "Hi " + event.target.nome.value + ", this is you card, you can save it if you want: "+ card.name ;
    document.getElementById("valor-carta").textContent = valor;
    document.getElementById("tipo-carta").textContent = tipo;
    document.getElementById("meaning-up-carta").textContent = meaningUp;
    document.getElementById("meaning-rev-carta").textContent = meaningRev;
    document.getElementById("descricao-carta").textContent = descricao;

        console.log('carta jogarTarot: ', card);
    }).catch(error => {
        console.error('Erro ao buscar carta', error);
    });

}

const fetchTarotCartaAleatoria = async () => {
    try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar carta na API', error);
        throw error; 
    }
}

const fetchTarotCarta = async () => {
    try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar carta na API', error);
        throw error; 
    }
}

function listarCartas() {
    const cartasContainer = document.getElementById("cartas");
    cartasContainer.innerHTML = "";
    for (const carta of cartasTiradas) {
        const button = document.createElement("button");
        button.textContent = carta.name;
        button.dataset.name = carta.name;

        button.addEventListener("click", () => {
            openModalAtualizar(carta.name);
        });

        cartasContainer.appendChild(button);
    }
    console.log('carta tirada: ', cartasTiradas)
}

function listarCartasApi() {
    const cartasContainer = document.getElementById("cartas2");
    cartasContainer.innerHTML = "";


    fetchTarotCarta().then(data => {
        for (const carta of data.cards)
         console.log("cards: ", carta.name)
    
             const button = document.createElement("button");
             button.textContent = carta.name;
    
             button.addEventListener("click", () => {
                 console.log("cartaaa do deck")
             });
    
             cartasContainer.appendChild(button);
        // };
       
    }).catch(error => {
        console.error('Erro ao buscar carta', error);
    });
   
}

function mostrarDetalhesCarta(nomeCarta) {

    const selectedCarta = cartasTiradas.find((carta) => carta.name === nomeCarta);

    console.log("Detalhes da carta:", selectedCarta);

    const modalTitle = document.getElementById('nome-carta1');
    const modalType = document.getElementById('tipo-carta1');
    const modalMeaningUp = document.getElementById('meaning-up-carta1');
    const modalMeaningRev = document.getElementById('meaning-rev-carta1');
    const modalDesc = document.getElementById('descricao-carta1');

    console.log('descricao',modalDesc)

    modalTitle.textContent = selectedCarta.name;
    modalType.textContent = selectedCarta.type;
    modalMeaningUp.textContent = selectedCarta.meaningUp;
    modalMeaningRev.textContent = selectedCarta.meaningRev;
    modalDesc.textContent = selectedCarta.desc;
}

function atualizarCartas(event) {
    event.preventDefault();
    const nomeCarta = document.getElementById("nome-carta1").textContent
    const novoMeanUp = document.getElementById("meaning-up-carta1").textContent
    const novoMeanRev = document.getElementById("meaning-rev-carta1").textContent
    const novaDescricao = document.getElementById("descricao-carta1").textContent

    const selectedCarta = cartasTiradas.find(carta => carta.name === nomeCarta);
    console.log(selectedCarta)

    const cartaIndex = cartasTiradas.indexOf(selectedCarta);
    if (cartaIndex !== -1) {
        console.log('index: ',cartaIndex)
        cartasTiradas[cartaIndex].meaningUp = novoMeanUp;
        cartasTiradas[cartaIndex].meaningRev = novoMeanRev;
        cartasTiradas[cartaIndex].desc = novaDescricao;
        console.log('cartas salvas:',cartasTiradas[cartaIndex])

    } else {
        console.error("Erro ao obter o índice da carta:", nomeCarta);
    }

}

function TT(event) {
    event.preventDefault();

    // Obtendo os novos valores dos campos editáveis
    const nomeCarta = document.getElementById("nome-carta1").textContent;
    const meanUp = document.getElementById("meaning-up-carta1").textContent;
    const meanRev = document.getElementById("meaning-rev-carta1").textContent;
    const descCarta = document.getElementById("descricao-carta1").textContent;

    // Encontrar a carta no array
    const cartaSelecionada = cartas.find(carta => carta.nome === nomeCarta);


}

function excluirCarta(event) {
    const carta1 = document.getElementById("nome-carta1")
    const cartaName = carta1.textContent;
    const selectedCarta = cartasTiradas.find(carta => carta.name === cartaName);
    const cartaIndex = cartasTiradas.indexOf(selectedCarta);
    if (cartaIndex !== -1) {
        alert("Are you sure you want to remove" + cartaName);
        cartasTiradas.splice(cartaIndex, 1);
    } else {
        console.error("Erro ao obter o índice da carta:", cartaName);
    }
    const modal1 = document.getElementById("listar-cartas-modal")
    const modal2 = document.getElementById("atualizar-cartas-modal")
    modal1.style.display = 'none'
    modal2.style.display = 'none'
}

function addCard() {

    const nome = document.getElementById("nome-carta").textContent
    const valor = document.getElementById("valor-carta").textContent
    const tipo = document.getElementById("tipo-carta").textContent
    const meaningUp = document.getElementById("meaning-up-carta").textContent
    const meaningRev = document.getElementById("meaning-rev-carta").textContent
    const desc = document.getElementById("descricao-carta").textContent

    const carta = {
        name: nome,
        value_int: valor,
        type: tipo,
        meaningUp: meaningUp,
        meaningRev: meaningRev,
        desc: desc
    };
    if (nome === "" || valor === "" || tipo === "") {
        alert("Please fill in your name and take your card before save it!");
        return;
    }
    cartasTiradas.push(carta);

}

// const createApiCard = async (event) => {
//     event.preventDefault()
    
//     try{
//         const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1')
//         const result = await response.json()

//         if(!response.ok){
//             alert('erro ao consultar ação!')
//             return
//         }

//         const card = {
//             name:result.name,
//             valor:result.value,
//             tipo:result.type,
//             meaning_up:result
//             meaning_rev:
//             desc:
//         }
//     }


// }






