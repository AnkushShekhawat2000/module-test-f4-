import React from "react";
import "./MoviesList.css"

const MovieList = ({ movies, selectedGenre }) => {
  return (
    <div  className="movieList-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {selectedGenre ?  movies.filter((movie) => movie.genre === selectedGenre).map((movie) => (
                  <tr key={movie.title}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                  </tr>
                ))
              : movies.map((movie) => (
                <tr key={movie.title}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;