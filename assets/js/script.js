let container_animes = document.getElementById('animes');

let resultado = "";


for (let anime of lista_animes) {
    resultado += `
    <a class="anime" href="./anime/index.html">
            <section class="imagen">
                <img src="${anime.img}" alt="Anime ${anime.nome}">
                <span class="lancamento">${anime.lancamento}</span>
                <span class="new_capitulo">new:${anime.episodios}</span>
            </section>
            <h1 title="${anime.nome}">${anime.nome}</h1>
            <p>${anime.dublagem}</p>
        </a>
    `
    container_animes.innerHTML = resultado;
}


let inputBusca = document.getElementById('filter');
let botaoBuscar = document.querySelector('button');

// Função para realizar a busca
function realizarBusca() {
    const termoBusca = inputBusca.value.toLowerCase();

    // Iterar sobre os animes e verificar se o nome contém o termo de busca
    container_animes.querySelectorAll('.anime').forEach(anime => {
        const nomeAnime = anime.querySelector('h1').textContent.toLowerCase();
        anime.style.display = nomeAnime.includes(termoBusca) ? 'block' : 'none';
    });
}

// Adicionar evento de clique ao botão
botaoBuscar.addEventListener('click', realizarBusca);

// Adicionar evento de pressionar Enter ao campo de input
inputBusca.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        realizarBusca();
    }
});

// Verifica se o campo de busca foi limpo
inputBusca.addEventListener('input', () => {
    if (inputBusca.value === '') {
        // Se estiver vazio, mostra todos os animes
        container_animes.querySelectorAll('.anime').forEach(anime => {
            anime.style.display = 'block';
        });
    }
});





var animes = document.querySelectorAll('.anime');


animes.forEach(anime => {
    let nome_anime = anime.querySelector('h1').innerText;

    anime.onmouseenter = function () {
        localStorage.setItem('titulo', nome_anime);
    }
});







