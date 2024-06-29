document.addEventListener("DOMContentLoaded", () => {
    const apiStringRandom = "https://tarotapi.dev/api/v1/cards/random?n=1";
    const apiStringAllCards = "https://tarotapi.dev/api/v1/cards";
  
    // Definir modais
    const modalJogar = document.getElementById("jogar-cartas-modal");
    const modalListar = document.getElementById("listar-cartas-modal");
    const modalAtualizar = document.getElementById("atualizar-cartas-modal");
    const modalListarCartas = document.getElementById(
      "listar-todas-cartas-modal"
    );
  
    window.onclick = function (event) {
      if (event.target == modalAtualizar || event.target == modalJogar || event.target == modalListar || event.target == modalListarCartas) {
        modal = event.target;
        modal.style.display = "none";
      }
    };  
  
    // Funções para abrir e fechar modais
    window.openModalJogar = function () {
      modalJogar.style.display = "block";
    };
  
    window.fecharModalJogar = function () {
      modalJogar.style.display = "none";
    };
  
    window.openModalListar = function () {
      listarCartasSalvas();
      modalListar.style.display = "block";
    };
  
    window.fecharModalListar = function () {
      modalListar.style.display = "none";
    };
  
    window.openModalAtualizar = function (cartaIndex) {
      const carta = JSON.parse(localStorage.getItem("cartas"))[cartaIndex];
      const { name, type, meaning_up, meaning_rev, desc } = carta;
      document.getElementById("nome-carta1").innerText = name;
      document.getElementById("tipo-carta1").innerText =
        capitalizeFirstLetter(type);
      document.getElementById("meaning-up-carta1").innerText = meaning_up;
      document.getElementById("meaning-rev-carta1").innerText = meaning_rev;
      document.getElementById("descricao-carta1").innerText = desc;
      modalAtualizar.style.display = "block";
    };
  
    window.fecharModalAtualizar = function () {
      modalAtualizar.style.display = "none";
    };
  
    window.openModalListarCartas = function () {
      listarTodasCartas();
      modalListarCartas.style.display = "block";
    };
  
    window.fecharModalListarCartas = function () {
      modalListarCartas.style.display = "none";
    };
  
    // Função para pegar uma carta de tarô aleatória
    window.jogarTarot = async function (event) {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const response = await fetch(apiStringRandom);
      const data = await response.json();
      const carta = data.cards[0];
      document.querySelector(".card-title").innerText = carta.name;
      document.querySelector(
        ".type-content"
      ).innerText = `Type: ${capitalizeFirstLetter(carta.type)}`;
      document.querySelector(
        ".meaning-up-content"
      ).innerText = `Meaning Up: ${carta.meaning_up}`;
      document.querySelector(
        ".meaning-rev-content"
      ).innerText = `Meaning Rev: ${carta.meaning_rev}`;
      document.querySelector(
        ".descricao-content"
      ).innerText = `Description: ${carta.desc}`;
      document.getElementById("adiciona-Carta").setAttribute("rendered", "true");
    };
  
    // Função para adicionar uma carta ao localStorage
    window.addCard = function () {
      const nome = document.getElementById("nome").value;
      const carta = {
        name: document.getElementById("nome-carta").innerText,
        type: document.getElementById("tipo-carta").innerText,
        meaning_up: document.getElementById("meaning-up-carta").innerText,
        meaning_rev: document.getElementById("meaning-rev-carta").innerText,
        desc: document.getElementById("descricao-carta").innerText,
      };
      const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
      cartas.push({ ...carta, usuario: nome });
      localStorage.setItem("cartas", JSON.stringify(cartas));
      getUsername(nome);
  
      alert("The card was added successfully!");
    };
  
    window.addCardFromAllCards = function (button) {
      const cartaDiv = button.parentNode;
      console.log("cartaDiv: " + cartaDiv);
      const carta = {
        name: cartaDiv.querySelector(".card-title").innerText,
        type: capitalizeFirstLetter(
          cartaDiv.querySelector(".content.content-type").innerText
        ),
        meaning_up: cartaDiv.querySelector(".content-meaning-up").innerText,
        meaning_rev: cartaDiv.querySelector(".content-meaning-rev").innerText,
        desc: cartaDiv.querySelector(".content-desc").innerText,
      };
  
      const nome = document.getElementById("nome").value;
  
      const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
      cartas.push({ ...carta, usuario: nome });
      localStorage.setItem("cartas", JSON.stringify(cartas));
      alert("The card was added successfully!");
    };
  
    // Função para listar cartas salvas no localStorage
    window.listarCartasSalvas = function () {
      const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
      const cartasDiv = document.getElementById("cartas");
      cartasDiv.innerHTML = "";
      cartas.forEach((carta, index) => {
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        cartaDiv.innerHTML = `
                  <h3>${carta.name}</h3>
                   <p><span class="label">Type: </span><span class="content">${carta.type}</span></p>
                  <p><span class="label">Meaning Up: </span><span class="content">${carta.meaning_up}</span></p>
                  <p><span class="label">Meaning Rev: </span><span class="content">${carta.meaning_rev}</span></p>
                  <p><span class="label">Description: </span><span class="content">${carta.desc}</span></p>
                  <button onclick="excluirCarta(${index})">Delete</button>
                  <button onclick="openModalAtualizar(${index})">Update</button>
              `;
        cartasDiv.appendChild(cartaDiv);
      });
    };
  
    // Função para listar todas as cartas do deck
    window.listarTodasCartas = async function () {
      const response = await fetch(apiStringAllCards);
      const data = await response.json();
      const cartas = data.cards;
      const cartasDiv = document.getElementById("cartas2");
      cartasDiv.innerHTML = "";
      cartas.forEach((carta) => {
        const cartaDiv = document.createElement("div");
        cartaDiv.classList.add("carta");
        cartaDiv.innerHTML = `
                  <h3 class="card-title">${carta.name}</h3>
                  <p><span class="label">Type: </span><span class="content  content-type">${capitalizeFirstLetter(
                    carta.type
                  )}</span></p>
                  <p><span class="label">Meaning Up: </span><span class="content  content-meaning-up">${
                    carta.meaning_up
                  }</span></p>
                  <p><span class="label">Meaning Rev: </span><span class="content content-meaning-rev">${
                    carta.meaning_rev
                  }</span></p>
                  <p><span class="label">Description: </span><span class="content content-desc">${
                    carta.desc
                  }</span></p>
                  <button class="adiciona-carta" onclick="addCardFromAllCards(this)">Add card</button>
              `;
        cartasDiv.appendChild(cartaDiv);
      });
    };
  
    // Função para atualizar uma carta no localStorage
    window.atualizarCartas = function (event) {
      const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
      const index = cartas.findIndex(
        (carta) => carta.name === document.getElementById("nome-carta1").innerText
      );
      console.log(carta);
  
      if (index !== -1) {
        cartas[index] = {
          name: document.getElementById("nome-carta1").innerText,
          type: document.getElementById("tipo-carta1").innerText,
          meaning_up: document.getElementById("meaning-up-carta1").innerText,
          meaning_rev: document.getElementById("meaning-rev-carta1").innerText,
          desc: document.getElementById("descricao-carta1").innerText,
          usuario: cartas[index].usuario,
        };
        localStorage.setItem("cartas", JSON.stringify(cartas));
        alert("Carta atualizada com sucesso!");
        fecharModalAtualizar();
        listarCartasSalvas();
      } else {
        alert("Erro ao atualizar carta.");
      }
    };
  
    // Função para excluir uma carta no localStorage
    window.excluirCarta = function (index) {
      const cartas = JSON.parse(localStorage.getItem("cartas")) || [];
      cartas.splice(index, 1);
      localStorage.setItem("cartas", JSON.stringify(cartas));
      listarCartasSalvas();
    };
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    function getUsername(name) {
      let username = "";
      const displayName = document.querySelector(".username");
      if (name) {
        username = name;
        displayName.innerText = `Your future's waiting, ${username}!`;
      }
    }
  
  });