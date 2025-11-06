import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch('/api/movies/popular')
  .then(res => res.json())
  .then(data => {
    console.log(data)

    setMovies(data.results);
    setLoading(false);
  })
  .catch(err=>{
    console.error(err);
    setMessage("Failed to fetch");
    setLoading(false);
  });
 }, []);

 return (
  <div className="App">
    <h1>Movie Dashboard</h1>

  
      {loading ? (
      <p>'loading...'</p>
      ) : (
        <div className="movie-grid">
          {movies.map(movie =>(
            <div key={movie.id}
            className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    
  </div>
 )
}

export default App
