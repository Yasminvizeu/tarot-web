const openModal = () => {
	const modal = document.getElementById('jogar-cartas-modal')
	modal.style.display = 'flex'
}

function jogarTarot(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    
    // Nomes e descrições das cartas 
    var cartas = [
        { nome: "Ás de Copas", descricao: "A carta do amor e das emoções profundas." },
        { nome: "Rei de Espadas", descricao: "A carta da autoridade e do poder intelectual." },
        { nome: "Sete de Paus", descricao: "A carta da defesa e da luta." }
        
    ];
    
    // Selecionar aleatoriamente uma carta
    var cartaSelecionada = cartas[Math.floor(Math.random() * cartas.length)];

    // Concatenar o nome da pessoa com a descrição da carta
    var descricaoCompleta = event.target.nome.value + ", voce tirou a carta " + cartaSelecionada.nome;
    
    // Exibir o nome e a descrição da carta selecionada
    document.getElementById("nome-carta").textContent = descricaoCompleta;
    document.getElementById("descricao-carta").textContent = cartaSelecionada.descricao;
    
    // // Exibir o modal
    // var modal = document.getElementById("jogar-cartas-modal");
    // modal.style.display = "none"; // Esconder o modal após a seleção da carta
}

function fecharModal() {
    var modal = document.getElementById("jogar-cartas-modal");
    modal.style.display = "none";
}
