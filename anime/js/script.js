// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeAnimeBuscado = localStorage.getItem('titulo');
let container_episodios = document.getElementById('episodios');
let container_video = document.getElementById('box_video');
let FecharVideo = document.getElementById('fechar_Video');


const animeEncontrado = lista_animes.find(anime => anime.nome.toLowerCase() === nomeAnimeBuscado.toLocaleLowerCase());

if (animeEncontrado) {
    const AnimeNome = animeEncontrado.nome;
    const AnimeGeneros = animeEncontrado.generos;
    const AnimeSinopse = animeEncontrado.sinopse;
    const AnimeDublagem = animeEncontrado.dublagem;
    const AnimeLacamento = animeEncontrado.lancamento;
    const AnimeImg = animeEncontrado.img;

    document.getElementById('Titulo').innerText = AnimeNome;
    document.getElementById('generos').innerText = `Generos : ${AnimeGeneros}`;
    document.getElementById('sinopse').innerHTML = AnimeSinopse;
    document.getElementById('dublagem').innerText = AnimeDublagem;
    document.getElementById('lancado').innerText = AnimeLacamento;
    document.getElementById('titulo_pagina').innerText = AnimeNome;

    document.querySelector('#imagen img').src = `.${AnimeImg}`;
    document.getElementById('Imagen_banner').src = `.${AnimeImg}`;

    for(i = 1; i <= 2; i++) {
        container_episodios.innerHTML += `
           <p class="episodio">
            <span><i class="fas fa-play"></i></span>
            ${AnimeNome} - episodio 0${i} - Postado 26 de fevereiro
          </p>
        `;
    }
}

FecharVideo.onclick = function() {
  container_video.remove()
}





