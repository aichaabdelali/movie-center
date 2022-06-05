import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SimilarMovie = ({ similars }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  return (
    <Container>
      <h5>Similar Movies</h5>
      <Row>
        {similars.map((similar) => (
          <Col>
            <Link to={`/movie/${similar.id}`}>
              <Image
                src={IMG_URL + similar.poster_path}
                alt={similar.title}
                fluid
                className="poster"
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SimilarMovie;
