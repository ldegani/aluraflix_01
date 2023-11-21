let listaFilmes = [
  'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  'https://www.themoviedb.org/t/p/original/1ewwtjqAcwZ5abr2X7coGN0UwaI.jpg',
  'https://www.themoviedb.org/t/p/original/eZErsoRjOW7aqTBrxGHoHQ7BeWs.jpg',
  'https://image.tmdb.org/t/p/original/nxAQK652T4QBnmFa4046R0AwULl.jpg',
  'https://image.tmdb.org/t/p/original/lImKHDfExAulp16grYm8zD5eONE.jpg'
];

let nomeFilmes = ['Lord of The Rings - The Fellowship of The Ring', 'Lord of The Rings - The Two Towers', 'Lord of The Rings - The Return of The King', 'The Hunger Games', 'The Hunger Games - Catching Fire', 'The Hunger Games - Mockingjay Part 1', 'The Hunger Games - Mockingjay Part 2'];
  
let moviesContainer = document.getElementById('movies-container');

for(let i = 0; i < listaFilmes.length; i++) {
  if(listaFilmes[i].endsWith('jpg')) {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let para = document.createElement('p');

    img.src = listaFilmes[i];
    div.className = 'movie-div';
    para.className = 'movie-name';
    para.textContent = nomeFilmes[i];

    div.appendChild(img);
    div.appendChild(para);
    moviesContainer.appendChild(div)
  }
}