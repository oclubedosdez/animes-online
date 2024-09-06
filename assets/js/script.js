// Criação de variáveis que vamos usar
let container_animes = document.getElementById('animes');
let inputBusca = document.getElementById('filter');
let botaoBuscar = document.querySelector('button');


// Função para mostrar todos os animes
function mostrarAnimes() {
    let resultado = ""; // Guardar o HTML que vai ser mostrado
    for (let anime of lista_animes) {
        resultado += `
         <div class="anime">
            <section class="imagen" data-sinopse="${anime.sinopse}">
                <img src="${anime.img}" alt="Anime ${anime.nome}">
                <span class="lancamento">${anime.lancamento}</span>
                <span class="new_capitulo">new: ${anime.episodios}</span>
            </section>
            <h1 title="${anime.nome}">${anime.nome}</h1>
            <p class='dublagem'>${anime.dublagem}</p>
            <p class='sinopse' style="display: none;">${anime.sinopse}</p>
            <p class='genero' style="display: none;">${anime.generos}</p>
        </div>
        `;
    }
    container_animes.innerHTML = resultado; // Coloca o HTML na tela
    adicionarEventos(); // Chama a função para clicar nos animes
}

// Função para buscar o anime
function buscarAnime() {
    let termoBusca = inputBusca.value.toLowerCase(); // Pega o texto que o usuário digitou
    let animes = document.querySelectorAll('.anime'); // Pega todos os animes que estão na tela

    animes.forEach(anime => {
        let nomeAnime = anime.querySelector('h1').textContent.toLowerCase(); // Nome do anime em letras minúsculas
        anime.style.display = nomeAnime.includes(termoBusca) ? 'block' : 'none'; // Mostra ou esconde o anime
    });

    // Verifica se tem algum anime visível
    let animesVisiveis = document.querySelectorAll('.anime:not([style="display: none;"])');
    if (animesVisiveis.length === 0) {
        container_animes.innerHTML = `<div class="aviso"><h1>!Anime não encontrados</h1></div>`;
    }
}

// Função para adicionar eventos de clique nos animes
function adicionarEventos() {
    let animes = document.querySelectorAll('.anime'); // Pega todos os animes que estão na tela

    animes.forEach(anime => {
        anime.onclick = function() {
            const anime_nome = anime.querySelector('h1').innerText;
            const anime_genero = anime.querySelector('.genero').innerText;
            const anime_sinopse = anime.querySelector('.sinopse').innerText;
            const anime_dublagem = anime.querySelector('.dublagem').innerText;
            const anime_lancamento = anime.querySelector('.lancamento').innerText;
            const anime_img = anime.querySelector('img').src;

            // Mostra os detalhes do anime
            container_animes.innerHTML = `
            <div id="box_anime">
                 <span id="fechar_banner">X</span>
                <img id="Imagen_banner" src="${anime_img}" alt="">
                <section id="imagen">
                    <img src="${anime_img}" alt="">
                </section>
                <section id="info">
                    <h1 id="Titulo">${anime_nome}</h1>
                    <p id="generos">Gêneros: ${anime_genero}</p>
                    <p id="sinopse">${anime_sinopse}</p>
                    <p id="lancamento"><span id="dublagem">${anime_dublagem}</span><span id="lancado">${anime_lancamento}</span></p>
                </section>
            </div>

            <div id="box_episodios">
                <h2>Episódios</h2>
                <div id="episodios">
                    <p class="episodio">
                    <span><i class="fas fa-play"></i></span>${anime_nome} - Episódio 01 - Postado 26 de fevereiro</p>
                    <p class="episodio">
                    <span><i class="fas fa-play"></i></span>${anime_nome} - Episódio 02 - Postado 26 de fevereiro</p>
                </div>
            </div>
            `;
            
            // Oculta o header e altera o fundo
            document.querySelector('header').style.display = 'none';
            document.body.style.backgroundColor = 'rgb(29, 29, 29)';

            // Função para fechar a visualização do anime
            document.getElementById('fechar_banner').onclick = function() {
                location.reload(); // Recarrega a página para voltar à lista de animes
            };
        };
    });
}

// Adicionar eventos ao botão de busca e ao campo de input
botaoBuscar.addEventListener('click', buscarAnime); // Quando clicar no botão de buscar
inputBusca.addEventListener('keypress', (event) => { // Quando apertar Enter no campo de busca
    if (event.key === 'Enter') {
        buscarAnime();
    }
});

// Se o campo de busca estiver vazio, mostra todos os animes
inputBusca.addEventListener('input', () => {
    if (inputBusca.value === '') {
        mostrarAnimes();
    }
});

// Inicializa a página mostrando todos os animes
mostrarAnimes();
