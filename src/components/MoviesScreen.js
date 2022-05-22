import Movies from "./Movies";
import { Container } from "react-bootstrap";

const MoviesScreen = ({ movies }) => {
  return (
    <Container>
      <h3>All Popular Movies</h3>
      <Movies movies={movies} />
    </Container>
  );
};

export default MoviesScreen;
