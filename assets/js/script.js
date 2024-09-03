let container_animes = document.getElementById('animes');

let lista_animes = [
    {
        "nome": 'bleach thousand-year blood war',
        "lancamento": 2024,
        "img": './imgs/Bleach.webp',
        "episodios": 23,
        "sinopse" : 'Foi tudo apenas uma coincidência, ou foi inevitável? Ichigo Kurosaki ganhou os poderes de um Soul Reaper através de um encontro casual. Como um Ceifador de Almas Substituto, Ichigo foi pego no tumulto da Soul Society, um lugar onde as almas falecidas se reúnem. Mas com a ajuda de seus amigos, Ichigo superou todos os desafios para se tornar ainda mais forte. Quando novos Soul Reapers e um novo inimigo aparecem em sua cidade natal, Karakura, Ichigo volta ao campo de batalha com sua Zanpakuto para ajudar os necessitados. Enquanto isso, a Soul Society está observando um aumento repentino no número de Hollows sendo destruídos no Mundo dos Vivos. Eles também recebem relatórios separados de moradores do distrito de Rukon desaparecidos. Finalmente, o Seireitei, lar dos Soul Reapers, é atacado por um grupo que se autodenomina Wandenreich. Liderados por Yhwach, o pai de todos os Quincys, os Wandenreich declaram guerra contra os Soul Reapers com a seguinte mensagem: "Daqui a cinco dias, a Soul Society será aniquilada pelos Wandenreich." A história e a verdade mantidas escondidas pelos Soul Reapers por mil longos anos são finalmente trazidas à luz. Todas as coisas devem chegar ao fim quando a batalha final de Ichigo Kurosaki começar! (Fonte: site oficial, traduzido)',
        "generos" : 'A16 Ação Aventura Fantasia',
        "dublagem" : 'Legendado/Dublado',
    },
    {
        "nome": 'jujutsu no kaisen',
        "lancamento": 2024,
        "img": './imgs/jujutsu no kaisen.jpg',
        "episodios": 23,
        "sinopse" : 'Jujutsu Kaisen Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão, tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito interessante na Escola Sugisawa',
        "generos" : 'Ação Demônios Dublado Fantasia Legendado Shounen Sobrenatural',
        "dublagem" : 'Legendado/Dublado',
    },
    {
        "nome": 'Boruto',
        "lancamento": 2024,
        "img": './imgs/Boruto.jpg',
        "episodios": 223,
        "sinopse" : 'Naruto era um jovem shinobi com um talento incorrigível para travessuras. Ele conseguiu seu sonho de se tornar o maior ninja da aldeia e seu rosto fica no topo do monumento Hokage. Mas esta não é a sua história … Uma nova geração de ninjas estão prontos para subir ao palco, liderados pelo próprio filho de Naruto, Boruto!',
        "generos" : 'Ação  Artes Marciais  Aventura Comédia Fantasia Legendado Shounen Super Poderes',
        "dublagem" : 'Legendado/Dublado',
    },
    {
        "nome": 'Chiyu Mahou no Machigatta',
        "lancamento": 2023,
        "img": './imgs/Chiyu Mahou no Machigatta.jpg',
        "episodios": 223,
        "sinopse" : 'Uma caminhada comum de volta para casa após a escola se transforma em uma jornada épica para Usato! Após ser subitamente transportado para outro mundo juntamente de dois colegas de classe, Usato descobre que foi convocado lá por acidente. No entanto, as coisas mudam de água pro vinho quando ele descobre que tem uma habilidade única para a magia de cura! Agora, ele treina além das limitações humanas, utilizando suas habilidades de autocura para ganhar uma força absurda e uma resistência incomparável.',
        "generos" : 'Ação Fantasia Legendado',
        "dublagem" : 'Legendado',
    },
    {
        "nome": 'Tokyo Ghoul',
        "lancamento": 2023,
        "img": './imgs/Tokyo Ghoul.webp',
        "episodios": 26,
        "sinopse" : 'Tokyo Ghoul Todos os Episodios Online, Assistir Tokyo Ghoul Anime Completo, Assistir Tokyo Ghoul Online.Estranhos assassinatos começam a acontecer em Tokyo. Devido a evidência líquida nos casos, a polícia concluiu que os ataques são resultados de uma criatura que se alimenta de outros seres, um “ghoul” do tipo “eater”. Dois amigos de faculdade, Kaneki e Hide, criam a teoria de que os ghouls estão imitando os humanos, por isso nunca são vistos ou capturados. Eles nem imaginam que essa teoria pode ser verdade e a coisa sairá do controle, pois Kaneki acaba se envolvendo, sem saber, com uma dessas criaturas, que ao atacar o garoto acaba morrendo acidentalmente, mas o deixa seriamente ferido e a ponto de morrer. A única salvação? Um transplante envolvendo a própria criatura, mas que poderá trazer consequências terríveis para Kaneki. O que acontecerá a partir de agora?',
        "generos" : 'Ação  Drama  Legendado  Mistério  Seinen  Sobrenatural  Terror',
        "dublagem" : 'Legendado',
    },

];

lista_animes.forEach((anime) => {
    let anime_item = `
        <a class="anime" href="./anime/index.html">
            <section class="imagen">
                <img src="${anime.img}" alt="Anime ${anime.nome}">
                <span class="lancamento">${anime.lancamento}</span>
                <span class="new_capitulo">new:${anime.episodios}</span>
            </section>
            <h1 title="${anime.nome}">${anime.nome}</h1>
        </a>
    `;
    container_animes.innerHTML += anime_item;

});






const filterElement = document.querySelector('header input');
const animes = document.querySelectorAll('#animes .anime');

filterElement.addEventListener('input', filterAnimes);

function filterAnimes() {
    
    if (filterElement.value != '') {//verifica se o campo de entrada está vazio ou não.
        for (let anime of animes) {//percorre cada elemento anime na lista animes.
            let title = anime.querySelector('h1')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()

            if (!title.includes(filterText)) {// verifica se o título do anime contém o texto digitado pelo usuário.
                anime.style.display = "none";
            } else {
                anime.style.display = "block";
                
            }
        }
        
    } else {
        for (let anime of animes) {
            anime.style.display = 'block';

        }
    }
}







animes.forEach(anime => {
    let nome_anime = anime.querySelector('h1').innerText;

    anime.onmouseenter = function () {
        localStorage.setItem('titulo', nome_anime);
        
    }
});





    

