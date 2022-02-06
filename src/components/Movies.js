import { Row, Col } from "react-bootstrap";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={3}>
            <Movie movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Movies;
