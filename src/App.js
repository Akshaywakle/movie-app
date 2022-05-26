import { useState, useEffect } from 'react';
import './App.css';

import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=e85a2d6e';
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    SearchMovies('batman');
  }, [])

  return (
    <>
      <section>
        <div className='container'>
          <div className='d-flex my-5'>
            <input className='form-control' type="text" value={searchTerm} placeholder="search Movie" onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='btn btn-primary' href='' onClick={() => SearchMovies(searchTerm)}>Search Movie</button>
          </div>
        </div>
      </section>
      {
        movies?.length > 0
          ? (
            <section className='moviecard'>
              <div className='container'>
                <div className='row'>
                  {movies.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <div className='container'><h2>No movies found</h2></div>
          )
      }
    </>
  );
}



export default App;
