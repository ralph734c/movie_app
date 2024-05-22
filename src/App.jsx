import { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState({
    Title: "Lock, Stock and Two Smoking Barrels",
    Year: "1998",
    Rated: "R",
    Released: "28 Aug 1998",
    Runtime: "107 min",
    Genre: "Action, Comedy, Crime",
    Director: "Guy Ritchie",
    Writer: "Guy Ritchie",
    Actors: "Jason Flemyng, Dexter Fletcher, Nick Moran",
    Plot: "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
    Language: "English",
    Country: "United Kingdom, United States",
    Awards: "Won 1 BAFTA Award13 wins & 9 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.1/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "75%",
      },
      {
        Source: "Metacritic",
        Value: "66/100",
      },
    ],
    Metascore: "66",
    imdbRating: "8.1",
    imdbVotes: "616,742",
    imdbID: "tt0120735",
    Type: "movie",
    DVD: "12 Feb 2014",
    BoxOffice: "$3,753,929",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  });

  return (
    <>
      <Navbar />
      <MovieCard movie={data} />
    </>
  );
}

export default App;
