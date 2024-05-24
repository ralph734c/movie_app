import React from "react";

const MovieCard = ({ movie, ratings, director, rated}) => {
  // const rottenTomatoesObject = ratings.find( // TODO - FIX
  //   (rating) => rating.Source === "Rotten Tomatoes"
  // );

  return (
    <div className="bg-emerald-200">
      <h1 className="text-3xl font-bold">{movie.Title}</h1>
      <p>
        <strong>Directed by: </strong>
        {director}
      </p>
      <p>
        <strong>Rating: </strong>
        {rated}
      </p>
      {/* {rottenTomatoesObject.Value ? ( - TODO - Fix
        <p>
          <strong>Rotten Tomatoes: </strong>
          {rottenTomatoesObject.Value}
        </p>
      ) : (
        "No Rotten Tomatoes Value"
      )} */}
      <div className="flex justify-center items-center">
        <img src={movie.Poster === "N/A" ? "https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg" : movie.Poster} alt={movie.Title}></img>
      </div>
      <p>
        <strong>Awards: </strong>
        {movie.Awards}
      </p>
      <br />
      <p className="font-extrabold">What is this movie about?</p><br />
      <p className="font-medium">{movie.Plot}</p>
    </div>
  );
};

export default MovieCard;
