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
const openModalJogar = () => {
    const modal = document.getElementById('jogar-cartas-modal')
    modal.style.display = 'flex'
}

const openModalListar = () => {
    const modal = document.getElementById('listar-cartas-modal')
    modal.style.display = 'flex'
    listarCartas();
}

const openModalAtualizar = () => {
    const modal = document.getElementById('atualizar-cartas-modal')
    modal.style.display = 'flex'
}

function fecharModalJogar() {
    var modal = document.getElementById("jogar-cartas-modal");
    modal.style.display = "none";
}

function fecharModalListar() {
    var modal = document.getElementById("listar-cartas-modal");
    modal.style.display = "none";
}

function fecharModalAtualizar() {
    var modal = document.getElementById("atualizar-cartas-modal");
    modal.style.display = "none";
}

function jogarTarot(event) {
    event.preventDefault();

    var cartaSelecionada = cartas[Math.floor(Math.random() * cartas.length)];

    var saudacao = "Hi " + event.target.nome.value + ", you got the card: " + cartaSelecionada.name;
    var valor = "VALUE:" + cartaSelecionada.value_int;
    var tipo = "TYPE: Arcan " + cartaSelecionada.type;
    var meaningUp = "MEANING UP: " + cartaSelecionada.meaning_up;
    var meaningRev = "MEANING REV: " + cartaSelecionada.meaning_rev;
    var descricao = "DESCRIPTION: " + cartaSelecionada.desc;

    document.getElementById("nome-carta").textContent = saudacao;
    document.getElementById("valor-carta").textContent = valor;
    document.getElementById("tipo-carta").textContent = tipo;
    document.getElementById("meaning-up-carta").textContent = meaningUp;
    document.getElementById("meaning-rev-carta").textContent = meaningRev;
    document.getElementById("descricao-carta").textContent = descricao;
}

function listarCartas() {
    const cartasContainer = document.getElementById("cartas");
    cartasContainer.innerHTML = "";
    for (const carta of cartas) {
        const button = document.createElement("button");
        button.textContent = carta.name;
        button.dataset.name = carta.name;

        button.addEventListener("click", () => {
            mostrarDetalhesCarta(carta.name);
        });

        cartasContainer.appendChild(button);
    }
}

function mostrarDetalhesCarta(nomeCarta) {
    const selectedCarta = cartas.find((carta) => carta.name === nomeCarta);

    console.log("Detalhes da carta:", selectedCarta);

    const modalTitle = document.getElementById('nome-carta'); // Assuming name is displayed in 'nome-carta'
    const modalValue = document.getElementById('valor-carta');
    const modalType = document.getElementById('tipo-carta');
    const modalMeaningUp = document.getElementById('meaning-up-carta');
    const modalMeaningRev = document.getElementById('meaning-rev-carta');
    const modalDesc = document.getElementById('descricao-carta');

    modalTitle.textContent = selectedCarta.name;
    modalValue.textContent = selectedCarta.value_int.toString;
    modalType.textContent = selectedCarta.type;
    modalMeaningUp.textContent = selectedCarta.meaning_up;
    modalMeaningRev.textContent = selectedCarta.meaning_rev;
    modalDesc.textContent = selectedCarta.desc;

    openModalAtualizar();

}

function atualizarCartas() {
    console.log("atualizando campos")
}

