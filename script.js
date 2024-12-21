// Dummy login credentials
const validUser = { username: 'user', password: 'password' };

// Dummy movie data
const movies = [
  { id: 1, title: 'Movie 1', description: 'Action movie' },
  { id: 2, title: 'Movie 2', description: 'Romantic movie' },
  { id: 3, title: 'Movie 3', description: 'Comedy movie' }
];

// Handle login
document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === validUser.username && password === validUser.password) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('movie-page').style.display = 'block';
    loadMovies();
  } else {
    document.getElementById('login-error').textContent = 'Invalid credentials, please try again.';
  }
});

// Load movie list
function loadMovies() {
  const movieListContainer = document.getElementById('movie-list');
  movieListContainer.innerHTML = '';
  
  movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <div class="movie-title">${movie.title}</div>
      <div class="movie-description">${movie.description}</div>
    `;
    
    movieCard.addEventListener('click', () => selectMovie(movie));
    movieListContainer.appendChild(movieCard);
  });
}

// Select a movie
function selectMovie(movie) {
  document.getElementById('movie-page').style.display = 'none';
  document.getElementById('ticket-page').style.display = 'block';
  
  const selectedMovieContainer = document.getElementById('selected-movie');
  selectedMovieContainer.innerHTML = `
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
  `;
  
  document.getElementById('book-ticket').onclick = function () {
    alert(`Ticket booked for ${movie.title}`);
  };
}
