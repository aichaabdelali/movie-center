import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  return (
    <Link to={`/movie/${movie.id}`}>
      <Image
        src={IMG_URL + movie.poster_path}
        alt={movie.title}
        fluid
        className="poster"
      />
    </Link>
  );
};

export default Movie;
