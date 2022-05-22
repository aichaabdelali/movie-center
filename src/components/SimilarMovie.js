import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SimilarMovie = () => {
  const params = useParams();
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const [similars, setSimilars] = useState({});

  const fetchSimilar = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results.slice(0, 4);
  };

  useEffect(() => {
    const getSimilar = async () => {
      const similar_movies = await fetchSimilar(
        `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=cb56581cd73993b93e4cd062650225b9&language=en-US`
      );

      setSimilars(similar_movies);
    };
    getSimilar();
  }, [params.id]);

  return <>{similars.title}</>;
};

export default SimilarMovie;
