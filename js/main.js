const openModal = () => {
	const modal = document.getElementById('jogar-cartas-modal')
	modal.style.display = 'flex'
}

function jogarTarot(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    
    // Nomes e descrições das cartas 
    var cartas = [
        {
            name:'Seven of Cups',
            value_int:7,
            type:'minor',
            meaning_up:'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',meaning_rev:'Desire, will, determination, project',
            desc:'Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
        },
        {
            name:'Nine of Cups',
            value_int:7,
            type:'minor',
            meaning_up:'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',meaning_rev:'Desire, will, determination, project.',desc:'Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
        },
        {
            name:'Five of wands',
            value_int:7,
            type:'minor',
            meaning_up:'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',meaning_rev:'Desire, will, determination, project.',desc:'Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.Strange chalices of vision, but the images are more especially those of the fantastic spirit.'
        },
        
    ];
    
    // Selecionar aleatoriamente uma carta
    var cartaSelecionada = cartas[Math.floor(Math.random() * cartas.length)];

    // Concatenar o nome da pessoa com a descrição da carta
    var saudacao ="Hi " + event.target.nome.value + ", you got the card: " + cartaSelecionada.name;
    var valor ="VALUE:" + cartaSelecionada.value_int;
    var tipo ="TYPE: Arcan " + cartaSelecionada.type;
    var meaningUp ="MEANING UP: " + cartaSelecionada.meaning_up;
    var meaningRev ="MEANING REV: " + cartaSelecionada.meaning_rev;
    var descricao ="DESCRIPTION: " + cartaSelecionada.desc;
    
    // Exibir o nome e a descrição da carta selecionada
    document.getElementById("nome-carta").textContent = saudacao;
    document.getElementById("valor-carta").textContent = valor;
    document.getElementById("tipo-carta").textContent = tipo;
    document.getElementById("meaning-up-carta").textContent = meaningUp;
    document.getElementById("meaning-rev-carta").textContent = meaningRev;
    document.getElementById("descricao-carta").textContent = descricao;
    
    // // Exibir o modal
    // var modal = document.getElementById("jogar-cartas-modal");
    // modal.style.display = "none"; // Esconder o modal após a seleção da carta
}

function fecharModal() {
    var modal = document.getElementById("jogar-cartas-modal");
    modal.style.display = "none";
}
