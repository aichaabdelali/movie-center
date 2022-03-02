import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieScreen = () => {
  const params = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getMovie = async () => {
      const moviesdb = await fetchMovie(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US`
      );

      setMovie(moviesdb);
    };
    getMovie();
  }, [params]);
  //still not working

  return <div>{movie.title}</div>;
};

export default MovieScreen;
