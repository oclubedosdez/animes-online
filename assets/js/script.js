const filterElement = document.querySelector('header input');
const animes = document.querySelectorAll('#animes .anime');

filterElement.addEventListener('input', filterAnimes);

function filterAnimes() {
    if(filterElement.value != '') {//verifica se o campo de entrada está vazio ou não.
        for(let anime of animes) {//percorre cada elemento anime na lista animes.
            let title = anime.querySelector('h1')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()

            if(!title.includes(filterText)) {// verifica se o título do anime contém o texto digitado pelo usuário.
                anime.style.display = "none";
            } else {
                anime.style.display = "block";
            }
        }
    } else {
        for(let anime of animes) {
            anime.style.display = 'block';
        }
    }
}