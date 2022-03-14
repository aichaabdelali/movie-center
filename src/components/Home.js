import Movies from "./Movies";
import { Container } from "react-bootstrap";

const Home = ({ movies }) => {
  return (
    <Container>
      <h3>Popular Movies</h3>
      <Movies movies={movies} />
    </Container>
  );
};

export default Home;
