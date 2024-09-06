let lista_animes = [
    {
        "nome": 'bleach thousand-year blood war',
        "lancamento": 2024,
        "img": './imgs/Bleach.webp',
        "episodios": 23,
        "sinopse": 'Foi tudo apenas uma coincidência, ou foi inevitável? Ichigo Kurosaki ganhou os poderes de um Soul Reaper através de um encontro casual. Como um Ceifador de Almas Substituto, Ichigo foi pego no tumulto da Soul Society, um lugar onde as almas falecidas se reúnem. Mas com a ajuda de seus amigos, Ichigo superou todos os desafios para se tornar ainda mais forte. Quando novos Soul Reapers e um novo inimigo aparecem em sua cidade natal, Karakura, Ichigo volta ao campo de batalha com sua Zanpakuto para ajudar os necessitados. Enquanto isso, a Soul Society está observando um aumento repentino no número de Hollows sendo destruídos no Mundo dos Vivos. Eles também recebem relatórios separados de moradores do distrito de Rukon desaparecidos. Finalmente, o Seireitei, lar dos Soul Reapers, é atacado por um grupo que se autodenomina Wandenreich. Liderados por Yhwach, o pai de todos os Quincys, os Wandenreich declaram guerra contra os Soul Reapers com a seguinte mensagem: "Daqui a cinco dias, a Soul Society será aniquilada pelos Wandenreich." A história e a verdade mantidas escondidas pelos Soul Reapers por mil longos anos são finalmente trazidas à luz. Todas as coisas devem chegar ao fim quando a batalha final de Ichigo Kurosaki começar! (Fonte: site oficial, traduzido)',
        "generos": 'Ação, Aventura, Fantasia',
        "dublagem": 'Legendado/Dublado',
        "estudio": 'Pierrot',
        "autor": 'Tite Kubo'
    },
    {
        "nome": 'jujutsu no kaisen',
        "lancamento": 2024,
        "img": './imgs/jujutsu no kaisen.jpg',
        "episodios": 23,
        "sinopse": 'Jujutsu Kaisen Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão, tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito interessante na Escola Sugisawa',
        "generos": 'Ação, Demônios, Sobrenatural, Shounen',
        "dublagem": 'Legendado/Dublado',
        "estudio": 'MAPPA',
        "autor": 'Gege Akutami'
    },
    {
        "nome": 'Boruto',
        "lancamento": 2024,
        "img": './imgs/Boruto.jpg',
        "episodios": 223,
        "sinopse": 'Naruto era um jovem shinobi com um talento incorrigível para travessuras. Ele conseguiu seu sonho de se tornar o maior ninja da aldeia e seu rosto fica no topo do monumento Hokage. Mas esta não é a sua história … Uma nova geração de ninjas estão prontos para subir ao palco, liderados pelo próprio filho de Naruto, Boruto!',
        "generos": 'Ação, Artes Marciais, Aventura, Fantasia',
        "dublagem": 'Legendado/Dublado',
        "estudio": 'Studio Pierrot',
        "autor": 'Ukyō Kodachi'
    },
    {
        "nome": 'Chiyu Mahou no Machigatta',
        "lancamento": 2023,
        "img": './imgs/Chiyu Mahou no Machigatta.jpg',
        "episodios": 223,
        "sinopse": 'Uma caminhada comum de volta para casa após a escola se transforma em uma jornada épica para Usato! Após ser subitamente transportado para outro mundo juntamente de dois colegas de classe, Usato descobre que foi convocado lá por acidente. No entanto, as coisas mudam de água pro vinho quando ele descobre que tem uma habilidade única para a magia de cura! Agora, ele treina além das limitações humanas, utilizando suas habilidades de autocura para ganhar uma força absurda e uma resistência incomparável.',
        "generos": 'Ação, Fantasia',
        "dublagem": 'Legendado',
        "estudio": 'White Fox',
        "autor": 'Kurokata'
    },
    {
        "nome": 'Tokyo Ghoul',
        "lancamento": 2023,
        "img": './imgs/Tokyo Ghoul.webp',
        "episodios": 26,
        "sinopse": 'Estranhos assassinatos começam a acontecer em Tokyo. Devido a evidência líquida nos casos, a polícia concluiu que os ataques são resultados de uma criatura que se alimenta de outros seres, um “ghoul” do tipo “eater”. Dois amigos de faculdade, Kaneki e Hide, criam a teoria de que os ghouls estão imitando os humanos, por isso nunca são vistos ou capturados. Eles nem imaginam que essa teoria pode ser verdade e a coisa sairá do controle, pois Kaneki acaba se envolvendo, sem saber, com uma dessas criaturas, que ao atacar o garoto acaba morrendo acidentalmente, mas o deixa seriamente ferido e a ponto de morrer. A única salvação? Um transplante envolvendo a própria criatura, mas que poderá trazer consequências terríveis para Kaneki. O que acontecerá a partir de agora?',
        "generos": 'Ação, Drama, Mistério, Sobrenatural',
        "dublagem": 'Legendado',
        "estudio": 'Pierrot',
        "autor": 'Sui Ishida'
    },
    {
        "nome": "Jigoku Shoujo",
        "lancamento": 2005,
        "img": "./imgs/JigokuShoujo.png",
        "episodios": 26,
        "sinopse": "Uma garota misteriosa oferece às pessoas a chance de enviar seus inimigos para o inferno, mas com um preço: elas mesmas irão para o inferno quando morrerem. Uma série sobre vingança e as consequências de nossos atos.",
        "generos": "Drama, Fantasia, Horror, Mistério, Sobrenatural",
        "dublagem": "Legendado",
        "estudio": "Studio Deen",
        "autor": "Hiroshi Watanabe"
    },
    {
        "nome": "Jojo's Bizarre Adventure Part 5",
        "lancamento": 2016,
        "img": "./imgs/JojosBizarreAdventurePart5.webp",
        "episodios": 39,
        "sinopse": "Na cidade costeira de Nápoles, a corrupção fervilha: a polícia conspira abertamente com bandidos, as drogas correm desenfreadas entre os jovens e a máfia governa as ruas com mão de ferro. No entanto, vários encontros fatídicos ocorrerão em breve. Entra Giorno Giovanna, um garoto de 15 anos com uma ligação excêntrica com a família Joestar, que ganha a vida com empregos de meio período e furtos de carteira. Além disso, ele é dotado da inexplicável habilidade Stand de dar e criar vida – cultivar plantas a partir do solo e transformar objetos inanimados em animais vivos, uma habilidade que ele apelidou de “Experiência Dourada”. Fascinado pelo poder dos gangsters locais, Giorno sonha em subir na hierarquia deles e se tornar uma “estrela da gangue”, um feito possível graças ao seu encontro com Bruno Bucciarati, um membro da gangue Passione com seu próprio senso de justiça. JoJo no Kimyou na Bouken: Ougon no Kaze segue os esforços de Giorno depois de se juntar à equipe de Bruno enquanto trabalhava para Passione, afastando outros gangsters e planejando secretamente derrubar seu misterioso chefe.",
        "generos": "Ação, Aventura, Fantasia, Shounen, Sobrenatural",
        "dublagem": "Legendado/Dublado",
        "estudio": "David Production",
        "autor": "Hirohiko Araki"
    },
    {
        "nome": "Sword Art Online",
        "lancamento": 2012,
        "img": "./imgs/SwordArtOnline.PNG",
        "episodios": 25,
        "sinopse": "Escapar é impossível até o jogo ser completado, um game over significa uma verdadeira morte. Sem saber a verdade da misteriosa nova geração do RPG, Sword Art Online, aproximadamente 10 mil jogadores logaram juntos, abrindo as cortinas para essa cruel batalha mortal. Jogando sozinho, o protagonista Kirito imediatamente aceitou a verdade desse RPG, e no mundo do jogo, em um castelo flutuante gigante chamado Aincrad, ele se distinguiu como um jogador solitário. Buscando completar o jogo alcançando o andar mais alto, Kirito arriscadamente continua sozinho. Por causa de um convite agressivo de uma guerreira e especialista em esgrima, Asuna, ele se juntou a ela. Esse encontro trouxe uma oportunidade para chamar pelo destinado Kirito.",
        "generos": "Ação, Aventura, Drama, Fantasia, Romance",
        "dublagem": "Legendado/Dublado",
        "estudio": "A-1 Pictures",
        "autor": "Reki Kawahara"
    },
    {
        "nome": "Os Cavaleiros do Zodíaco: The Lost Canvas",
        "lancamento": 2009,
        "img": "./imgs/OsCavaleirosdoZodíacoTheLostCanvas.webp",
        "episodios": 26,
        "sinopse": "O enredo de The Lost Canvas gira em torno da antiga guerra santa entre os cavaleiros de Atena e o exército de Hades. O anime foca na amizade e no conflito entre Tenma, o Cavaleiro de Pégaso, e Alone, que acaba se tornando a reencarnação de Hades. A série mostra as batalhas épicas entre os cavaleiros de ouro e os espectros de Hades.",
        "generos": "Ação, Aventura, Fantasia, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "TMS Entertainment",
        "autor": "Shiori Teshirogi"
    },
    {
        "nome": "Digimon Adventure",
        "lancamento": 1999,
        "img": "./imgs/DigimonAdventure.jpg",
        "episodios": 54,
        "sinopse": "Sete crianças estão num acampamento de verão quando, inesperadamente, uns estranhos aparelhos caem do céu – os digivices (digital devices ou dispositivos digitais) e elas são transportadas para o Mundo Digital (Digimundo), mais propriamente para uma ilha conhecida como Ilha Arquivo. Cada uma das crianças conhece um digimon que se torna seu companheiro. Para tentarem regressar a casa, as crianças percebem que existem digimons bons e digimons maus. Eles iniciam uma luta contra os inimigos que pretendem dominar o Mundo Digital com a força da Escuridão, contando com a ajuda dos seus digimons que, com o passar do tempo, se tornam mais poderosos e conseguem se converter em criaturas maiores e mais fortes.",
        "generos": "Aventura, Comédia, Fantasia, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "Toei Animation",
        "autor": "Akiyoshi Hongo"
    },

    {
        "nome": "Attack on Titan",
        "lancamento": 2013,
        "img": "./imgs/AttackOnTitan.jpg",
        "episodios": 87,
        "sinopse": "A história de Ataque dos Titãs gira em torno de uma humanidade que vem sendo exterminada por titãs. Porém alguns seres humanos estão dispostos a mudar história e formar um exército de ataque aos seres assassinos. É assim que entra Eren, nosso protagonista, que após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa.",
        "generos": "Ação, Drama, Fantasia, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "Wit Studio",
        "autor": "Hajime Isayama"
    },
    {
        "nome": "Fullmetal Alchemist: Brotherhood",
        "lancamento": 2009,
        "img": "./imgs/FullmetalAlchemist.jpg",
        "episodios": 64,
        "sinopse": "Depois de perderem sua mãe, Alphonse e Edward Elric tentam trazê-la de volta usando uma técnica de alquimia proíbida. Contudo, o princípio básico da alquimia é a ‘troca equivalente’, e tentar ressucitar alguém custa muito alto. Ed perde sua perna, e Al perde seu corpo. Ed consegue selar a alma de Al dentro de uma grande armadura metálica, dando em troca seu braço. Anos depois, Ed (com dois membros de metal) e Al (ainda preso na armadura) deixam a sua cidade natal.Ed, que possui um talento nato para a alquimia, se torna um alquimista com certificado nacional, e logo passa a ser chamado de ‘full metal alchemist’. Mas o verdadeiro objetivo dos irmãos é encontrar a pedra filosofal, na esperança de recuperarem os seus corpos originais. Logo eles descobrem que essa mística pedra, que pode nem existir, é visada não só por eles, mas como muitas outras pessoas também.",
        "generos": "Ação, Aventura, Fantasia, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "Bones",
        "autor": "Hiromu Arakawa"
    },
    {
        "nome": "One Punch Man",
        "lancamento": 2015,
        "img": "./imgs/OnePunchMan.jpg",
        "episodios": 24,
        "sinopse": "Saitama se tornou um herói por hobbie. Após três anos de um treinamento “especial”, ele se tornou tão forte que é praticamente invencível. Na verdade, ele é forte demais! Até mesmo o mais poderoso dos inimigos é derrotado em um soco só, mas, com uma vida sem desafios, ele sofre com o tédio e a depressão… Mesmo perdendo a sua paixão pelo heroísmo junto ao seu cabelo, ele ainda é confrontado por inimigos diariamente. Por quanto tempo ele ainda conseguirá seguir este caminho?",
        "generos": "Ação, Comédia, Super Poderes, Seinen",
        "dublagem": "Legendado/Dublado",
        "estudio": "Madhouse",
        "autor": "ONE"
    },
    {
        "nome": "My Hero Academia",
        "lancamento": 2016,
        "img": "./imgs/MyHeroAcademia.webp",
        "episodios": 138,
        "sinopse": "Por toda a sua vida, Izuku sonhou ser um herói — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo.",
        "generos": "Ação, Comédia, Fantasia, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "Bones",
        "autor": "Kohei Horikoshi"
    },
    {
        "nome": "Demon Slayer: Kimetsu no Yaiba",
        "lancamento": 2019,
        "img": "./imgs/DemonSlaye.jpg",
        "episodios": 44,
        "sinopse": "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.",
        "generos": "Ação, Fantasia, Sobrenatural, Shounen",
        "dublagem": "Legendado/Dublado",
        "estudio": "ufotable",
        "autor": "Koyoharu Gotouge"
    }
    
    
];
