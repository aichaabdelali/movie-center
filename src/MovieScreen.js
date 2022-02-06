import { useParams } from "react-router-dom";

const MovieScreen = ({ movies }) => {
  const params = useParams();
  const movie = movies.find((m) => m.id === params.id);
  console.log(movie);
  return <div>movie</div>;
};

export default MovieScreen;
