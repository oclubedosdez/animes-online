// Usar o método find para buscar o num_capitulo com base no nome do manga (case insensitive)
const nomeAnimeBuscado = localStorage.getItem('titulo');


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

    document.querySelector('#imagen img').src = `.${AnimeImg}`
    document.getElementById('Imagen_banner').src = `.${AnimeImg}`
}