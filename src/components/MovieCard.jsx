import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-emerald-200">
      <h1 className="text-3xl font-bold">{movie.Title}</h1>
      <p>Directed by {movie.Director}</p>
      <p>Rating: {movie.Rated}</p>
      <p>Rotten Tomatoes: {}</p>
      <div className="flex justify-center items-center">
        <img src={movie.Poster} alt={movie.Title}></img>
      </div>
      <p>{movie.Awards}</p>
      <p className="font-bold">{movie.Plot}</p>
    </div>
  );
};

export default MovieCard;
