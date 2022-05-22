import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ movies }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const most_popular = movies
    .filter((movie) => movie.vote_average > 7)
    .slice(0, 8);
  console.log(most_popular);
  return (
    <Container>
      <h3>Most Popular Movies</h3>
      <Row>
        {most_popular.map((most) => (
          <Col key={most.id} md={3}>
            <Link to={`/movie/${most.id}`}>
              <Image
                src={IMG_URL + most.poster_path}
                alt={most.title}
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

export default Home;
