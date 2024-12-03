import React, { useEffect, useState } from 'react';
import './Five.css';
import axios, { Axios } from 'axios';

function Five() {
  const [movieName, setMoviesName] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const API_KEY = '67bebe0e23-e827c01d45-snt7l2';

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s={movie_name}&apikey=${API_KEY}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <form className=" movie-form container">
        <input
          className="movie-input"
          type="text"
          placeholder="Enter movie title"
        />
        <button className="five-btn">movie search</button>
      </form>
    </div>
  );
}

export default Five;
