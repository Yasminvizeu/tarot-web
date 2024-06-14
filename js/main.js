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

function limparCard(){
    document.getElementById("nome-carta").textContent = null;
    document.getElementById("valor-carta").textContent = null;
    document.getElementById("tipo-carta").textContent = null;
    document.getElementById("meaning-up-carta").textContent = null;
    document.getElementById("meaning-rev-carta").textContent = null;
    document.getElementById("descricao-carta").textContent = null;  
}

function jogarTarot(event) {
    event.preventDefault();

    var cartaSelecionada = cartas[Math.floor(Math.random() * cartas.length)];

    var saudacao = "Hi " + event.target.nome.value + ", this is you card, you can save it if you want: ";
    var valor = "VALUE:" + cartaSelecionada.value_int;
    var tipo = "TYPE: Arcan " + cartaSelecionada.type;
    var meaningUp = "MEANING UP: " + cartaSelecionada.meaning_up;
    var meaningRev = "MEANING REV: " + cartaSelecionada.meaning_rev;
    var descricao = "DESCRIPTION: " + cartaSelecionada.desc;

    document.getElementById("nome-carta").textContent = cartaSelecionada.name;
    document.getElementById("valor-carta").textContent = valor;
    document.getElementById("tipo-carta").textContent = tipo;
    document.getElementById("meaning-up-carta").textContent = meaningUp;
    document.getElementById("meaning-rev-carta").textContent = meaningRev;
    document.getElementById("descricao-carta").textContent = descricao;
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
}

function mostrarDetalhesCarta(nomeCarta) {
    
    const selectedCarta = cartas.find((carta) => carta.name === nomeCarta);

    console.log("Detalhes da carta:", selectedCarta);

    const modalTitle = document.getElementById('nome-carta1'); 
    const modalType = document.getElementById('tipo-carta1');
    const modalMeaningUp = document.getElementById('meaning-up-carta1');
    const modalMeaningRev = document.getElementById('meaning-rev-carta1');
    const modalDesc = document.getElementById('descricao-carta1');

    modalTitle.textContent = selectedCarta.name;
    modalType.textContent = selectedCarta.type;
    modalMeaningUp.textContent = selectedCarta.meaning_up;
    modalMeaningRev.textContent = selectedCarta.meaning_rev;
    modalDesc.textContent = selectedCarta.desc;
}

function atualizarCartas(event) {
    event.preventDefault();

    const carta1 = document.getElementById('carta1');
    const descCarta1 = document.getElementById('descricao-carta1');
    const nomeCarta = document.getElementById("nome-carta1")
    console.log(nomeCarta);
    const carta = event.target.name.value
    console.log(carta)
    const cardToFind = { name:carta1.target.value };
    const index = cartas.indexOf(cardToFind);
    console.log("Position of card2:", index); // Output: 1
  
   
    

    console.log("atualizando campos")
}

function excluirCarta(event){
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
function addCard(){

    const nome = document.getElementById("nome-carta").textContent
    const valor = document.getElementById("valor-carta").textContent
    const tipo = document.getElementById("tipo-carta").textContent 
    const meaningUp =document.getElementById("meaning-up-carta").textContent 
    const meaningRev = document.getElementById("meaning-rev-carta").textContent 
    const desc = document.getElementById("descricao-carta").textContent

    const carta = {
        name: nome,
        value_int: valor,
        type: tipo,
        meaning_up: meaningUp,
        desc: desc
    };
    // Validation: Check if any required fields are empty
  if (nome === "" || valor === "" || tipo === "") {
    alert("Please fill in your name and take your card before save it!");
    return; // Exit function if validation fails
  }

  // Add the card to the cartasTiradas array
  cartasTiradas.push(carta);

  // Display success message
  alert(nome + " saved!");
}





  

