import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MovieScreen from "./components/MovieScreen";
import MoviesScreen from "./components/MoviesScreen";

const App = () => {
  const [movies, setMovies] = useState([]);
  const Popular_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US";

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };

  useEffect(() => {
    const getMovies = async () => {
      const moviesdb = await fetchMovies(Popular_URL);

      setMovies(moviesdb);
    };
    getMovies();
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movies" element={<MoviesScreen movies={movies} />} />
          <Route path="/movie/:id" element={<MovieScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
