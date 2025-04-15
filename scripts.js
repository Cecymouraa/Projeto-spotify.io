document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Skank', image: './img/artista-Skank.jpeg' },
        { name: 'Os paralamas do sucesso', image: './img/Paralamas.jpeg' },
        { name: 'Capital Inicial', image: './img/artistas-capital-inicial.jpeg' },
        { name: 'Engenheiros do Hawaii', image: './img/artistas-Engenheiros-do-Hawaii.jpeg' },
        { name: 'Kiss', image: './img/artistas-kiss.jpeg' },
        { name: 'Rita Lee', image:'./img/artista-Rita-Lee - Rita Lee.jpeg' },
        { name: 'CPM 22', image:'./img/artista-CPM-22.jpeg' },
        { name: 'Legião Urbana', image: './img/artistas-legiao-urbana.jpeg' },
        { name: 'Scorpions', image: './img/scorpions.jpeg' },
        { name: 'Mamonas Assassinas', image: './img/artistas-Mamonas-Assassinas.jpeg' }
    ];

    const albumsData = [
        { name: 'Crazy Word', artist: 'Scorpions', image: './img/Crazy-World.jpeg' },
        { name: 'Capital Inicial (1986)', artist: 'Capital Inicial', image: './img/capital-inicial.jpeg' },
        { name: 'O passo do Lui', artist: 'Os Paralamas do Sucesso', image: './img/album-O-Passo-do-Lui-Os-Paralamas-do-Sucesso-1984.jpeg' },
        { name: 'Eliminator', artist: 'ZZ Top', image: './img/album-eliminator-c.jpeg'},
        { name: 'Volume dois', artist: 'Titãs', image: './img/album-Fullgás.jpeg' },
        { name: 'Rappa-Mundi', artist: 'O rappa', image: './img/O-rappa.jpeg' },
        { name: 'Quebra-Cabeça', artist: 'Gabriel O Pensador', image: './img/Gabriel.jpeg' },
        { name: 'Seu Espião', artist: 'Kid Abelha', image: './img/Kid.jpeg' },
        { name: 'Extraño', artist: 'Nenhum de nós', image: './img/Nenhum.jpeg' },
        { name: 'Nevermind', artist: 'Nirvana', image: './img/album-Nevermind.jpeg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="Imagem do álbum ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;

        albumsGrid.appendChild(albumCard);
    });
});


