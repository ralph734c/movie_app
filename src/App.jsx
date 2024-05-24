import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import axios from "axios";
import db from "../db.json";

const movieAPIurl = "http://www.omdbapi.com/";
const omdbAPIKey = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [randomNumber, setRandomNumber] = useState("");
  const [favoriteList, setFavoriteList] = useState([]); // TODO
  const [movieData, setMovieData] = useState(db.favorites[0]);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    const min = 1;
    const max = 9999999;
    const number = generateRandomNumber(min, max);
    const formattedNumber = String(number).padStart(7, "0");
    setRandomNumber(`tt${formattedNumber}`);
  };

  const getFavorites = async () => {
    try {
      const response = await fetch("http://localhost:3030/favorites");
      const result = await response.json();
      setFavoriteList(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    if (randomNumber) {
      const getMovie = async () => {
        try {
          const { data: response } = await axios.get(
            `${movieAPIurl}?apikey=${omdbAPIKey}&i=${randomNumber}`
          );
          setMovieData(response);
          console.log(response);
        } catch (error) {
          console.error(error);
          setMovieData(null)
        }
      };
      getMovie();
    }
  }, [randomNumber]);

  return (
    <div>
      <Navbar />
      <button
        onClick={handleClick}
        className="bg-slate-950 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-slate-900"
      >
        Find Random Media
      </button>
      {randomNumber && <p>Generated Number: {`IMDB ID: tt${randomNumber}`}</p>}
      <div>
        {movieData ? (
          <MovieCard
            movie={movieData}
            ratings={movieData.Ratings}
            director={movieData.Director}
            rated={movieData.Rated}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
