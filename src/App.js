import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";

const App = () => {
  const [movies, setMovies] = useState([]);

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb56581cd73993b93e4cd062650225b9&page=1";
  /*const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=cb56581cd73993b93e4cd062650225b9&query="';*/

  const fetchMovies = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data.results);
    return data.results;
  };

  useEffect(() => {
    const getMovies = async () => {
      const moviesdb = await fetchMovies();
      setMovies(moviesdb);
    };

    getMovies();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Movies movies={movies} />
      </main>
      <Footer />
    </>
  );
};

export default App;
